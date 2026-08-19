import React from 'react'
import { Link } from 'react-router-dom'
import { saveReturnPosition } from '../../utils/returnPosition'

const VideoCards = ({ videos }) => {
    return (
        <>
            {videos.map((video, index) => (
                <div className="video" key={index}>
                <div className="video__thumb play__icon">
                    <Link to={`/video/${video.videoId}`} onClick={saveReturnPosition}>
                        <img
                            src={video.img}
                            alt={video.title}
                            loading={index < 6 ? 'eager' : 'lazy'}
                            decoding={index < 6 ? 'auto' : 'async'}
                        />
                    </Link>
                    <span className='video__title'>
    {video.title.split('\n').map((line, i) => (
        <React.Fragment key={i}>
        {line}
        <br />
        </React.Fragment>
    ))}
    </span>
                </div>
                </div>
            ))}
        </>
    )
}

export default VideoCards
