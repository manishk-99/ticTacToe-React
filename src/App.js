import {useState} from 'react'; 
import logo from './logo.svg';
import './App.css';
import Icon from './components/icon'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, SetIsCross] = useState(false);
  const [winMessage, SetWinMessage]  = useState("");

  const reloadGame = () => {

  }

  const checkIsWinner = () => {

  }

  const changeItem = itemNumber => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <Icon />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
