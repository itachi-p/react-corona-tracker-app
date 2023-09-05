import { useState } from "react";
import countriesJson from "../countries.json";

const Selector = () => {
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
      {/* eはユーザの操作によって発生したeventに関係する情報を持つオブジェクト */}
      {/* console.log(e)とすればChromeの「検証」>Consleで中身を全て確認可能 */}
      <select onChange={(e) => setCountry(e.target.value)}>
        <option>Select a country</option> {/* 初期値 */}
        {/* map関数でcountriesJsonの中身を順番に取り出し、optionタグのリストを作成 */}
        {countriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select>
      <button onClick={getCountryData}>Get Data</button>
    </div>
  );
};

export default Selector;