import React, { useEffect, useState } from 'react';
import Choices from './Choices';
import Video from './Video';
import { useDispatch, useSelector } from 'react-redux';
import { changeEvent } from '../redux/store';
import parable from "../videos/Parable.mp4";
import wakeup from "../videos/일어난다.mp4"
import sleep from "../videos/잔다.mp4"

const events = [
    {
        event_id: 0,
        event_label: "",
        choice_a: 0,
        choice_b: 0,
    },
    {
        event_id: 1,
        event_label: "Parable",
        choice_a: 2,
        choice_b: 3,
        video_url: parable,
    },
    {
        event_id: 2,
        event_label: "일어난다.",
        choice_a: 4,
        choice_b: 5,
        video_url: wakeup,
    },
    {
        event_id: 3,
        event_label: "잔다.",
        choice_a: 0,
        choice_b: 0,
        video_url: sleep,
    },
    {
        event_id: 4,
        event_label: "담배를 훔친다",
        choice_a: 0,
        choice_b: 0,
    },
    {
        event_id: 5,
        event_label: "훔치지 않는다",
        choice_a: 0,
        choice_b: 0,
    }
]

const Container = () => {
    const [event, setEvent] = useState();
    const [videoState, setVideoState] = useState(false);
    const [key, setKey] = useState(0);
    let state = useSelector((state) => { return state })
    let dispatch = useDispatch();

    useEffect(() => {
        // console.log(state.event.currentEvent);
        // const currentEvent = events.find(element => element.event_id === state.event.currentEvent);
        // console.log(currentEvent);
        console.log(state);
        setEvent(events.find(element => element.event_id === state.event.currentEvent));
    }, [state]);

    useEffect(() => {
        console.log(event);
    }, [event])

    const handleKey = () => {
        setKey(preKey => preKey + 1);
    }

    const onEnded = () => {
        console.log("onEnded");
        setVideoState(true);
    };

    const replay = () => {
        setVideoState(false);
        handleKey();
    }

    const handleEvent = (nextEvent) => {
        setEvent(events.find((element) => element.event_id === nextEvent.event_id));
    }

    const choicesOnClick = (nextEvent) => {
        const currentEvent = events.find((element) => element.event_id === nextEvent.event_id);
        dispatch(changeEvent({
            currentEvent: currentEvent.event_id,
            nextEventA: currentEvent.choice_a,
            nextEventB: currentEvent.choice_b,
        }));
        handleEvent(events.find((element) => element.event_id === nextEvent.event_id));
        setVideoState(false);
        handleKey();
    };
    return (
        <div>
            {
                videoState ? (
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            zIndex: 10
                        }}>
                        <Choices
                            choice_a={events.find(element => element.event_id === state.event.nextEventA)}
                            choice_b={events.find(element => element.event_id === state.event.nextEventB)}
                            onClick={choicesOnClick} />
                        <div onClick={replay}>
                            <h1>
                                한 번 더 보기
                            </h1>
                        </div>
                    </div>
                ) : <></>
            }
            <div
                style={{
                    position: "relative",
                    zIndex: 0
                }}>
                <Video
                    key={key}
                    event={event}
                    videoEnded={onEnded} />
            </div>

        </div>
    );
}

export default Container;
