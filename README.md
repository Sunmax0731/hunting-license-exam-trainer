# 狩猟免許試験問題トレーニング

hunting-license-exam-trainer は、NON PICKUP 優先リスト Rank 63 / EducationLearning No.6 から昇格した closed alpha プロダクトです。法令、猟具、鳥獣判別、安全管理、マナー、実技前提知識を問題演習で学ぶ。

## Quick Start

```powershell
cd D:\AI\EducationLearning\hunting-license-exam-trainer
npm test
npm run cli
```

## Closed Alpha Scope

- 公開想定: GitHub Pages / GitHub Release
- 対象ユーザー: 狩猟免許の受験準備を分野別に進めたい学習者
- 手動テスト: Codex側では未実施。手順は `docs/manual-test.md` と `docs/strict-manual-test-addendum.md` に記載

## Architecture

- `src/core`: プロダクト定義と代表シナリオ評価
- `src/validators`: representative suite と期待結果の検証
- `src/report`: validation result、web smoke、QCDS metrics、deterministic docs ZIP の生成
- `src/review-model`: QCDS 評価モデル
- `src/cli`: CLI 検証入口
- `src/web`: 静的Web表示と主要操作
- `src/app` / `data/questions.json`: 採点、復習、教材更新の境界

## Release Artifacts

- `dist/hunting-license-exam-trainer-docs.zip`
- `dist/validation-result.json`
- `dist/web-smoke-result.json`
- `docs/release-evidence.json`
