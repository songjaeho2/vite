    import React, { useState, useEffect } from 'react';
    import { Link, useNavigate, useParams } from 'react-router-dom';
    import { fetchFromAPI } from '../utils/api';
    import { webdText } from '../data/webd';
    import Main from '../components/section/Main';
    import ReactPlayer from 'react-player';
    import { CiChat1, CiStar, CiRead } from 'react-icons/ci';
    import { AiOutlineFullscreen } from 'react-icons/ai';
    import { FiArrowLeft } from 'react-icons/fi';
    import { getReturnPosition } from '../utils/returnPosition';

    const Video = () => {
    const { videoId } = useParams();
    const navigate = useNavigate();
    const [videoDetail, setVideoDetail] = useState(null);
    const [isLocal, setIsLocal] = useState(false);
    const [localVideo, setLocalVideo] = useState(null);

    useEffect(() => {
        const local = webdText.find(v => v.videoId === videoId && v.isLocal);
        if (local) {
        setIsLocal(true);
        setLocalVideo(local);
        } else {
        setIsLocal(false);
        fetchFromAPI(`videos?part=snippet,statistics&id=${videoId}`)
            .then((data) => setVideoDetail(data.items[0]));
        }
        window.scrollTo(0, 0);
    }, [videoId]);

    // 전체화면 함수
    const handleFullScreen = () => {
        const videoElement = document.getElementById("localVideoPlayer");
        if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
        } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
        } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
        }
    };

    const handleGoBack = () => {
        const saved = getReturnPosition();
        navigate(saved?.path || '/webd');
    };

    return (
        <Main title="" description="">
        <section id='videoViewPage'>
            <button type="button" className="video-back-button" onClick={handleGoBack}>
                <FiArrowLeft aria-hidden="true" />
                이전 페이지로
            </button>
            <div className='video__view'>
            <div className='video__play' style={{ position: 'relative' }}>
                {isLocal ? (
                <>
                    <video
                    id="localVideoPlayer"
                    src={localVideo.src}
                    controls
                    autoPlay
                    style={{ width: '100%', borderRadius: '12px' }}
                    />
                    <button
                    onClick={handleFullScreen}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(0,0,0,0.6)',
                        border: 'none',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        zIndex: 10
                    }}
                    title="전체화면"
                    >
                    <AiOutlineFullscreen size={20} />
                    </button>
                </>
                ) : (
                videoDetail && (
    <ReactPlayer
    playing={true}
    url={`https://www.youtube.com/watch?v=${videoId}`}
    width="100%"
    height="100%"
    style={{ position: 'absolute', top: 0, left: 0 }}
    config={{
        youtube: {
        playerVars: {
            autoplay: 1,
            rel: 0,                 // 관련 영상 제거 (가능한 한)
            modestbranding: 1,      // YouTube 로고 최소화
            controls: 1,            // 플레이어 컨트롤은 표시
            showinfo: 0,            // 제목 등 최소화 (일부 브라우저만 적용)
            fs: 1                   // 전체화면 허용
        }
        }
    }}
    controls
    />
                )
                )}
            </div>

            <div className='video__info'>
                <h2 className='video__title'>
                {isLocal ? localVideo.title : videoDetail?.snippet.title}
                </h2>

                {!isLocal && videoDetail && (
                <div className='video__channel'>
                    <div className='id'>
                    <Link to='/channel/'>{videoDetail.snippet.channelTitle}</Link>
                    </div>
                    <div className='count'>
                    <span className='view'><CiRead />{videoDetail.statistics.viewCount}</span>
                    <span className='like'><CiStar />{videoDetail.statistics.likeCount}</span>
                    <span className='comment'><CiChat1 />{videoDetail.statistics.commentCount}</span>
                    </div>
                </div>
                )}

                {!isLocal && videoDetail && (
                <div className='video__desc'>
                    {videoDetail.snippet.description}
                </div>
                )}
            </div>
            </div>
        </section>
        </Main>
    );
    };

    export default Video;



