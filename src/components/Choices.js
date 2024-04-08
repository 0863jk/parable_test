import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Choices = (props) => {
    let state = useSelector((state) => { return state })
    let dispatch = useDispatch();

    const [choiceA, setChoiceA] = useState({
        event_id: '',
        event_label: '',
    });
    const [choiceB, setChoiceB] = useState({
        event_id: '',
        event_label: '',
    });

    useEffect(() => {
        console.log(choiceA);
        console.log(choiceB);
    }, []);

    useEffect(() => {
        // if (props.event) {
        //     setChoiceA(props.event.choice_a);
        //     setChoiceB(props.event.choice_b);
        // }
        if (props) {
            setChoiceA(props.choice_a);
            setChoiceB(props.choice_b);
        }
    }, [props])

    const choiceOnClick = (e) => {
        props.onClick(e);
    }

    return (
        <div style={
            {
                display: 'flex',
                opacity: '100%',
            }
        }>
            <div className='choice' onClick={(e) => choiceOnClick(props.choice_a)}>
                <h1>
                    {choiceA.event_label ? choiceA.event_label : ''}
                </h1>
            </div>
            <div className='choice' onClick={(e) => choiceOnClick(props.choice_b)}>
                <h1>
                    {choiceB.event_label ? choiceB.event_label : ''}
                </h1>
            </div>
        </div>
    );
}

export default Choices;
