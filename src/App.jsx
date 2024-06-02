import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userinput , setuserinput] = useState({
    awalInves : 5000,
    annualInves : 10000,
    expectedReturn : 6,
    duration : 10
});
function HandleChange(inputId , NewValue){
  setuserinput(prevUserInput => {
      return{
          ...prevUserInput ,
          [inputId] : +NewValue
      }
  });
  };
  
  return (
    <>
<Header></Header>
<UserInput userinput={userinput} onChangeInput={HandleChange}/>
<Results input={{userinput}} />
</>
  )
}

export default App