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
        <Col md={6} className="offset-md-3">
          {winMessage ?(
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button className="success" block onClick={reloadGame}>Reload the game</Button>
            </div>
          ) :(
            <h1 className="text-center">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, index)=>(
              <Card>
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
