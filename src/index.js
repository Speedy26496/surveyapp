import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import questionBank from "./data";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

class Survey extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
        questionBank: [],
        score: 0,
        responses: 0,
        currentPage: 1,
        maxItemsPerPage: 10,
        submit: false
    };
    this.changeScore=this.changeScore.bind(this);
    // this.addUser=this.addUser.bind(this);
}
    getQuestions = () => {
        this.setState({
            questionBank: questionBank.questions
        });
    };
    computeAnswer = (answer, correctAnswer) => {
        if (answer === correctAnswer) {
            this.setState({
                score: this.state.score + 1
            });

        }
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
    };
    playAgain = () => {
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        });
    };
    componentDidMount() {
        this.getQuestions();
    }
    changePage(direction) {
        if (direction === 'back') {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        } else if (direction === 'next') {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        } else if (direction === 'submit') {
        this.setState({
            submit: true
        });
    }

    }
    changeScore(id, score){
        const {questionBank} = this.state
        // console.log(questionBank, "state")
        var index = questionBank.findIndex(x=> x.id === id);
       console.log("index",questionBank[index], score)
       questionBank[index].score = score
       console.log("updated q ", questionBank)
       this.setState({
           questionBank
       })
        // console.log("main", id, score);
    }
    render() {
        return (
            <div className="container">
                
                {this.state.questionBank.length > 0 &&
                    this.state.submit === false &&
                    this.state.questionBank.slice((this.state.currentPage * this.state.maxItemsPerPage) - this.state.maxItemsPerPage, this.state.currentPage * this.state.maxItemsPerPage).map(
                        (question) => (
                            <QuestionBox
                            key={question.id}
                               qno= {question.id}
                                question={question.ques}
                                score={question.score}
                                changeScore= {this.changeScore}
                            // selected={answer => this.computeAnswer(answer,correct)}
                            />
                        )
                    )}
                <div>
                    {this.state.submit === false && this.state.currentPage > 1 ?
                        <button className='navigationBtn' onClick={() => this.changePage('back')}>{'Back'}</button>
                        : null}
                    {this.state.submit === false && this.state.questionBank.length - 1 > this.state.currentPage * this.state.maxItemsPerPage ?
                        <button className='navigationBtn' onClick={() => this.changePage('next')}>{'Next'}</button>
                        : null}
                    {this.state.questionBank.length - 1 <= this.state.currentPage * this.state.maxItemsPerPage && this.state.submit === false?
                        <button className='navigationBtn' onClick={() => this.changePage('submit')}>{'Submit Form'}</button>
                        :null}
                </div>
                {this.state.submit === true ? (
                    <Result questionBank={this.state.questionBank}/>
                ) : null}
            </div>
        );
    }
}

ReactDOM.render(<Survey />, document.getElementById("root"));