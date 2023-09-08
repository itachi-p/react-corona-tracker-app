import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import countriesJson from "./countries.json";
import TopPage from "./pages/TopPage"
import WorldPage from "./pages/WorldPage"
import './App.css';

// countryDataの型を定義
type CountryDataType = {
	date: string,
	newConfirmed: number,
	totalConfirmed: number,
	newRecovered: number,
	totalRecovered: number,
}

// typeと別にinterfaceを使って型定義を行っても良い
// ※記法に若干の差があるが、それ以外のinterfaceとtypeの違いは要調査
interface SingleCountryDataType {
	Country: string,
	NewConfirmed: number,
	TotalConfirmed: number,
}
// 配列の場合、typeであれば最後に[]を加えるだけで済むが、interfaceの場合少し異なる
// extendsを使うことで既に定義済みのinterfaceを再利用(継承)することが可能
interface AllCountriesDataType extends Array<SingleCountryDataType> {}
// 下記も同じ。TypeScriptのバージョンアップに伴い、typeとinterfaceのどちらが良いかは難しい問題
// type AllCountriesDataType = SingleCountryDataType[];
// interfaceは型の定義。typeは厳密には型の別名(type alias)で、無名の型に参照のため別名をを与える

function App() {
	const [loading, setLoading] = useState<boolean>(false);
	const [country, setCountry] = useState<string>("japan");
	const [countryData, setCountryData] = useState<CountryDataType>({
		date: "",
		newConfirmed: 0,
		totalConfirmed: 0,
		newRecovered: 0,
		totalRecovered: 0,
	});
	// TypeScript化に伴い、ただの[](空の配列)より厳密な初期値と型定義を与える
	const [allCountriesData, setAllCountriesData] = useState<AllCountriesDataType>([{
		Country: "",
		NewConfirmed: 0,
		TotalConfirmed: 0,
	}]);

	// useEffectを使い、countryの値が変更された時点でデータを取得する(Get Dataボタンの廃止)
	useEffect(() => {
		// セレクトボックスで選択された国のデータを取得する関数
		const getCountryData = () => {
			setLoading(true);
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
					setLoading(false);
				})
				.catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
		}
		// ボタン操作がなくても、国名が選択された時点でデータを取得する
		getCountryData();
	}, [country]); // 国名が変わる度に、1回実行されるようにする

	// useEffectを使い、WorldPageコンポーネントが表示された時、自動で全世界の感染データを取得し表示する
	useEffect(() => {
		fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
			.then(res => res.json())
			.then(data => setAllCountriesData(data.Countries))
			.catch(err => alert("エラーが発生しました。ページをリロードして、もう一度トライしてください。"));
	}, []); // 第二引数に空の配列を渡すことで、初回のみ実行されるようにする

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<TopPage countriesJson={countriesJson} setCountry={setCountry} countryData={countryData} loading={loading} />} />
				<Route path="/world" element={<WorldPage allCountriesData={allCountriesData} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
