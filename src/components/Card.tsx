// propsの型定義:ここも敢えてWorldPage.tsxとは異なる書き方をしている
interface CardType {
	  allCountriesData: {
		  Country: string,
		  NewConfirmed: number,
		  TotalConfirmed: number,
	  }[],
}

const Card = ({ allCountriesData }: CardType) => {
  return (
    <div className="card-container">
      {allCountriesData.map((singleData, index) =>
        <div key={index} className="card">
          <div>
            <h2>{singleData.Country}</h2>
            <p>新規感染者: <span>{singleData.NewConfirmed.toLocaleString()}</span></p>
            <p>感染者総数: <span>{singleData.TotalConfirmed.toLocaleString()}</span></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;