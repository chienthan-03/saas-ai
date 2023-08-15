import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

import { checkSubscription } from "@/lib/subscription";
// import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

  export async function POST(
    req: Request
  ) {
    try {
      const { userId } = auth();
      const body = await req.json();
      const { messages } = body;
      
      if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
      }

      if (!configuration.apiKey) {
        return new NextResponse("OpenAI API Key not configured.", { status: 500 });
      }

      if (!messages) {
        return new NextResponse("Messages are required", { status: 400 });
      }
      const res = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages
      })

      // const freeTrial = await checkApiLimit();
      // const isPro = await checkSubscription();
      // if (!isPro) {
      //   await incrementApiLimit();
      // }

      return NextResponse.json(res.data.choices[0].message);
    } catch (error) {
      console.log('[CONVERSATION_ERROR]', error);
      return new NextResponse("Internal Error", { status: 500 });
    }
  }