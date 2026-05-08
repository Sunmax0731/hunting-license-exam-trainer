# 責務分割

- question-bank: 狩猟免許試験問題トレーニング の closed alpha 検証責務。
- exam-engine: 狩猟免許試験問題トレーニング の closed alpha 検証責務。
- review-deck: 狩猟免許試験問題トレーニング の closed alpha 検証責務。
- web-practice: 狩猟免許試験問題トレーニング の closed alpha 検証責務。
- content-validator: 狩猟免許試験問題トレーニング の closed alpha 検証責務。

共通: `src/core` が評価ロジック、`src/validators` が代表シナリオ検証、`src/report` が証跡生成、`src/web` がブラウザ表示を担当する。
