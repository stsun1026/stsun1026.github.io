import React, { useState, useEffect, useRef } from 'react';
import styles from "./ClearTheTreeGame.module.css";
import { TreeGameLogic } from "./TreeGameLogic";
import { Tree } from "../../../components/Tree/Tree";
const ClearTheTreeGame = () => {
  const logic = useRef(new TreeGameLogic());  
  const [tree, setTree] = useState();
  const [intervalLength, setIntervalLength] = useState(1000);

  const startGame = (intervalLength) => {
    logic.current.start();
    setTree(<Tree contentList={ logic.current.getOutput() }/>);
    setIntervalLength(intervalLength);
  }

  const interval = useInterval(() => {
    if(logic.current.isActive) {
      if(logic.current.loss()) {
        setTree(<div>THE TREE WINS</div>);
      }
      else {
        logic.current.push();
        setTree(<Tree contentList={ logic.current.getOutput() }/>);
      }
    }
  }, intervalLength);

  const submit = (event) => {
    if(event.key === "Enter" && logic.current.isActive) {
      if(logic.current.submit(parseInt(event.target.value))) {
        if(logic.current.win()) {
          setTree(<div>YOU'VE DEFEATED THE TREE</div>);
        }
        else {
          setTree(<Tree contentList={ logic.current.getOutput() }/>);
        }
      }
      else {
        setTree(<Tree contentList={ logic.current.getOutput() } isGreen={ false }/>);
      }
      event.target.value = "";
    }
  }

  return(
    <div>
      { logic.current.isActive ? <div></div> :
        <div>
          <p>You are a lumberjack who cuts down trees by solving math equations. <br/>Can you cut down this tree?</p>
          <div style={{paddingBottom: 20}}>Choose a difficulty:</div>
          <div className={ styles.buttonGroup }>
            <button  className={ styles.button } onClick={() => { startGame(3000) }}><b>NORMAL</b></button>
            <button  className={ styles.button } onClick={() => { startGame(2000) }}><b>HARD</b></button>
            <button  className={ styles.button } onClick={() => { startGame(1500) }}><b>I DO MATH FOR FUN</b></button>
          </div>
        </div>
      }
      <div>{ tree }</div>
      { logic.current.isActive ? <input onKeyPress={ submit } type="number"></input> : <div></div> } 
    </div>
  )
}

function useInterval(callback, delay) {
  const savedCallback = useRef();
  
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default ClearTheTreeGame;
