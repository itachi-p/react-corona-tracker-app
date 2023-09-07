import Header from "../components/Header";
import Title from "../components/Title"
import Selector from "../components/Selector";
import Results from "../components/Results";

// 今回は敢えてstateを最上位のAppで管理し、TopPageを経由し子コンポーネントに渡す
const TopPage = (props) => {
  return (
    <div className="top-page-container">
      <div className="top-page-container">
        <Header />
        <Title />
        {/* stateをAppで管理しTopPageを経由するやり方は冗長だが、今回は学習目的で敢えてこのようにしている */}
        <Selector countriesJson={props.countriesJson} setCountry={props.setCountry} getCountryData={props.getCountryData} />
        <Results countryData={props.countryData} />
      </div>
    </div>
  );
};

export default TopPage;