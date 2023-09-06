# 『はじめてさわるReactアプリ with TypeScript』

前著『はじめてつくるReactアプリwithTypeScript』よりもJavaScriptそのものとHooksの理解に重点を置き、最後にTypeScript化するという流れで学習を進める。

## 学習ステップ計画

- とりあえずは教材通りにJavaScript & React-Hooks でアプリ作成
- デプロイは前著によるお天気アプリと同じくNetlifyを使用
  - もはや無理にAWS等でCI/CD環境を構築する必要性は薄いのかもしれない
  - 既にGitHub連携/自動デプロイまで簡単に実現する無料サーバが複数存在する
  - 同様にAWS Solution Architect - associateレベルの価値は薄れてるかも
- 最後にTypeScript化
  - **JavaScriptの状態から型を追加するプロセスがむしろ今回の主目的**
- その後の計画（案）
- 教材通りコロナ感染情報取得じゃつまらんので、外貨為替レート取得APIに変更する
  - 或いは世界の人口動態APIとかでもいい
- CSSにはTailwind CSSを使用（深く理解せずとも使えれば良しとする）
  - むしろ**如何に時間をかけず最速実装できるか**を焦点とする
