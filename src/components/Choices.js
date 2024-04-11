import React, { useEffect, useState } from 'react';

const Choices = (props) => {
    const [endingState, setEndingState] = useState(false);
    const [choiceA, setChoiceA] = useState({
        event_id: '',
        event_label: '',
    });
    const [choiceB, setChoiceB] = useState({
        event_id: '',
        event_label: '',
    });

    useEffect(() => {
        const choiceLeft = document.querySelector('.choice-left');
        const choiceRight = document.querySelector('.choice-right');
        const choiceReplay = document.querySelector('.choice-replay');

        choiceLeft.addEventListener('mouseenter', () => {
            choiceRight.classList.add('inactive');
            choiceReplay.classList.add('inactive');
        });

        choiceLeft.addEventListener('mouseleave', () => {
            choiceRight.classList.remove('inactive');
            choiceReplay.classList.remove('inactive');
        });
        choiceRight.addEventListener('mouseenter', () => {
            choiceLeft.classList.add('inactive');
            choiceReplay.classList.add('inactive');
        });

        choiceRight.addEventListener('mouseleave', () => {
            choiceLeft.classList.remove('inactive');
            choiceReplay.classList.remove('inactive');
        });
        choiceReplay.addEventListener('mouseenter', () => {
            choiceLeft.classList.add('inactive');
            choiceRight.classList.add('inactive');
        });

        choiceReplay.addEventListener('mouseleave', () => {
            choiceLeft.classList.remove('inactive');
            choiceRight.classList.remove('inactive');
        });
    }, []);

    useEffect(() => {
        if (endingState) {
            const restart = document.querySelector('.restart');
            const credit = document.querySelector('.credit');
            restart.addEventListener('mouseenter', () => {
                credit.classList.add('inactive');
            });

            restart.addEventListener('mouseleave', () => {
                credit.classList.remove('inactive');
            });
            credit.addEventListener('mouseenter', () => {
                restart.classList.add('inactive');
            });

            credit.addEventListener('mouseleave', () => {
                restart.classList.remove('inactive');
            });
        }

    }, [endingState])

    useEffect(() => {
        if (props.choice_a.event_id !== 0) {
            setChoiceA(props.choice_a);
            setChoiceB(props.choice_b);
        } else {
            handleEndingState();
        }
    }, [props])

    const choiceOnClick = (e) => {
        if (e.event_id) {
            props.onClick(e);
        }
    }
    const handleEndingEvent = (e) => {
        if (e === "restart") {
            const parable = {
                event_id: 0,
                event_label: "",
                choice_a: 2,
                choice_b: 3,
                topic: "일어날 것인가?",
            };
            // window.location.reload();
            props.onClick(parable);
        } else if (e === "credit") {

        }
    }

    const handleEndingState = () => {
        setEndingState(!endingState);
    }

    return (
        <div style={
            {
                display: 'flex',
                width: "100%",
                height: "720px"
            }
        }>
            {
                choiceA.event_id !== 0 && choiceB.event_id !== 0 ? (
                    <div style={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            width: "100%",
                            height: "720px"
                        }
                    }>
                        <div className='choice' style={
                            {
                                display: 'flex',
                                width: "100%",
                                height: "40%"
                            }}>
                            <label style={{ marginTop: "200px", backgroundColor: 'black', padding: "10px" }}>
                                {props.topic ? props.topic : ""}
                            </label>
                        </div>
                        <div style={
                            {
                                display: 'flex',
                                width: "100%",
                                height: "20%"
                            }}>
                            <div className='choice choice-main choice-left' onClick={(e) => choiceOnClick(props.choice_a)}>
                                <div style={{ textAlign: "right", alignItems: "right", justifyContent: "right" }}>
                                    <label>
                                        {choiceA.event_label ? choiceA.event_label : ''}
                                    </label>
                                    <div className='choice-block'>
                                    </div>
                                </div>
                            </div>
                            <div className='choice choice-main choice-right' onClick={(e) => choiceOnClick(props.choice_b)}>
                                <div>
                                    <label>
                                        {choiceB.event_label ? choiceB.event_label : ''}
                                    </label>
                                    <div className='choice-block'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='choice choice-replay' style={
                            {
                                display: 'flex',
                                width: "100%",
                                height: "40%"
                            }} onClick={props.replay}>
                            <label style={{ marginBottom: "200px", fontSize: "32px" }}>replay</label>
                        </div>
                    </div>
                ) :
                    <></>
            }
        </div >
    );
}

export default Choices;
