import { SelectorType } from "../types";

const Selector = ({ setCountry, countriesJson }: SelectorType) => {
	return (
		<div className="selector-container">
			{/* eはユーザの操作によって発生したeventに関係する情報を持つオブジェクト */}
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