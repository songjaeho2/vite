import React from 'react'
import { webdText } from '../../data/webd'
import { Link } from 'react-router-dom'
import { saveReturnPosition } from '../../utils/returnPosition'

const Webd = () => {
    return (
        <section id='webd'>
            <h2>😮 포트폴리오 </h2>
            <div className='video__inner'>
                {webdText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`} onClick={saveReturnPosition}>
                                <img
                                    src={video.img}
                                    alt={video.title}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </Link>
                            <span className='video__title'>{video.title}</span> {/* 제목을 추가 */}

                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Webd
