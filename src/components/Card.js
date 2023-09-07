const Card = (props) => {
  return (
    <div>
      {/* map関数でallCountriesDataの中身の配列を順番に取り出す */}
      {props.allCountriesData.map((singleData, index) =>
        <div key={index}>
          <h2>{singleData.Country}</h2>
          <p>新規感染者: {singleData.NewConfirmed.toLocaleString()}</p>
          <p>感染者総数: {singleData.TotalConfirmed.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
};

export default Card;