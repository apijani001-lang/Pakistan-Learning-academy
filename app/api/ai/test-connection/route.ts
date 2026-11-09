
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  try {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          success: false,
          message: "Gemini API key is missing from server settings.",
        },
        { status: 503 }
      );
    }

    // Verify signed-in user
    const supabase = await createClient();

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json(
        {
          success: false,
          message: "Please sign in first.",
        },
        { status: 401 }
      );
    }

    // Verify admin access
    const { data: isAdmin, error: adminError } =
      await supabase.rpc("is_admin");

    if (adminError || isAdmin !== true) {
      return NextResponse.json(
        {
          success: false,
          message: "You are not authorized to test the AI connection.",
        },
        { status: 403 }
      );
    }

    // Test Gemini connection
    const controller = new AbortController();
    const timeout = setTimeout(
      () => controller.abort(),
      20000
    );

    let geminiResponse: Response;

    try {
      geminiResponse = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/interactions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-goog-api-key": apiKey,
          },
          body: JSON.stringify({
            model: "gemini-3.8-flash",
            input: "Reply with exactly: PLA_READY",
          }),
          signal: controller.signal,
          cache: "no-store",
        }
      );
    } finally {
      clearTimeout(timeout);
    }

    if (!geminiResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            geminiResponse.status === 429
              ? "Gemini free-tier request limit reached. Please try later."
              : geminiResponse.status === 401 ||
                  geminiResponse.status === 403
                ? "Gemini rejected the API key or project access."
                : `Gemini connection failed (HTTP ${geminiResponse.status}).`,
        },
        { status: 502 }
      );
    }

    const result = await geminiResponse.json();

    if (
      typeof result.output_text !== "string" ||
      !result.output_text.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Gemini returned an unexpected response.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Gemini AI connection is working.",
      model: "gemini-3.8-flash",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message:
          "AI connection could not be completed. Check server settings and try again.",
      },
      { status: 500 }
    );
  }
}
