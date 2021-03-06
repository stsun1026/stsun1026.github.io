import React, { useState, useEffect, useRef } from 'react';
import styles from "./ClearTheTreeGame.module.css";
import { TreeGameLogic } from "./TreeGameLogic";
import { Tree } from "../../../components/Tree/Tree";
const ClearTheTreeGame = ({
  gameWidth
}) => {
  const logic = useRef(new TreeGameLogic());  
  const [tree, setTree] = useState();
  const [intervalLength, setIntervalLength] = useState(1000);
  const [shouldFocusInput, setShouldFocusInput] = useState(false);

  const inputRef = useRef(null);

  const startGame = (intervalLength) => {
    logic.current.start();
    setTree(<Tree contentList={ logic.current.getOutput() }/>);
    setIntervalLength(intervalLength);
    setShouldFocusInput(true);
  }

  useEffect(() => {
    console.log("use eff", shouldFocusInput);
    if(shouldFocusInput) {
      inputRef.current.focus();
    }
  }, [shouldFocusInput]);

  const interval = useInterval(() => {
    if(logic.current.isActive) {
      if(logic.current.loss()) {
        setTree(<div>THE TREE WINS</div>);
        setShouldFocusInput(false);
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
          <div className={ styles.introText } style={{ width: gameWidth }}>
            You are a lumberjack who cuts down trees by solving math equations.<br/>Can you cut down this tree?
          </div>
          <div style={{ paddingBottom: 20 }}>Choose a difficulty:</div>
          <div className={ gameWidth > 700 ? styles.buttonGroupAdjacent : styles.buttonGroupStacked }>
            <button className={ styles.button } onClick={() => { startGame(3000) }}><b>NORMAL</b></button>
            <button className={ styles.button } onClick={() => { startGame(2000) }}><b>HARD</b></button>
            <button className={ styles.button } onClick={() => { startGame(1500) }}><b>I DO MATH FOR FUN</b></button>
          </div>
        </div>
      }
      <div>{ tree }</div>
      <div style={{ visibility: logic.current.isActive ? "visible" : "hidden" }}>
        <input onKeyPress={ submit } type="number" ref={ inputRef }></input>
        <div>"Enter" to answer</div>
      </div>
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
