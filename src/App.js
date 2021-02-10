import {useState} from 'react'; 
import logo from './logo.svg';
import Icon from './components/icon'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const itemArray = new Array(9).fill("empty");

const App = () => {

  const [isCross, SetIsCross] = useState(false);
  const [winMessage, SetWinMessage]  = useState("");

  const reloadGame = () => {
    SetIsCross(false);
    SetWinMessage("");
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] && itemArray[0]===itemArray[2]&&itemArray[0]!=="empty") {
      SetWinMessage(`${itemArray[0]} wins`)
    } else if(itemArray[3] === itemArray[4] && itemArray[3]===itemArray[5]&&itemArray[3]!=="empty") {
      SetWinMessage(`${itemArray[3]} wins`)
    } else if(itemArray[6] === itemArray[7] && itemArray[6]===itemArray[8]&&itemArray[6]!=="empty") {
      SetWinMessage(`${itemArray[6]} wins`)
    } else if(itemArray[0] === itemArray[3] && itemArray[0]===itemArray[6]&&itemArray[0]!=="empty") {
      SetWinMessage(`${itemArray[0]} wins`)
    } else if(itemArray[1] === itemArray[4] && itemArray[1]===itemArray[7]&&itemArray[1]!=="empty") {
      SetWinMessage(`${itemArray[1]} wins`)
    } else if(itemArray[2] === itemArray[5] && itemArray[2]===itemArray[8]&&itemArray[2]!=="empty") {
      SetWinMessage(`${itemArray[2]} wins`)
    } else if(itemArray[0] === itemArray[4] && itemArray[0]===itemArray[8]&&itemArray[0]!=="empty") {
      SetWinMessage(`${itemArray[0]} wins`)
    } else if(itemArray[2] === itemArray[4] && itemArray[2]===itemArray[6]&&itemArray[2]!=="empty") {
      SetWinMessage(`${itemArray[2]} wins`)
    }
  }

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, {type: "success"})
    }

    if(itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      SetIsCross(!isCross);
    } else {
      return toast("already filled", {type: "error"})
    }

    checkIsWinner();
  }

  return(
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col  md={6} className="offset-md-3">
          {winMessage ?(
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button className="success" block onClick={reloadGame}>Restart</Button>
            </div>
          ) :(
            <h1 color="warning" className="text-center">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index)=>(
              <Card color="info" onClick={()=> changeItem(index)}>
                <CardBody className="box">
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
