/* interfaceとtypeが入り混じって見にくいので整理
今回は学習目的の為にinterfaceとtypeの違いを意識して
それぞれの記法で同様の定義を行っているが、実際はどちらか一方で充分。
interfaceかtypeかの厳密な選定は中堅クラス向けの情報 */

//type(厳密にはtype alias)

export type CountryDataType = {
	date: string,
	newConfirmed: number,
	totalConfirmed: number,
	newRecovered: number,
	totalRecovered: number,
}

// TopPageTypeとSelectorTypeから切り出して共通化
type CountryJsonType = {
	Country: string,
	Slug: string,
}[] // 配列であることを明示

export type TopPageType = {
	countriesJson: CountryJsonType,
	setCountry: React.Dispatch<React.SetStateAction<string>>,
	countryData: CountryDataType, //重複定義を避けリファクタリング
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

// interface（厳密にはinterface declaration）※typeで統一してもよい

// これはこのファイル内でだけ必要な定義なのでexportする必要がない
// そもそも2つに分けず1つのinterfaceで配列型として記述できる
interface SingleCountryDataType {
	Country: string,
	NewConfirmed: number,
	TotalConfirmed: number,
}

export interface AllCountriesDataType extends Array<SingleCountryDataType> {}
//export type AllCountriesDataType = SingleCountryDataType[]; // こちらの方がシンプル

// この場合、interface自体を拡張しているわけではないのでextendsは不要
export interface WorldPageType {
	allCountriesData: Array<SingleCountryDataType>,
}

// WorldPageTypeと全く同じだが、今後の変更を考慮し別のinterfaceとして定義
export interface CardType {
	allCountriesData: Array<SingleCountryDataType>,
}
