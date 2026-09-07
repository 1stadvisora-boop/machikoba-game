# My App Store

自作アプリを公開するための、静的なアプリストアです。
サーバー不要・ビルド不要で、GitHub Pages にそのまま置けます。

```
.
├── index.html            # ストアのトップページ
├── apps.js               # アプリ一覧（マニフェスト）← ここに追記する
├── manifest.webmanifest  # ホーム画面追加用
└── apps/
    └── machikoba-game/   # アプリ本体（1 アプリ = 1 フォルダ）
        └── index.html
```

## アプリを追加する

1. `apps/<アプリID>/` フォルダを作り、`index.html` を置く（画像などもそのフォルダ内に）。
2. `apps.js` の `apps` 配列に 1 件追記する。

```js
{
  id: "my-tool",                       // 英数字とハイフン
  name: "便利ツール",
  icon: "🧮",                          // 絵文字 or "apps/my-tool/icon.png"
  tagline: "カードに出る一言",
  description: "詳細画面に出る説明。\n改行もできます。",
  category: "ツール",                   // 同名のものがタブにまとまる
  tags: ["計算", "業務"],
  url: "apps/my-tool/index.html",      // 外部サイトなら https://… でも可
  version: "1.0.0",
  updated: "2026-09-07",
  featured: false,
  platform: "PC 推奨"
}
```

3. コミットして `main` に push すると、GitHub Actions が自動で公開します。

外部で公開済みのアプリ（別リポジトリの Pages、Vercel など）も `url` に https://… を書けば一覧に載せられます。

## 公開手順（初回のみ）

GitHub のリポジトリ設定 → **Pages** → **Build and deployment** の Source を **GitHub Actions** にしてください。
以降は `main` への push のたびに `.github/workflows/pages.yml` が公開を更新します。

## ローカルで確認する

`index.html` をブラウザで直接開くだけで動きます。

## 機能

- 検索（名前・説明・タグ）、カテゴリタブ、並び替え（新着 / 名前）
- 「おすすめ」枠（`featured: true`）
- 詳細シート（説明、バージョン、更新日、スクリーンショット、共有・URL コピー）
- `#app=<id>` 付き URL で特定アプリの詳細を直接開ける
- 最近開いたアプリを端末内に記録（localStorage）
