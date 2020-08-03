import React from "react";
import DiscreteSlider from "./DiscreteSlider";


const QuestionBox = ({question,qno, score, changeScore})=>{
    return(
        <div className="questionBox">
        <div className="question">{question}</div>
        <DiscreteSlider qno= {qno} quest={question} score={score} changeScore= {changeScore}></DiscreteSlider>
        </div>
       
    );
};

export default QuestionBox;