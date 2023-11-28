import logo from './logo.svg';
import './App.css';
import Exam1 from './component/Exam1';
import Exam2 from './component/Exam2';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <Exam1 /> */}
      <Exam2 />

      {/* jsx 주석처리 : 주석 처리 하고 싶은 곳 커서두고 Ctrl + / = 쉽게 주석처리 가능! */}
    </div>
  );
}

export default App;
