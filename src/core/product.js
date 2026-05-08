export const product = {
  "repo": "hunting-license-exam-trainer",
  "domain": "EducationLearning",
  "rank": 63,
  "tier": "P3",
  "score": 50,
  "ideaNo": 6,
  "ideaName": "狩猟免許試験問題トレーニング",
  "field": "資格試験トレーナー",
  "publicTarget": "GitHub Pages / GitHub Release",
  "platformScope": "GitHub Pages training app / GitHub Release教材",
  "overview": "狩猟免許試験向けのサンプル問題、採点、復習デッキをまとめ、教材更新方針まで確認できる学習アプリ。",
  "problem": "試験対策は問題の正確性と更新が重要で、アプリ実装だけでは学習品質を保証できない。",
  "differentiation": "問題データ、採点結果、弱点復習、更新ポリシーを同じ検証対象に含める。",
  "audience": "狩猟免許の学習者、教材作成者、模試運営者",
  "requiredInputs": [
    "questionId",
    "selectedAnswer",
    "category",
    "reviewMode"
  ],
  "modules": [
    "question-bank",
    "exam-engine",
    "review-deck",
    "web-practice",
    "content-validator"
  ],
  "accent": "#7c2d12",
  "secondary": "#1c1917",
  "scenarioNouns": [
    "問題データ",
    "採点",
    "復習カード"
  ]
};

export function evaluateScenario(scenario) {
  if (scenario.type === 'mixed-batch') {
    const results = (scenario.items || []).map((inputs, index) => evaluateScenario({ id: scenario.id + '-' + index, inputs, flags: index === 2 ? ['needsReview'] : [] }));
    const accepted = results.filter((result) => result.status !== 'error').length;
    const warnings = results.filter((result) => result.status !== 'pass').length;
    return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted, warnings, missing: results.flatMap((result) => result.missing), score: warnings ? 78 : 96 };
  }
  const inputs = scenario.inputs || {};
  const missing = product.requiredInputs.filter((key) => inputs[key] === undefined || inputs[key] === null || inputs[key] === '');
  if (missing.length) return { id: scenario.id, status: 'error', accepted: 0, warnings: 0, missing, score: 0 };
  const risky = Object.values(inputs).some((value) => /stale|low|noisy|manual-lock|large-water-change|late-brake|unknown|overflow|rush|storm|fatigue|unstable|crowded|high/i.test(String(value)));
  const warnings = (scenario.flags || []).includes('needsReview') || risky ? 1 : 0;
  return { id: scenario.id, status: warnings ? 'warning' : 'pass', accepted: 1, warnings, missing: [], score: warnings ? 86 : 96 };
}

export function summarizeProduct() {
  return { name: product.ideaName, repo: product.repo, domain: product.domain, releaseTarget: product.publicTarget, platformScope: product.platformScope, responsibilities: product.modules, requiredInputs: product.requiredInputs };
}
