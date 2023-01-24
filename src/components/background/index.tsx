import { BackgroundVideo } from "./styles"

import BGVideo from "../../assets/video/bg-video.mp4"

const Background = () => {
    return (
        <BackgroundVideo src={BGVideo} autoPlay={true} loop={true} muted={true}/>
    )
}

export default Background