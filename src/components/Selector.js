import { useState } from "react";
import countriesJson from "../countries.json";

const Selector = () => {
  const [country, setCountry] = useState("");
  return (
    <div>
      {/* eはユーザの操作によって発生したeventに関係する情報を持つオブジェクト */}
      {/* console.log(e)とすればChromeの「検証」>Consleで中身を全て確認可能 */}
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select>
      {country}
    </div>
  );
};

export default Selector;