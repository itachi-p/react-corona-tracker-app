import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage"
import WorldPage from "./pages/WorldPage"
import './App.css';

// 共有データを持つのはTopPageでも良いが、今回は学習目的の為に最上位のAppコンポーネントで管理する
function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const [allCountriesData, setAllCountriesData] = useState([]); // 全国のデータを格納する配列

  // セレクトボックスで選択された国のデータを取得する関数
  const getCountryData = () => {
    // fetchでAPIを叩く。文字列にstate等のJSコードを含めるにはバッククォートを使い、${}で囲む
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res => res.json()) // fetchでアクセスしたURLからのレスポンスをJSON形式に変換
      .then(data => {
        setCountryData({ // stateを更新
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
        });
      })
  }
  const getAllCountriesData = () => {
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
      .then(res => res.json())
      // 送り返されたデータ中のCountries部分をそのまま渡す
      .then(data => setAllCountriesData(data.Countries))
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>}/>
        <Route path="/world" element={<WorldPage allCountriesData={allCountriesData} getAllCountriesData={getAllCountriesData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
