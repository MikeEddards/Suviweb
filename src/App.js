import React from 'react';
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import ImageDropZone from './Components/ImageDropZone'


function App() {
  

  return (
    <HashRouter >
      <ImageDropZone/>
      {/* {routes} */}
    </HashRouter>
  );
}

export default App;