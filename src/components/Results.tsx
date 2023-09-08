import Loading from './Loading';
// propsの型定義
type ResultsType = {
	countryData: {
		date: string,
		newConfirmed: number,
		totalConfirmed: number,
		newRecovered: number,
		totalRecovered: number,
	},
	loading: boolean,
}

const Results = ({ countryData, loading }: ResultsType) => {
	const { date, newConfirmed, totalConfirmed, newRecovered, totalRecovered } = countryData;
	return (
		<div className="results-container">
			{/* 下の三項演算子の使い方は可読性があまりよろしくない */}
			{loading ?
				<Loading />
				:
				<div>
					<p>日付: <span>{date.slice(0, 10)}</span></p>
					<p>新規感染者: <span>{newConfirmed.toLocaleString()}</span></p>
					<p>感染者総数: <span>{totalConfirmed.toLocaleString()}</span></p>
					<p>新規回復者: <span>{newRecovered.toLocaleString()}</span></p>
					<p>回復者総数: <span>{totalRecovered.toLocaleString()}</span></p>
				</div>
			}
		</div>
	);
};

export default Results;