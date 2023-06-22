import './App.css';
import Row from './Row';
import requests from './requests';

function App() {

  return (
    <div className="App">
      <h1>Hey, Lets complete this NETFLIX clone successfully!!!!</h1>
      <Row title="NETFLIX Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentris" fetchUrl={requests.fetchDocumentries}/>
      
    </div>
  );
}

export default App;
