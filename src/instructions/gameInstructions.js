import './gameInstructions.css';
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";
import React, {useState} from 'react';
import PageTimeTracker from "../utils/pageTimeTracker";

function GameInstructions() {
  const history = useHistory();
  const [partIdx, setPastIdx] = useState(0);

  const onClickNext = () => {
    if (partIdx === 0) {
      history.push("/tutorial");
    } else {
      setPastIdx(partIdx + 1);
    }
  }

  const onClickPrev = () => {
    setPastIdx(partIdx - 1);
  }

  return (
    <div className={"about-div"}>
      <h2 className={"app-heading-h2"} style={{"marginBottom": "20px"}}>About the task</h2>
      <p className={"instruction-passage"} hidden={partIdx !== 0}>
        <h5 style={{"color": "#db1111"}}>Please take good care, there will be an attention quiz later on!</h5>
        Your task is to correctly classify 80 pictures of dogs and cats. At any given stage you will receive a
          picture and you will need to press the button with the correct classification according to your best judgement.<br/>
        To enrich our pile of annotated pictures, we also have 2 other users, Alex and Matthew, that working on the same task
        in parallel (classifying a different set of pictures). Matthew is our admin user so he gets the most difficult
        images to classify. Hence, from time to time Matthew will probably have trouble correctly identifying
        if it is a dog or a cat in his picture. When this occurs, he will ask for help. Both you and Alex can help him.
        It is up to you to decide if you want to help Matthew or leave it to Alex. Choosing to help Matthew means you
        cannot progress with your own classification task.<br/>
        <span style={{"fontWeight": "bold", "fontSize": "calc(1.2rem + .5vw)", "color": "red"}}> Notice! &nbsp;</span>
        <span style={{"fontWeight": "bold"}}>Helping Matthew takes time as we need to save your current state and
          stream Matthew's task instead (and then switch back). We estimate this interruption to take around 30-40
          seconds.<br/></span>You will not get score for identifying Matthew's pictures.<br/>Once you finish correctly
        classifying 80 pictures, we will ask for a short feedback.
      </p>
      <div className={"nav-btn-div"}>
        <Button hidden={partIdx === 0} onClick={onClickPrev}
                style={{"backgroundColor": "#1ab394", "borderColor": "#1ab394"}}>Back</Button>
        <Button onClick={onClickNext} style={{"backgroundColor": "#1ab394", "borderColor": "#1ab394"}}>Next</Button>
      </div>
      <PageTimeTracker pageName="gameInstructions"/>
    </div>
  )
}

export default GameInstructions;