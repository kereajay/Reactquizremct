import React, { useState } from 'react';
import { data } from './Data';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showColors, setShowColors] = useState(false);
    const [wrongquestion, setWrongquestion] = useState([]);
    const [displaywrongquestion, setDisplaywrongquestion] = useState(false);
    const [clickedOption, setClickedOption] = useState(null);

    const handleQuestionChange = (index) => {
        const selectedOption = index + 1;
        setClickedOption(selectedOption);
        if (selectedOption !== 0) {
            updateScore(selectedOption);
            setShowColors(true);

            setTimeout(() => {
                setShowColors(false);
                setClickedOption(null);

                if (currentQuestion < data.length - 1) {
                    setCurrentQuestion(currentQuestion + 1);
                } else {
                    setDisplaywrongquestion(true);
                }
            }, 2000);
        }
    };

    const updateScore = (selectedOption) => {
        if (selectedOption === data[currentQuestion].answer) {
            setScore(score + 1);
        } else {
            setWrongquestion([...wrongquestion, data[currentQuestion]]);
        }
    };

    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10'>USA Quiz</h1>
            <br />
            <div className='text-center shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] py-4 w-[60%] m-auto'>
                <div className='text-center mt-10'>
                    <br />
                    <h1>Current Score: {score}</h1>
                    <br />
                    <h1 className='font-bold text-xl'>Question {currentQuestion + 1} out of 5</h1>
                    <br />
                    <h1 className='text-2xl font-bold'>{currentQuestion + 1}) {data[currentQuestion].question}</h1>
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
                                    className={`border-2 border-black  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] w-[40%] hover:bg-orange-300 rounded-md py-1 ${backgroundColor}`}
                                    onClick={() => handleQuestionChange(index)}
                                >
                                    {option}
                                </button>
                                <br />
                                <br />
                            </div>
                        );
                    })}
                </div>
            </div>
            <br />
            <br />
            <br />
            {displaywrongquestion && (
                <div className='py-28 w-[60%] m-auto items-center text-center shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]'>
                    <h1 className='text-2xl font-semibold '>List of questions with right answer</h1>
                    <br />
                    {wrongquestion.map((item, index) => (
                        <div key={index} className='p-4 m-auto r' >
                            <h1 className='text-xl font-semibold'>{index + 1}) {item.question}</h1>
                            <br />
                            <div className='px-4 '>
                                {item.options.map((opt, optIndex) => (
                                    <p
                                        key={optIndex}
                                        style={{
                                            backgroundColor: item.answer === optIndex + 1 ? '#90EE90' : 'initial',
                                            
                                        }}
                                        className='w-[30%] m-auto'
                                    >
                                        {optIndex + 1}) {opt}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <br />
        </div>
    );
}

export default Quiz;
