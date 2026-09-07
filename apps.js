// =====================================================================
//  アプリストア マニフェスト
//  ここにアプリを追記するだけで、ストアのトップページに並びます。
//
//  各項目:
//    id          : 英数字とハイフンのみ。URL の #app=ID にも使われます（必須）
//    name        : 表示名（必須）
//    icon        : 絵文字 1 文字、または画像パス（例 "apps/foo/icon.png"）
//    tagline     : カードに出る一言（1 行）
//    description : 詳細画面に出る説明（改行は \n）
//    category    : カテゴリ名。同じ名前のものがタブにまとまります
//    tags        : 検索用のキーワード配列
//    url         : 起動 URL。リポジトリ内なら "apps/xxx/index.html"、外部なら https://…
//    version     : バージョン文字列
//    updated     : 更新日 "YYYY-MM-DD"（新着順の並び替えに使用）
//    featured    : true にするとトップの「おすすめ」に載ります
//    platform    : 動作環境の注記（例 "スマホ推奨" / "PC 推奨"）
//    screenshots : スクリーンショット画像パスの配列（任意）
// =====================================================================
window.APP_STORE = {
  name: "My App Store",
  tagline: "自作アプリを、ここから。",
  owner: "1st advisor",
  apps: [
    {
      id: "machikoba-game",
      name: "つなげ！町工場",
      icon: "🏭",
      tagline: "奇跡のサプライチェーンをつなぐパズルゲーム",
      description:
        "町工場の部品をつないでサプライチェーンを完成させ、目標金額を達成しよう。\n" +
        "同じ工程のピースを 3 つ以上つなげると製品が完成。職人の技術承継ゲージを貯めて売上倍率を上げる、ステージ制のパズルゲームです。",
      category: "ゲーム",
      tags: ["パズル", "町工場", "サプライチェーン", "経営"],
      url: "apps/machikoba-game/index.html",
      version: "0.1.0",
      updated: "2026-09-07",
      featured: true,
      platform: "スマホ推奨（縦画面）",
      screenshots: []
    }
  ]
};
