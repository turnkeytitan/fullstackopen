const CountryList = ({ names, showCountry }) => {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name} <button onClick={showCountry.bind(this, name)}>show</button></li>
      ))}
    </ul>
  );
};
export default CountryList;
