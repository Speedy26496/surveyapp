import React from "react";

const calculateScore = (questions) => {
    return questions.reduce((accumulator, currentValue) => {
        console.log(accumulator, currentValue)
        return accumulator + currentValue.score
    }, 0) / 10
};
const calculatePercentage = (questions) => {
    return ((calculateScore(questions) / questions.length * 10))
};

const Result = ({ questionBank }) => (
    <div className="score-board">
        <div className="score">You scored {calculateScore(questionBank)}</div>
        {calculatePercentage(questionBank) < 35 ?
            <div className="score"> Your performance is bad</div>
            : calculatePercentage(questionBank) < 65 ? <div className="score"> Your performance is good</div> : <div className="score"> Your performance is excellent</div>}
    </div>
);

export default Result;