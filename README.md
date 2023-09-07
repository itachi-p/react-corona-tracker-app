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

### Node.jsの依存関係やnode_modulesの管理が面倒な件

- 今回は教材通りに`npx create-react-app`でプロジェクト作成したが、依存関係の管理が非常に面倒
- プロジェクト内部に非常に膨大なnode_modulesが作成されるのもネック

上記の解決案として

- Node.jsに代わり**Deno**🦕を使用する
  - DenoはNode.jsの開発者本人が[Node.jsの設計ミス10の反省点](https://yosuke-furukawa.hatenablog.com/entry/2018/06/07/080335)を踏まえて開発している
  - 依存関係の管理が非常に楽
    - 実行はts/jsファイルをhttpでアクセスできるところに上げておくだけ
    - Denoで外部モジュールを使う場合は`import`にURLを渡すだけ
    - npmもpackage.jsonもBabelもWebpackも不要
  - Node.jsとは異なり、TypeScriptが標準でサポートされている
  - ただし、まだ開発途中で不安定な部分も多い
- **Dockerコンテナ内で開発環境を構築する**
  - 何をインストールするにもローカル環境が汚れない
  - ただし、Dockerコンテナ内での開発は若干難易度も高め？
  - 1つ1つのDockerイメージのサイズも大きい（GB単位）
