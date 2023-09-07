const Card = (props) => {
  return (
    <div className="card-container">
      {/* map関数でallCountriesDataの中身の配列を順番に取り出す */}
      {props.allCountriesData.map((singleData, index) =>
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