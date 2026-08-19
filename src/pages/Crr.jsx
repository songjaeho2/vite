import React, { useEffect } from 'react';
import Main from '../components/section/Main';
import { FiDownload } from 'react-icons/fi';

const Crr = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const careerData = {
        2024: ['현대자동차','혼마골프', '카스 ', 'LG U+', '코웨이 비렉스', 'HUG'],
        2025: ['우루오스', '코카콜라', 'LG 베스트샵', '크몽', '카스 0.0' ,'유니세프'],
        2026: ['오브제','나무엑스','LG 전자', '동행복권','자담치킨','오로나민C'],
    };

    return (
        <Main title="경력사항" description="연도별 프로젝트 및 협업 이력입니다.">
            <section className="career-section">
                <div className="career-heading">
                    <h2>경력사항</h2>
                    <p>광고와 브랜드 콘텐츠를 중심으로 함께한 주요 프로젝트입니다.</p>
                </div>

                <div className="career-container">
                    {Object.entries(careerData).reverse().map(([year, items]) => (
                        <article className="career-column" key={year}>
                            <h3>{year}</h3>
                            <ul>
                                {items.map((item) => <li key={item}>{item}</li>)}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* 다운로드 링크 추가 */}
                <div className="download-section">
                    <div className="download-heading">
                        <span>자료 다운로드</span>
                        <h2>송재호 프로필</h2>
                        <p>동일한 프로필 자료를 원하는 파일 형식으로 내려받을 수 있습니다.</p>
                    </div>
                    <ul>
                        <li>
                            <a href="/files/2026 송재호 프로필.pdf" download="2026 송재호 프로필.pdf">
                                <span className="download-format">PDF</span>
                                <span className="download-label"><strong>PDF 파일</strong><small>열람 및 공유용</small></span>
                                <FiDownload aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="/files/2026 송재호 프로필.pptx" download="2026 송재호 프로필.pptx">
                                <span className="download-format">PPTX</span>
                                <span className="download-label"><strong>PowerPoint 파일</strong><small>프레젠테이션용</small></span>
                                <FiDownload aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </Main>
    );
};

export default Crr;
