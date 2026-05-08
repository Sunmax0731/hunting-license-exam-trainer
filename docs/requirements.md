# 要件定義

対象: 狩猟免許試験問題トレーニング (Rank 63, EducationLearning No.6)

## 目的

法令、猟具、鳥獣判別、安全管理、マナー、実技前提知識を問題演習で学ぶ。

## 課題

法令、識別、安全知識が分かれ、苦手分野を復習しにくい。

## 要件

- 必須入力 `questionId`、`answer`、`topic`、`rationale` を検証する。
- happy-path / missing-required / warning / mixed-batch を代表シナリオとして保持する。
- CLI、静的Web UI、自動テスト、docs ZIP、release evidence を同一repoで完結させる。
- 正式docsはNON PICKUP行、ZIP metadata、ドメインdocsを根拠に正常な日本語で再構成する。

問題データ、採点、復習、教材更新方針、GitHub Pages / Release 向け導線を整理します。
