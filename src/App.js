import { useState, useEffect } from "react";
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
  // 全国のデータを格納する変数（配列だとわかっているので初期値は[]）
  const [allCountriesData, setAllCountriesData] = useState([]);

  // セレクトボックスで選択された国のデータを取得する関数
  const getCountryData = () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
      .then(res => res.json())
      .then(data => {
        setCountryData({
          date: data[data.length - 1].Date,
          newConfirmed: data[data.length - 1].Confirmed - data[data.length - 2].Confirmed,
          totalConfirmed: data[data.length - 1].Confirmed,
          newRecovered: data[data.length - 1].Recovered - data[data.length - 2].Recovered,
          totalRecovered: data[data.length - 1].Recovered,
        });
      })
  }

  // useEffectを使い、WorldPageコンポーネントが表示された時、自動で全世界の感染データを取得し表示する
  useEffect(() => {
    // 関数をまるまるuseEffectの中に移動することにより、WorldPageコンポーネントが表示された時に自動実行される
    // また、getAllCountriesDataといった命名や明示的な呼び出しも省略できる(残すことも可能)
    fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
        .then(res => res.json())
        .then(data => setAllCountriesData(data.Countries))
  }, []); // 第二引数に空の配列を渡すことで、初回のみ実行されるようにする

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} countryData={countryData}/>}/>
        <Route path="/world" element={<WorldPage allCountriesData={allCountriesData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
