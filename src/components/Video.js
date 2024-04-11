import React, { useEffect, useState } from 'react';

const Video = (props) => {
    const [key, setKey] = useState();
    const [videoUrl, setVideoUrl] = useState();

    useEffect(() => {
        if (props.event) {
            setVideoUrl(props.event.video_url);
            setKey(prevKey => prevKey + 1);
        }
        if (props.key) {
            setKey(props.key);
        }
    }, [props]);

    const videoEnded = () => {
        props.videoEnded();
    }

    return (
        <video autoPlay key={key} width="100%" controls="controls" onEnded={videoEnded} style={{ padding: "20px" }}>
            <source src={videoUrl} type="video/mp4" />
        </video>
    );
}

export default Video;