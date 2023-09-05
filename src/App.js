import { useState } from "react";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage"
import './App.css';

// 共有データを持つのはTopPageでも良いが、今回は学習目的の為に最上位のAppコンポーネントで管理する
function App() {
  const [country, setCountry] = useState("");
  // セレクトボックスで選択された国のデータを取得する関数
  const getCountryData = () => {
    // fetchでAPIを叩く。文字列にstate等のJSコードを含めるにはバッククォートを使い、${}で囲む
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then((res) => res.json()) // fetchでアクセスしたURLからのレスポンスをJSON形式に変換
      .then((data) => console.log(data)); // JSON形式に変換されたdataをコンソールに表示
  }
  return (
    <div>
      <TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData}/>
    </div>
  );
}

export default App;
