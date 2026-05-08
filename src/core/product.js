export const product = {
  "repo": "hunting-license-exam-trainer",
  "domain": "EducationLearning",
  "rank": 63,
  "tier": "P3",
  "score": 50,
  "ideaNo": 6,
  "ideaName": "狩猟免許試験問題トレーニング",
  "field": "資格試験・狩猟免許",
  "publicTarget": "GitHub Pages / GitHub Release",
  "overview": "法令、猟具、鳥獣判別、安全管理、マナー、実技前提知識を問題演習で学ぶ。",
  "problem": "法令、識別、安全知識が分かれ、苦手分野を復習しにくい。",
  "differentiation": "暗記だけでなく、誤答理由、関連用語、実地で注意すべき判断まで復習カード化する。",
  "audience": "狩猟免許の受験準備を分野別に進めたい学習者",
  "requiredInputs": [
    "questionId",
    "answer",
    "topic",
    "rationale"
  ],
  "modules": [
    "exam-engine",
    "review-deck",
    "question-data",
    "web-app"
  ],
  "accent": "#35695b",
  "secondary": "#c98a2c",
  "scenarioNouns": [
    "法令",
    "猟具",
    "鳥獣判別"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === "mixed-batch") {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + "-" + index, inputs, flags: index === 2 ? ["needsReview"] : [] }));
    const accepted = results.filter((r) => r.status !== "error").length;
    const warnings = results.filter((r) => r.status !== "pass").length;
    return { id: scenario.id, status: warnings ? "warning" : "pass", accepted, warnings, missing: results.flatMap((r) => r.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === "");
  if (missing.length) return { id: scenario.id, status: "error", accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((v) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown/i.test(String(v)));
  const warnings = (scenario.flags || []).includes("needsReview") || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? "warning" : "pass", accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, releaseTarget: product.publicTarget, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
