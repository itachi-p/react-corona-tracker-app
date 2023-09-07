// propsでなく分割代入でコードを簡潔に書き換える
const Selector = (setCountry, countriesJson, getCountryData) => {
  return (
    <div className="selector-container">
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