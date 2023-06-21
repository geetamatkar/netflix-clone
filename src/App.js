import './App.css';
import Row from './Row';
import requests from './requests';

function App() {

  return (
    <div className="App">
      <h1>Hey, Lets complete this NETFLIX clone successfully!!!!</h1>
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      
    </div>
  );
}

export default App;
