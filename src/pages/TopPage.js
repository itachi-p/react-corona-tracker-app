import Header from "../components/Header";
import Title from "../components/Title"
import Selector from "../components/Selector";
import Results from "../components/Results";

// propsの代わりに分割代入を使い、コードを簡潔に書き換え
const TopPage = ({ countriesJson, setCountry, countryData, loading}) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector countriesJson={countriesJson} setCountry={setCountry} />
        <Results countryData={countryData} loading={loading} />
      </div>
    </div>
  );
};

export default TopPage;