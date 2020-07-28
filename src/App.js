import React, {useEffect} from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

const  App = () => {
  // Init Materialze CSS
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <div className="App">

    </div>
  );
}

export default App;
