// TopPageから受け取ったpropsの型を定義
type SelectorType = {
	setCountry: React.Dispatch<React.SetStateAction<string>>,
	countriesJson: {
		Country: string,
		Slug: string,
	}[], // 単一のセットではなく、配列であることを明示
}

const Selector = ({ setCountry, countriesJson }: SelectorType) => {
	return (
		<div className="selector-container">
			{/* eはユーザの操作によって発生したeventに関係する情報を持つオブジェクト */}
			{/* console.log(e)とすればChromeの「検証」>Consleで中身を全て確認可能 */}
			<select onChange={(e) => setCountry(e.target.value)}>
				{/* map関数でcountriesJsonの中身を順番に取り出し、optionタグのリストを作成 */}
				{countriesJson.map((country, index) =>
					<option key={index} value={country.Slug}>{country.Country}</option>
				)}
			</select>
		</div>
	);
};

export default Selector;