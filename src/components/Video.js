import React, { useEffect, useState } from 'react';
import parable from "../videos/Parable.mp4";
import wakeup from "../videos/일어난다.mp4"
import sleep from "../videos/잔다.mp4"
import { useDispatch, useSelector } from 'react-redux';

const video = [{
    event_id: 1,
    video_url: parable,
},
{
    event_id: 2,
    video_url: wakeup,
},
{
    event_id: 3,
    video_url: sleep,
}
]

const Video = (props) => {
    const [key, setKey] = useState();
    const [videoUrl, setVideoUrl] = useState(parable);

    useEffect(() => {
        if (props.event) {
            setVideoUrl(props.event.video_url);
            setKey(prevKey => prevKey + 1);
        }
        if(props.key) {
            setKey(props.key);
        }
    }, [props]);

    const videoEnded = () => {
        props.videoEnded();
    }

    return (
        <video autoPlay key={key} width="100%" controls="controls" onEnded={videoEnded} >
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
}

export default Video;