import React from "react";
import DiscreteSlider from "./DiscreteSlider";


const QuestionBox = ({question,qno, score, changeScore})=>{
    return(
        <div className="questionBox">
        <div className="question">{question}</div>
        <DiscreteSlider qno= {qno} quest={question} score={score} changeScore= {changeScore}></DiscreteSlider>
        
{/*         {answer.map((text,index)=>(
            <button key={index}
             className="answerBtn"
              onClick={()=>{
                  setAnswer([text]);
                  selected(text);

            }}>
                {text}
            </button>
        ))} */}
        </div>
       
    );
};

export default QuestionBox;