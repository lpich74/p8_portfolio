import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { HashRouter, BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <HashRouter basename={process.env.REACT_APP_BASE_URL}>
            <BaseLayout/>
         </HashRouter>
      </div>
   );
}


export default App;
