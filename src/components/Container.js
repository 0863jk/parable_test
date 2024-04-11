import React, { useEffect, useState } from 'react';
import Choices from './Choices';
import Video from './Video';
import parable from "../videos/01_Parable.mp4";
import wakeUp from "../videos/02_wake_up.mp4"
import sleep from "../videos/03_sleep.mp4"
import stealTheCigarette from "../videos/04_steal_the_cigarette.mp4";
import dontSteal from "../videos/05_dont_steal.mp4";
import stealTheWallet from "../videos/06_steal_the_wallet.mp4";
import findOwner from "../videos/07_find_owner.mp4";
import stayOutOfThem from "../videos/08_stay_out_of_them.mp4";
import talkWithThem from "../videos/09_talk_with_them.mp4";
import chaseHer from "../videos/10_chase_her.mp4";
import playGame from "../videos/11_play_game.mp4";
import coverItUp from "../videos/12_cover_it_up.mp4";
import fightWithOwner from "../videos/13_fight_with_owner.mp4";
import apologize from "../videos/14_apologize.mp4";
import ignore from "../videos/15_ignore.mp4";
import fightBack from "../videos/16_fight_back.mp4";
import runAway from "../videos/17_run_away.mp4";
import killHim from "../videos/18_kill_him.mp4";
import sacrificeMyself from "../videos/19_sacrifice_myself.mp4";
import Ending from './Ending';

const events = [
    {
        event_id: 0,
        event_label: "Parable",
        choice_a: 1,
        choice_b: 2,
        topic: "일어날 것인가?",
        video_url: parable,
    },
    {
        event_id: 1,
        event_label: "일어난다.",
        choice_a: 3,
        choice_b: 4,
        topic: "훔쳐필 것인가?",
        video_url: wakeUp,
    },
    {
        event_id: 2,
        event_label: "잔다.",
        choice_a: 0,
        choice_b: 0,
        video_url: sleep,
    },
    {
        event_id: 3,
        event_label: "담배를 훔친다.",
        choice_a: 5,
        choice_b: 6,
        topic: "지갑을 훔칠 것인가?",
        video_url: stealTheCigarette,
    },
    {
        event_id: 4,
        event_label: "훔치지 않는다.",
        choice_a: 7,
        choice_b: 8,
        topic: "동조할 것인가?",
        video_url: dontSteal,
    },
    {
        event_id: 5,
        event_label: "지갑을 훔친다.",
        choice_a: 9,
        choice_b: 10,
        topic: "순진한 사람을 꼬실 것인가?",
        video_url: stealTheWallet,
    },
    {
        event_id: 6,
        event_label: "지갑 주인을 찾아준다.",
        choice_a: 11,
        choice_b: 12,
        topic: "어떻게 행동할 것인가?",
        video_url: findOwner,
    },
    {
        event_id: 7,
        event_label: "동조하지 않는다.",
        choice_a: 0,
        choice_b: 0,
        video_url: stayOutOfThem,
    },
    {
        event_id: 8,
        event_label: "함께 뒷담화한다.",
        choice_a: 13,
        choice_b: 14,
        topic: "어떻게 행동할 것인가?",
        video_url: talkWithThem,
    },
    {
        event_id: 9,
        event_label: "꼬신다.",
        choice_a: 15,
        choice_b: 16,
        topic: "어떻게 행동할 것인가?",
        video_url: chaseHer,
    },
    {
        event_id: 10,
        event_label: "게임한다.",
        choice_a: 0,
        choice_b: 0,
        video_url: playGame,
    },
    {
        event_id: 11,
        event_label: "무마한다.",
        choice_a: 0,
        choice_b: 0,
        video_url: coverItUp,
    },
    {
        event_id: 12,
        event_label: "지갑 주인과 싸운다.",
        choice_a: 0,
        choice_b: 0,
        video_url: fightWithOwner,
    },
    {
        event_id: 13,
        event_label: "사과한다.",
        choice_a: 0,
        choice_b: 0,
        video_url: apologize,
    },
    {
        event_id: 14,
        event_label: "무시한다.",
        choice_a: 0,
        choice_b: 0,
        video_url: ignore,
    },
    {
        event_id: 15,
        event_label: "맞서 싸운다.",
        choice_a: 17,
        choice_b: 18,
        topic: "어떻게 행동할 것인가?",
        video_url: fightBack,
    },
    {
        event_id: 16,
        event_label: "도망친다.",
        choice_a: 0,
        choice_b: 0,
        video_url: runAway,
    },
    {
        event_id: 17,
        event_label: "죽인다.",
        choice_a: 0,
        choice_b: 0,
        video_url: killHim,
    },
    {
        event_id: 18,
        event_label: "희생한다.",
        choice_a: 0,
        choice_b: 0,
        video_url: sacrificeMyself,
    },
]

const Container = () => {
    const [event, setEvent] = useState({
        event_id: 0,
        event_label: "Parable",
        choice_a: 1,
        choice_b: 2,
        topic: "일어날 것인가?",
        video_url: parable,
    });
    const [beforeStart, setBeforeStart] = useState(true);
    const [videoState, setVideoState] = useState(false);
    const [endingState, setEndingState] = useState(false);
    const [key, setKey] = useState(0);

    const handleKey = () => {
        setKey(preKey => preKey + 1);
    }

    const onEnded = () => {
        setVideoState(true);
        if (event.choice_a === 0 && event.choice_b === 0) {
            setEndingState(true);
        }
    };

    const replay = () => {
        setVideoState(false);
        handleKey();
    }

    const handleEvent = (nextEvent) => {
        setEvent(events.find((element) => element.event_id === nextEvent.event_id));
    }

    const choicesOnClick = (nextEvent) => {
        handleEvent(events.find((element) => element.event_id === nextEvent.event_id));
        setVideoState(false);
        setEndingState(false);
        if (nextEvent.event_id === 0) {
            setBeforeStart(true);
        } else {
            handleKey();
        }
    };

    const start = () => {
        setBeforeStart(false);
        handleKey();
    }

    return (
        <div className='container'>
            {
                beforeStart ? (
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            zIndex: 15
                        }}>
                        <div style={
                            {
                                display: 'flex',
                                width: "100%",
                                height: "720px"
                            }
                        }>
                            <div className='ending'>
                                <div className='ending-choice' style={{ display: "flex", flexDirection: "column" }}>
                                    <label style={{ margin: "10px", fontSize: "32px" }} onClick={start}>
                                        PARABLE
                                    </label>
                                    <div className='choice start'>
                                        <label style={{ margin: "10px", fontSize: "72px" }} onClick={start}>
                                            시작하기
                                        </label>
                                    </div>
                                    <label style={{ margin: "10px", fontSize: "16px" }} onClick={start}>
                                        모바일의 경우 가로 모드로 보는 것을 권장합니다.
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : <></>
            }
            {
                videoState && !endingState ? (
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            zIndex: 15
                        }}>
                        <Choices
                            topic={event.topic}
                            choice_a={events.find(element => element.event_id === event.choice_a)}
                            choice_b={events.find(element => element.event_id === event.choice_b)}
                            onClick={choicesOnClick}
                            replay={replay}
                        />
                    </div>
                ) : videoState && endingState ? (
                    <div
                        style={{
                            position: "absolute",
                            width: "100%",
                            zIndex: 15
                        }}>
                        <Ending
                            event_id={event.event_id}
                            onClick={choicesOnClick}
                            replay={replay}
                        />
                    </div>
                ) : <></>
            }
            <div
                style={{
                    position: "relative",
                    zIndex: 0,
                    padding: "50px"
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
