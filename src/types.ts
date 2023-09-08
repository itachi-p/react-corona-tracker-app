export type CountryDataType = {
	date: string,
	newConfirmed: number,
	totalConfirmed: number,
	newRecovered: number,
	totalRecovered: number,
}

// これはこのファイル内でだけ必要な定義なのでexportする必要がない
// ※interfaceとtypeの記法の差以外の違いは中堅クラス向け情報
interface SingleCountryDataType {
	Country: string,
	NewConfirmed: number,
	TotalConfirmed: number,
}
// 配列の場合、typeであれば最後に[]を加えるだけで済むが、interfaceの場合少し異なる
export interface AllCountriesDataType extends Array<SingleCountryDataType> {}
// 下記も同じ。
// type AllCountriesDataType = SingleCountryDataType[];

// TopPageTypeとSelectorTypeから切り出して共通化
type CountryJsonType = {
	Country: string,
	Slug: string,
}[] // 配列であることを明示

export type TopPageType = {
	countriesJson: CountryJsonType,
	setCountry: React.Dispatch<React.SetStateAction<string>>,
	countryData: CountryDataType, //重複定義を避け、CountryDataTypeを再利用
	loading: boolean,
}

export type SelectorType = {
	setCountry: React.Dispatch<React.SetStateAction<string>>,
	countriesJson: CountryJsonType,
}

export type ResultsType = {
	countryData: CountryDataType, //重複定義を避けリファクタリング
	loading: boolean,
}
