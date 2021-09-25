import "./App.css";
import Countries from "./components/Countries";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

/* 
//Backdated Style 

function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <div>
      <h2>Traveling Around the World</h2>
      <h4>Countries Available: {countries.length}</h4>
      {countries.map((country) => (
        <Country name={country.name} capital={country.capital}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h2>Name: {props.name.common}</h2>
      <p>Capital: {props.capital}</p>
    </div>
  );
}

*/

export default App;
