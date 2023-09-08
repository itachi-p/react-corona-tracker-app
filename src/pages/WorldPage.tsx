import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';

// propsの型定義
interface SingleCountryDataType {
	  Country: string,
	  NewConfirmed: number,
	  TotalConfirmed: number,
}
// 新しい型WorldPageTypeに含まれる項目allCountriesDataが配列であることを明示
// この場合、interface自体を拡張しているわけではないのでextendsは不要
interface WorldPageType {
	  allCountriesData: Array<SingleCountryDataType>,
}

const WorldPage = ({ allCountriesData }: WorldPageType) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  );
};

export default WorldPage;