import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import UseStateDataFetch from './components/UseStateAndUseReducer/UseStateDataFetch';
import UseReducerDataFetch from './components/UseStateAndUseReducer/UseReducerDataFetch';
import MyMemoCounter from './components/UseMemoPractice/MyMemoCounter';
import FocusInput from './components/UseRefPractice/FocusInput';
import Timer from './components/UseRefPractice/Timer';

// import ComponentA from './components/UseContextWithReducer/ComponentA';
// import ComponentX from './components/UseContextWithReducer/ComponentX';
// import ComponentZ from './components/UseContextWithReducer/ComponentZ';
// export const CountContext = React.createContext()
// const initState = 0
// const reducer = (state, action)=>{
//     switch(action){
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initState)
  return (
  <div className="App">
    {/* <UseStateDataFetch/> */}
    {/* <UseReducerDataFetch/> */}
    {/* <MyMemoCounter/> */}
    {/* <FocusInput/> */}
    <Timer/>
  </div>
    
  );
}

export default App;
