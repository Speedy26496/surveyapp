import React from "react";

const Result=({questionBank})=>(
    <div className="score-board">
        <div className="score">You scored {questionBank.reduce((accumulator, currentValue) => {
            console.log(accumulator,currentValue)
            return accumulator + currentValue.score
            },0)}</div>
    </div>
);

export default Result;