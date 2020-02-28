import React from 'react';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import MovieSearch from './Components/MovieSearch'


function App() {
  

  return (
    <HashRouter >
      <MovieSearch/>
      {/* {routes} */}
    </HashRouter>
  );
}

export default App;