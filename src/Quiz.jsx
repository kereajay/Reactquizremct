import React, { useState, useRef } from 'react';
import { data } from './Data';

function Quiz() {
    const wrong = []
    const optionRefs = useRef({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [clickedOption, setClickedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showColors, setShowColors] = useState(false);
    const [wrongquestion, setWrongquestion] = useState([])
    const [displaywrongquestion, setDisplaywrongquestion] = useState(false)

    const handleQuestionChange = () => {
        if (clickedOption !== null) {
            updateScore();
            setShowColors(true);

            setTimeout(() => {
                setShowColors(false);
                setClickedOption(null);

                if (currentQuestion < data.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                } else {
                    setDisplaywrongquestion(true)
                }
            }, 500);
        }
    };

    const updateScore = () => {
        if (clickedOption === data[currentQuestion].answer) {
            setScore(score + 1);
        }
        else {

            // console.log(data[currentQuestion])
            setWrongquestion([...wrongquestion, data[currentQuestion]])

        }
    };
// const handelreset=()=>{
//     setCurrentQuestion(0)
//     setScore(0)
//     setWrongquestion([])
 

// }
    return (
        <div>
            {/* { currentQuestion<=data.length-1 && */}
            <div className='text-center'>
                <div className='text-center mt-10'>
                    <h1 className='text-3xl font-bold' >USA Quiz</h1>
                    <br />
                    <h1>Current Score:- {score}</h1>
                    <br />
                    <h1 className='font-bold text-xl'>Question {currentQuestion + 1} out of 5</h1>
                    <br />
                    <h1 className='text-2xl font-bold'>{currentQuestion+1}) {data[currentQuestion].question}</h1>
                </div>
                <br />
                <div className='text-center'>
                    {data[currentQuestion].options.map((option, index) => {
                        let backgroundColor = '';
                        if (showColors) {
                            if (index + 1 === data[currentQuestion].answer) {
                                backgroundColor = 'bg-green-400';
                            } else if (index + 1 === clickedOption) {
                                backgroundColor = 'bg-red-400';
                            }
                        }
                        return (
                         
                            <div key={index}>
                                <button
                                    className={`bg-slate-400 w-[20%] ${backgroundColor} `}
                                    onClick={() => setClickedOption(index + 1)}
                                  
                                >
                                  <span className={`w-96 ${backgroundColor}`}>{index+1}) {option}</span>  
                                </button>
                                <br />
                                <br />
                            </div>
                        );
                    })}
                </div>
                <button
                    className='px-2 py-1 bg-blue-400 text-xl font-semibold rounded-md'
                    onClick={handleQuestionChange}
                >
                    Next
                </button>
                {/* <button  className='px-2 py-1 bg-blue-400 text-xl font-semibold rounded-md ml-4' onClick={handelreset}>Reset</button> */}
            </div>
            {/* } */}

            {displaywrongquestion == true ?


                wrongquestion.map((item,index) => {
                    return (
                        <>
                            <div className='p-4'>
                                <h1 className='text-2xl font-semibold '>List of questions with right answer</h1>
                                <br />
                                <h1 className='text-xl font-semibold'>{index+1}) {item.question}</h1>
                                {/* <br /> */}
                            </div>
                            <div className='px-4'>
                                {
                                    item.options.map((opt, index) => {
                                        return (
                                            <>
                                                <p style={{ backgroundColor: item.answer === index + 1 ? '#90EE90' : 'initial',width:"10%" }}>{index+1}) {opt}</p>

                                            </>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                }) : ""


            }
            <br />

        </div>
    );
}

export default Quiz;
