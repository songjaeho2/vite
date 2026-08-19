import React, { useEffect, useState } from 'react'
import Main from '../components/section/Main'
import VideoCard from '../components/video/VideoCard'
import { webdText } from '../data/webd'
import { restoreReturnPosition } from '../utils/returnPosition'




const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        // ✅ 페이지 로드 시 스크롤 맨 위로 이동
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            setLoading(false);
            restoreReturnPosition('/webd');
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const webdClass = loading ? 'isLoading' : 'isLoaded';

    return (
        
        <Main 
            title = ""
            description="">
                
            <section id='webd' className={webdClass}>
                <div className={`video__inner webd ${loading ? '' : 'isLoaded'}`}>
                    <VideoCard videos={webdText} />

                </div>
            </section>
        </Main>

    )
}

export default Webd
