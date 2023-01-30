import './App.css';
import $ from 'jquery';
import Text from './Components/Text';
import rules from "./parser";
import React,{ useState } from 'react';
function App() {
  const [val,setVal] = useState("");
  const [res,steRes] = useState("");
  
  const markdownParser = (s)=>{
    for(let i=0;i<rules.length;i++){
      s = s.replace(rules[i][0],rules[i][1]);
    }
    steRes(s);
  }

  $("#preview").html(res);
  
  return (
    <div className="App">
      <Text id="editor"  value={val}  onChange={e => {
        setVal(e.target.value);
        markdownParser(e.target.value);
      }}/>
      <div id="preview"></div>
    </div>
  );
}

export default App;
