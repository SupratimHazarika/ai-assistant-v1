import { openai } from "./client";
import { Message, generateConfig, generateResult } from "./types";

export async function generateCompletion(
    messages: Message[],
    config?: generateConfig
): Promise <generateResult> {
    
    const model = config?.model ?? "gpt-4.1-mini";
    const temperature = config?.temperature ?? 0.2;
    const maxTokens = config?.maxTokens ?? 200;

    const start = Date.now();

    try {
        const response = await openai.chat.completions.create({
            model, 
            messages,
            temperature,
            max_tokens : maxTokens
        })

        const latencyMs = start - Date.now();

        return {
            success: true,
            data: {
                text: response?.choices[0]?.message?.content ?? "",
                finishReason: response?.choices[0].finish_reason,
            }, 
            usage: {
                inputTokens: response?.usage?.prompt_tokens ?? 0,
                outputTokens: response?.usage?.completion_tokens ?? 0,
                totalTokens: response?.usage?.total_tokens ?? 0,
            },
            meta: {
                model,
                temperature,
                latencyMs
            }
        }
    } catch(error: any){
        return {
            success: false,
            error: {
                type: "LLM_ERROR",
                message: error.message ?? "Unknown Error"
            }
        }
    }
}

