export type Role = "system" | "user" | "assistant";

export interface Message {
    role: Role,
    content: string
}

export interface generateConfig {
    model?: string,
    temperature?: number,
    maxTokens?: number
}

export interface generateResult {
    success: boolean,
    data?: {
        text: string,
        finishReason: string | null;
    },
    usage?: {
        inputTokens: number,
        outputTokens: number, 
        totalTokens: number 
    },
    meta?: {
        model: string, 
        temperature: number,
        latencyMs: number
    },
    error?: {
        type: string,
        message: string
    }

}





