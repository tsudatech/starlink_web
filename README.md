# 星つむぎ — 紹介ページ

星つむぎ（iPhone 向けのゲームアプリ。英語名 Star Weaver）の紹介ページ。HTML / CSS / Vanilla JS だけの静的サイトで、GitHub Pages 等にそのままデプロイできる。

`tsudatech/puzzle_chan_web` の構成を踏襲し、配色をアプリの夜空の配色（`starlink/UI/Theme.swift` の `Palette.night`）に合わせてある。パズルちゃんは淡い青、こちらはアプリと同じ紺の夜空と雪原。

スクリーンショットの節は置いていない。

## ファイル

| ファイル | 役割 |
|---|---|
| `index.html` | セマンティック HTML。各テキストは `data-i18n-key` で多言語化対応。**日本語の文はここが正** |
| `styles.css` | 配色・レイアウト・レスポンシブ。地は `#0b1030`、ボタンはアプリの「あそぶ」と同じゆめいろ |
| `script.js` | 言語切替 (ja / en) ／ hero の夜空（星のまたたき・雪・流れ星） ／ scroll ヘッダ ／ fade-in ／ ripple |
| `images/app-icon.png` | hero と favicon に使うアプリアイコン（1024×1024 を 512 に縮小） |
| `images/cat-sit.webp` `images/cat-jump.webp` | 子猫の絵（アプリの `Resources/Cat/s1.webp` `s6.webp` と同じもの） |

### 言語

- 日本語は `index.html` に書いてある文をそのまま使う。`script.js` は読み込んだときにそれを覚えておき、日本語に戻すときに使う
- 英語だけ `script.js` の `en` に持つ。`index.html` に `data-i18n-key` を足したら、`en` にも同じキーを足すこと
- 日本語を二か所に書かないのは、片方だけ直して食い違うのを防ぐため

文字は、アプリの Web 版と同じ丸ゴシック「Zen Maru Gothic」を Google Fonts から読む（アプリ本体は代わりに system rounded を使っている）。

## ローカル確認

```bash
cd starlink_web
python3 -m http.server 8080
# http://localhost:8080
# 言語は ?lang=en で切り替えられる
```

## デプロイ (GitHub Pages の場合)

リポジトリ設定 → Pages → Source をこのディレクトリ（ブランチのルート）に向ける。

## 記載内容の根拠

機能とプライバシーの記述はアプリの実装に合わせてある。アプリを変えたら追随させること。
星の種類の説明と、難しさ・ねがいの言い回しは、アプリの画面の文（`starlink/UI/Sheets.swift` の「あそびかた」・設定）をそのまま使っている。ここで言い換えると呼び名がアプリと食い違う。

| 記述 | 実装箇所 |
|---|---|
| 星の種類（ふつう・色つき・ねむり・双子・流れ星）と星座・ねがい | `Game/GameEngine.swift`（`Star.Kind`・`litHit`・`complete`・`updatePlay`） |
| 画面の下まで落ちると夜が終わる／ねがいで一度だけ助かる | `Game/GameEngine.swift`（`updatePlay` の `goSleep`・`wishRescue`） |
| 本物の明るい星・季節ごとの星図鑑 | `Domain/Catalog.swift`（`named`）／`UI/Sheets.swift`（`StarsSheet`） |
| 空の層は7つ・どこまでも続く | `Domain/Catalog.swift`（`layers`・`cycAt`・`cycLen`） |
| 400 m ごとの天体（月・土星・ほうき星・星のくじら…） | `Domain/Catalog.swift`（`marks`・`markAt`） |
| ゴールデンタイムで星や星座の点数が2倍 | `Game/GameEngine.swift`（`passMark`・`addScore`） |
| つなぎ：5つごとに倍率・最大 ×9 | `Game/GameEngine.swift`（`mult()`） |
| 踏むと空の音階で音が鳴る・BGM が層で変わる | `Domain/Catalog.swift`（`note`）／`Infrastructure/AudioEngine.swift` |
| たからばこ（BGM・星を踏んだときの音・きせかえ・夜空の景色） | `Domain/Catalog.swift`（`tracks`・`sfx`・`accs`・`themes`） |
| 称号は14・ベスト5・合計 | `Domain/Catalog.swift`（`achievements`）／`UI/Sheets.swift`（`RecordsSheet`） |
| やさしいモード（星の間がせまい・落ちるのがゆっくり・ねがい1つ） | `Domain/Catalog.swift`（`difficulty`） |
| 記録・設定は端末内（UserDefaults） | `Infrastructure/GameStore.swift` |
| iCloud はキーバリューストア・任意・設定は同期しない | `Infrastructure/ICloudBackup.swift`（`backup.enabled`） |
| 開発者のサーバーへ記録を送らない・広告/解析なし | 外部通信のコードなし（`URLSession` 不使用。通信は iCloud のみ） |
| 通知なし | 通知のコードなし |
| iOS 26.0 以降・iPhone のみ・縦向き | `starlink.xcodeproj/project.pbxproj`（`IPHONEOS_DEPLOYMENT_TARGET` / `TARGETED_DEVICE_FAMILY = 1` / `UIInterfaceOrientationPortrait`） |
| 日本語 | アプリの画面は日本語のみ（表示名だけ `en.lproj` で英語名） |

アプリで非表示にしている機能（アルバム・空の地図など。`FeatureFlags.extraScreens`）は、ページにも書いていない。表示するようにしたら、機能とプライバシー（「アルバムに残した夜」）に足すこと。

## 未確定の項目（公開前に差し替え）

- App Store のダウンロード URL（現状 `href="#"` のプレースホルダ）
- 問い合わせ先メールアドレス（他のアプリの紹介ページと同じものを仮置きしている）
- 対応 iOS（いまは 26.0。対応バージョンを下げたら「iOS 26.0 以降」の3か所と英語2か所を直す）
- 広告を入れたら、機能・プライバシー（「広告について」「外部との通信」「お子さまの利用について」）・ダウンロードの節を直す
- 最終更新日（`privacy_update`）とコピーライトの年
# starlink_web
