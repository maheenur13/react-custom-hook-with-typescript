import React from 'react';
import logo from './logo.svg';
import './App.css';
import Styled from './Components/Styled/Styled';
// import useOnline from './Components/CustomHook/useOnline';
// import UseOnlineCustom from './Components/CustomHook/useOnlineCustom';
import UseOnlineCustom from './Components/CustomHook/UseOnlineCustom'
import SassExplore from './Components/SassExplore/SassExplore';
import CustomReactHook from './Components/CustomReactHook/CustomReactHook';
// import useOnline  './Components/CustomHook/useOnline.js';
function App() {
  // console.log(useOnline);
  return (
    <div className="App">
      {/* <Styled/>
      <UseOnlineCustom/>
      <SassExplore/> */}
      <CustomReactHook/>
    </div>
  );
}

export default App;
