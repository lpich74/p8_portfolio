import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

function App() {
   return (
      <div>
         <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
