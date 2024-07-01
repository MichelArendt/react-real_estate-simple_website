import { useState, useEffect } from 'react'

type Props = {
    fileName: string;
    autoPlay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
    classes?: string;
}

const Video = (props: Props) => {
    const [screenWidth, setScreenWidth] = useState(0);
    const [videoResolution, setVideoResolution] = useState('640x360');

    useEffect(() => {
        setScreenWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        if (screenWidth >= 1440)
        {
            setVideoResolution('1920x1080');
        } else if(screenWidth >= 1280 && screenWidth < 1440) {
            setVideoResolution('1280x720');
        } else if(screenWidth >= 720 && screenWidth < 1280) {
            setVideoResolution('720x480');
        } else {
            setVideoResolution('640x360');
        }
    }, [screenWidth]);

    return (
        <video
            key={videoResolution}
            autoPlay={props.autoPlay}
            muted={props.muted}
            loop={props.loop}
            controls={props.controls}
            className={props.classes}
            preload="auto"
        >
            <source src={`/videos/${props.fileName}-${videoResolution}.mp4`} type="video/mp4" />
            <source src={`/videos/${props.fileName}-${videoResolution}.webm`} type="video/webm" />
            <p>
                Seu navegador não comporta vídeo HTML.
                <a href={`/videos/${props.fileName}-${videoResolution}.mp4`} target="_blank">Clique aqui</a> para assistir ao vídeo em uma nova aba.
            </p>
        </video>
    )
}

export default Video