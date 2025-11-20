 
import { NextRequest, NextResponse } from "next/server";
import { askPortfolioAssistant } from "@/lib/portfolio-assistant";

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await askPortfolioAssistant(message, history);

    return NextResponse.json({ response });
  } catch (error) {
    console.error("Portfolio chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
