
import './App.css';

import GetAllStarships from './components/services/sw-api';

function App() {
  return (
    <div className="App">
      <h1>STAR WARS STARSHIPS</h1>
      <GetAllStarships/>
    </div>
  );
}

export default App;
