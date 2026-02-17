# AI Assistant v1

Minimal AI backend service built with:

- Node.js
- TypeScript
- OpenAI API

## Features

- Structured message interface
- Token usage tracking
- Latency logging
- Temperature control
- Reusable AI layer (generateCompletion)

## Architecture

Client → Express → AI Layer → OpenAI API → Structured Response

## Next Steps

- Memory layer
- Structured output enforcement
- Multi-model routing
- RAG integration