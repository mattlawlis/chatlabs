import { LLM } from "@/types"

const OPENAI_PLATORM_LINK = "https://platform.openai.com/docs/overview"

// OpenAI Models (UPDATED 1/25/24) -----------------------------

const GPT4Turbo: LLM = {
  modelId: "gpt-4-turbo",
  modelName: "GPT-4 Turbo",
  provider: "openai",
  hostedId: "gpt-4-turbo",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  tier: "pro",
  tools: true,
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 10,
    outputCost: 30
  }
}

// GPT-4 (UPDATED 1/29/24)
const GPT4: LLM = {
  modelId: "gpt-4",
  modelName: "GPT-4",
  provider: "openai",
  hostedId: "gpt-4",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  tier: "pro",
  tools: true,
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 30,
    outputCost: 60
  }
}

// GPT-3.5 Turbo (UPDATED 1/25/24)
const GPT3_5Turbo: LLM = {
  modelId: "gpt-3.5-turbo-0125",
  modelName: "GPT-3.5 Turbo",
  provider: "openai",
  hostedId: "gpt-3.5-turbo-0125",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: false,
  tools: true,
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.5,
    outputCost: 1.5
  }
}

const GPT4O: LLM = {
  modelId: "gpt-4o",
  modelName: "GPT-4o",
  provider: "openai",
  hostedId: "gpt-4o-2024-08-06",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  tools: true,
  tier: "pro",
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.5,
    outputCost: 10.0
  }
}

const GPT4O_Mini: LLM = {
  modelId: "gpt-4o-mini",
  modelName: "GPT-4o mini",
  provider: "openai",
  hostedId: "gpt-4o-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  tools: true,
  tier: "free",
  new: false,
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.15,
    outputCost: 0.6
  }
}

const O1_Preview: LLM = {
  modelId: "o1-preview",
  modelName: "O1 Preview",
  provider: "openai",
  hostedId: "o1-preview",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  tools: true,
  tier: "ultimate",
  new: true,
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 15,
    outputCost: 60
  }
}

const O1_Mini: LLM = {
  modelId: "o1-mini",
  modelName: "O1 Mini",
  provider: "openai",
  hostedId: "o1-mini",
  platformLink: OPENAI_PLATORM_LINK,
  imageInput: true,
  tools: true,
  tier: "pro",
  new: true,
  supportsStreaming: true,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 3,
    outputCost: 12
  }
}

export const OPENAI_LLM_LIST: LLM[] = [
  GPT4Turbo,
  GPT4,
  GPT3_5Turbo,
  GPT4O,
  GPT4O_Mini,
  O1_Mini,
  O1_Preview
]
