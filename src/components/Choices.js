import React, { useEffect, useState } from 'react';

const Choices = (props) => {
    const [choiceA, setChoiceA] = useState({
        event_id: '',
        event_label: '',
    });
    const [choiceB, setChoiceB] = useState({
        event_id: '',
        event_label: '',
    });
    const parable = {
        event_id: 0,
        event_label: "",
        choice_a: 0,
        choice_b: 0,
    };

    useEffect(() => {
    }, []);

    useEffect(() => {
        if (props) {
            setChoiceA(props.choice_a);
            setChoiceB(props.choice_b);
        }
    }, [props])

    const choiceOnClick = (e) => {
        if (e.event_id) {
            props.onClick(e);
        } else {
            window.location.reload();
        }
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
                            width: "100%",
                            height: "720px"
                        }
                    }>
                        <div className='choice' onClick={(e) => choiceOnClick(props.choice_a)}>
                            <div>
                                <label>
                                    {choiceA.event_label ? choiceA.event_label : ''}
                                </label>
                                <div className='choice-block'>
                                </div>
                            </div>
                        </div>
                        <div className='choice' onClick={(e) => choiceOnClick(props.choice_b)}>
                            <div>
                                <label>
                                    {choiceB.event_label ? choiceB.event_label : ''}
                                </label>
                                <div className='choice-block'>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <div className='ending' onClick={choiceOnClick}>
                    <label>
                        처음으로 돌아가기
                    </label>
                </div>
            }
        </div >
    );
}

export default Choices;
