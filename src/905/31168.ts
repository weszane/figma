import { KC, Yj, YO, Ik, eu, bz, E$, zM, g1, ai } from "../vendor/835909";
var n;
var r;
var a;
var s;
let l = KC([Yj(), YO(KC([Ik({
  type: eu("text"),
  text: Yj()
}), (n = {
  type: eu("image"),
  image: bz()
}, Ik(n)), (r = {
  type: eu("file"),
  data: bz(),
  mimeType: Yj()
}, Ik(r))]))]);
let $$d9 = E$(Ik({
  type: eu("tool-result"),
  toolName: Yj(),
  toolCallId: Yj(),
  isError: zM().optional()
}), (a = {
  result: bz()
}, Ik(a)));
let $$c7 = E$(Ik({
  type: eu("tool-call"),
  toolCallId: Yj(),
  toolName: Yj()
}), (s = {
  args: bz()
}, Ik(s)));
let u = Ik({
  type: eu("text"),
  text: Yj()
});
let p = Ik({
  type: eu("reasoning"),
  text: Yj(),
  signature: Yj().optional()
});
let m = Ik({
  type: eu("redacted-reasoning"),
  data: Yj()
});
let h = KC([Yj(), YO(KC([u, p, m, $$c7]))]);
let $$g8 = Ik({
  role: eu("tool"),
  content: YO($$d9)
});
let f = Ik({
  role: eu("user"),
  content: l
});
let $$_0 = Ik({
  role: eu("assistant"),
  content: h
});
let A = Ik({
  role: eu("system"),
  content: Yj()
});
let y = KC([f, $$_0, $$g8, A]);
let b = Ik({
  openai: Ik({
    logitBias: g1(ai()).optional(),
    logprobs: KC([zM(), ai()]).optional(),
    reasoningEffort: KC([eu("low"), eu("medium"), eu("high")]).optional(),
    maxCompletionTokens: ai().optional(),
    store: zM().optional(),
    prediction: Ik({
      type: eu("content"),
      content: Yj()
    }).optional(),
    tryUseResponsesApi: zM().optional().describe("If true and the model supports it, the request will be sent with the Responses API instead of the Completions API."),
    previousResponseId: Yj().optional().describe("The response ID from the previous request. This enables reusing reasoning across requests."),
    priority: zM().optional(),
    include: YO(KC([eu("reasoning.encrypted_content"), eu("file_search_call.results")])).optional(),
    reasoningSummary: KC([eu("auto"), eu("detailed")]).optional()
  }).optional(),
  anthropic: Ik({
    thinking: Ik({
      type: eu("enabled"),
      budgetTokens: ai()
    })
  }).optional(),
  bedrock: Ik({
    reasoning_config: Ik({
      type: eu("enabled"),
      budget_tokens: ai()
    })
  }).optional(),
  google: Ik({
    vertexAnthropicRegion: Yj().optional(),
    candidateCount: ai().optional()
  }).optional(),
  fireworks: Ik({
    additionalModelRequestFields: g1(YO(Yj())).optional()
  }).optional()
});
let $$v6 = Ik({
  cortexAiModelId: Yj().optional(),
  provider: Yj().optional(),
  region: Yj().optional(),
  model: Yj().optional(),
  messages: YO(y),
  system: Yj().optional(),
  maxTokens: ai().optional(),
  temperature: ai().optional(),
  topP: ai().optional(),
  topK: ai().optional(),
  presencePenalty: ai().optional(),
  frequencyPenalty: ai().optional(),
  stopSequences: YO(Yj()).optional(),
  seed: ai().optional(),
  headers: g1(Yj(), Yj().optional()).optional(),
  providerOptions: b.optional()
});
let $$I1 = KC([eu("stop"), eu("length"), eu("tool-calls"), eu("other"), eu("unknown")]);
let $$E3 = Ik({
  promptTokens: ai(),
  completionTokens: ai(),
  totalTokens: ai()
});
let $$x2 = Ik({
  id: Yj(),
  timestamp: Yj(),
  modelId: Yj(),
  headers: g1(Yj(), Yj()).optional()
});
let $$S4 = YO(Ik({
  token: Yj(),
  logprob: ai(),
  topLogprobs: YO(Ik({
    token: Yj(),
    logprob: ai()
  }))
}));
let $$w5 = KC([Ik({
  type: eu("text"),
  text: Yj(),
  signature: Yj().optional()
}), Ik({
  type: eu("redacted"),
  data: Yj()
})]);
export const Dj = $$_0;
export const zF = $$I1;
export const Ex = $$x2;
export const cn = $$E3;
export const ue = $$S4;
export const Ph = $$w5;
export const lF = $$v6;
export const gB = $$c7;
export const NA = $$g8;
export const z7 = $$d9;