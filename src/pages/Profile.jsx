import React, { useEffect, useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import Main from '../components/section/Main'
import profileImg from '../assets/img/youtube/프로필사진.jpg'

// 사진 파일을 import한 뒤 아래 배열에 항목만 추가하면 갤러리에 자동 표시됩니다.
const profilePhotos = [
  { id: 1, src: profileImg, alt: '배우 송재호 프로필 사진 1' },
]

const Profile = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(profilePhotos[0])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Main title="프로필사진" description="배우 송재호의 프로필 사진입니다.">
      <section className="profile-photo-page" aria-labelledby="profile-photo-title">
        <header className="profile-photo-heading">
          <span lang="en">ACTOR PROFILE</span>
          <h2 id="profile-photo-title">프로필사진</h2>
        </header>

        <div className="profile-photo-layout">
          <figure className="profile-photo-frame">
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} fetchPriority="high" />
          </figure>

          <aside className="profile-photo-info" aria-label="배우 프로필 정보">
            <div>
              <span className="profile-photo-info__label">ACTOR</span>
              <h3>송재호</h3>
              <time dateTime="1995-06-18">1995.06.18</time>
            </div>

            <dl>
              <div><dt>HEIGHT</dt><dd>180 cm</dd></div>
              <div><dt>WEIGHT</dt><dd>70 kg</dd></div>
              <div><dt>TOP</dt><dd>100–105</dd></div>
              <div><dt>PANTS</dt><dd>28–30</dd></div>
              <div><dt>SHOES</dt><dd>280 mm</dd></div>
            </dl>

            <a href={selectedPhoto.src} download={`송재호 프로필사진-${selectedPhoto.id}.jpg`} className="profile-photo-download">
              원본 사진 다운로드 <FiDownload aria-hidden="true" />
            </a>
          </aside>
        </div>

        <div className="profile-photo-gallery" aria-label="프로필 사진 목록">
          <div className="profile-photo-gallery__heading">
            <h3>전체 사진</h3>
            <span>{String(profilePhotos.length).padStart(2, '0')}</span>
          </div>
          <div className="profile-photo-grid">
            {profilePhotos.map((photo, index) => (
              <button
                type="button"
                className={selectedPhoto.id === photo.id ? 'is-selected' : ''}
                onClick={() => setSelectedPhoto(photo)}
                aria-label={`${index + 1}번째 프로필 사진 보기`}
                aria-pressed={selectedPhoto.id === photo.id}
                key={photo.id}
              >
                <img src={photo.src} alt="" loading="lazy" />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </Main>
  )
}

export default Profile
