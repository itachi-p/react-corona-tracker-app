const Card = (props) => {
  return (
    <div>
      <h2>Card</h2>
      <button onClick={props.getAllCountriesData}>Get All Data</button>
      {/* map関数でallCountriesDataの中身の配列を順番に取り出す */}
      {props.allCountriesData.map((singleData, index) =>
        <div key={index}>
          <h2>{singleData.Country}</h2>
          <p>新規感染者: {singleData.NewConfirmed}</p>
          <p>感染者総数: {singleData.TotalConfirmed}</p>
        </div>
      )}
    </div>
  );
};

export default Card;