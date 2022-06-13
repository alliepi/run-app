import RacesList from './features/races/RacesList.js';
import { RACES } from './app/shared/RACES';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  return (

    <div className="App">
      <Header />
      <RacesList />
      <Footer />
    </div>
  );
}


export default App;
