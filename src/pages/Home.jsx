import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa'
import { FiArrowDown, FiArrowUpRight, FiDownload, FiPhone } from 'react-icons/fi'
import Main from '../components/section/Main'
import profileImg from '../assets/img/youtube/프로필사진.jpg'
import oronaminImg from '../assets/img/webd/오로나민.jpg'
import lapsinImg from '../assets/img/webd/랩신.jpg'
import jadamImg from '../assets/img/webd/자담치킨.jpg'
import lotteryImg from '../assets/img/webd/동행복권.jpg'
import cassImg from '../assets/img/webd/카스제로.jpg'
import lgImg from '../assets/img/webd/LG홍콩.jpg'
import kmongImg from '../assets/img/webd/크몽00.jpg'
import honmaImg from '../assets/img/webd/혼마골프.jpg'
import { restoreReturnPosition, saveReturnPosition } from '../utils/returnPosition'

const instagramUrl = 'https://www.instagram.com/jhooooooooooooooo'

const careerData = [
  { year: '2026', items: ['LG전자 · 동행복권', '자담치킨 · 오로나민C 외'] },
  { year: '2025', items: ['우루오스 · 코카콜라 · 크몽', '카스 0.0 · 유니세프 외'] },
  { year: '2024', items: ['현대자동차 · 혼마골프 · 카스', 'LG U+ · 코웨이 비렉스 외'] },
]

const featuredWorks = [
  { title: '오로나민C', description: '브랜드 광고 캠페인', role: '광고 출연', img: oronaminImg, videoId: 'UATk4efH7Fk' },
  { title: '랩신', description: '브랜드 영상 콘텐츠', role: '광고 출연', img: lapsinImg, videoId: 'OLQ85vb5Ubw' },
  { title: '자담치킨', description: '브랜드 광고 캠페인', role: '광고 출연', img: jadamImg, videoId: 'FNUg2JZdxGA' },
  { title: '동행복권', description: '브랜드 영상 콘텐츠', role: '광고 출연', img: lotteryImg, videoId: '9N6WoIoCoRc' },
  { title: '카스제로', description: '제품 광고 캠페인', role: '광고 출연', img: cassImg, videoId: 'KzNbi_hz7lY' },
  { title: 'LG Hong Kong', description: '글로벌 브랜드 콘텐츠', role: '광고 출연', img: lgImg, videoId: 'yKWhvm9O8pU' },
  { title: '크몽', description: '브랜드 광고 캠페인', role: '광고 출연', img: kmongImg, videoId: 'JcTHLyPrG_U' },
  { title: '혼마골프', description: '브랜드 영상 콘텐츠', role: '광고 출연', img: honmaImg, videoId: 'uTuUZ74vtG0' },
]

const documents = [
  { type: 'PDF', title: '송재호 프로필', description: 'PDF 형식으로 다운로드', href: '/files/2026 송재호 프로필.pdf' },
  { type: 'PPTX', title: '송재호 프로필', description: 'PPTX 형식으로 다운로드', href: '/files/2026 송재호 프로필.pptx' },
]

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      restoreReturnPosition('/')
    }, 150)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Main title="송재호 포트폴리오" description="배우 송재호의 포트폴리오입니다.">
      <div className={`portfolio-home fadeInEffect ${isLoaded ? 'isLoaded' : ''}`}>
        <section className="portfolio-hero" aria-labelledby="intro-title">
          <div className="portfolio-hero__text">
            <span className="portfolio-eyebrow" lang="en">ACTOR · COMMERCIAL MODEL</span>
            <div className="portfolio-hero__identity">
              <h2 id="intro-title">송재호</h2>
              <time dateTime="1995-06-18">1995.06.18</time>
            </div>
            <p className="portfolio-hero__description">
              광고와 브랜드 콘텐츠를 중심으로 다양한 현장에서 활동하고 있습니다.
            </p>
            <div className="portfolio-actions">
              <a href="#about" className="portfolio-button portfolio-button--scroll">
                프로필 상세보기 <FiArrowDown aria-hidden="true" />
              </a>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="portfolio-button">
                <FaInstagram aria-hidden="true" /> Instagram
              </a>
            </div>
          </div>
          <div className="portfolio-hero__image">
            <img src={profileImg} alt="배우 송재호 프로필" fetchPriority="high" />
          </div>
        </section>

        <section id="about" className="portfolio-section" aria-labelledby="about-title">
          <div className="portfolio-section__heading">
            <h2 id="about-title">소개 및 주요 경력</h2>
          </div>
          <div className="profile-summary">
            <div className="career-timeline">
              {careerData.map(({ year, items }) => (
                <article className="career-card" key={year}>
                  <time>{year}</time>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
              <Link to="/crr" className="portfolio-text-link">전체 경력 보기 <FiArrowUpRight aria-hidden="true" /></Link>
            </div>
          </div>
        </section>

        <section id="works" className="portfolio-section" aria-labelledby="works-title">
          <div className="portfolio-section__heading portfolio-section__heading--split">
            <div><h2 id="works-title">대표 작품</h2></div>
            <Link to="/webd">전체 작품 보기 <FiArrowUpRight aria-hidden="true" /></Link>
          </div>
          <div className="works-grid">
            {featuredWorks.map((work) => (
              <article className="work-card" key={work.videoId}>
                <Link to={`/video/${work.videoId}`} onClick={saveReturnPosition} className="work-card__image" aria-label={`${work.title} 영상 보기`}>
                  <img src={work.img} alt="" loading="lazy" decoding="async" />
                </Link>
                <div className="work-card__body">
                  <span>{work.role}</span>
                  <h3 lang={work.title === 'LG Hong Kong' ? 'en' : undefined}>{work.title}</h3>
                  <p>{work.description}</p>
                  <Link to={`/video/${work.videoId}`} onClick={saveReturnPosition}>프로젝트 보기 <FiArrowUpRight aria-hidden="true" /></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="documents" className="portfolio-section" aria-labelledby="documents-title">
          <div className="portfolio-section__heading">
            <h2 id="documents-title">자료 다운로드</h2>
          </div>
          <div className="document-grid">
            {documents.map((document) => (
              <a href={document.href} download className="document-card" key={document.type}>
                <span className="document-card__type">{document.type}</span>
                <div><h3>{document.title}</h3><p>{document.description}</p></div>
                <FiDownload aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="portfolio-contact" aria-labelledby="contact-title">
          <div className="portfolio-contact__content">
              <span className="portfolio-eyebrow">협업 문의</span>
              <h2 id="contact-title">좋은 프로젝트를 함께 만들어가고 싶습니다.</h2>
              <p>광고, 방송, 콘텐츠 출연 및 협업은 편한 방법으로 연락해 주세요.</p>
              <div className="portfolio-actions">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="portfolio-button portfolio-button--light">
                  <FaInstagram aria-hidden="true" /> Instagram
                </a>
                <a href="tel:01073583599" className="portfolio-button portfolio-button--light">
                  <FiPhone aria-hidden="true" /> 010-7358-3599
                </a>
              </div>
          </div>
        </section>
      </div>
    </Main>
  )
}

export default Home
