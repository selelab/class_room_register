# Automatic Classroom Register

教室の一括自動申請ツール

# 使い方

## 準備

※まず Node.js を入れる (`v14.16.1`で動作確認済)

```bash
$ git clone https://github.com/selelab/class_room_register
$ cd class_room_register
$ npm install
```

## CLI

1. `setting_data/club_data.json` に登録者の個人情報を記入する
1. `setting_data/schedule.json` に以下の事項を記入する
   - `YEAR`プロパティ: 西暦年(数字)
   - `MONTH`プロパティ: 申請する月(数字)
   - `SCHEDULE`プロパティ: 「申請する日付(`DAY`)・申請する教室(`CLASS_ROOM`)・利用時間(`TIME`)・特記事項(`NOTICES`)」をまとめたオブジェクトを作り、配列の要素として記入
1. コマンドラインで `node src/index.js` する

※JSON設定ファイルの細かい書式はファイル内の説明ないしテンプレートに従うこと

## GUI

WIP
