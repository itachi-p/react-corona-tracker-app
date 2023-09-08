import Header from "../components/Header";
import Title from "../components/Title"
import Selector from "../components/Selector";
import Results from "../components/Results";

// propsの型定義
type TopPageType = {
	countriesJson: {
		Country: string,
		Slug: string,
	}[], // 単一のセットではなく、配列であることを明示
	// setCountryはデータではなくcountryのstateを更新する働きを持つ関数のオブジェクト
	// App.tsxのsetCountryと同じ型を定義する({setCountry}の部分にカーソルを合わせReactの用意した型を確認)
	// propsの型がわからない場合、このように上位コンポーネントで対象の変数の上にマウスを置くと型が表示される
	// 型が不明のまま厳格な型定義よりも開発を進めたい場合は、any型の指定も可能(※後で正しい型を指定すること)
	setCountry: React.Dispatch<React.SetStateAction<string>>,
	countryData: {
		date: string,
		newConfirmed: number,
		totalConfirmed: number,
		newRecovered: number,
		totalRecovered: number,
	},
	loading: boolean,
}

const TopPage = ({ countriesJson, countryData, setCountry, loading }: TopPageType) => {
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