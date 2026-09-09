import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import Header from './Header'
import Footer from './Footer'

const Main = ( props ) => {
    const location = useLocation()
    const navigate = useNavigate()

    const goBack = () => {
        if (window.history.state?.idx > 0) {
            navigate(-1)
            return
        }
        navigate('/')
    }

    return (
        <>
            <Header />
            <main id="main" role="main" className={location.pathname !== '/' ? 'has-page-back' : undefined}>
                {location.pathname !== '/' && (
                    <div className="page-navigation">
                        <button type="button" className="page-back" onClick={goBack}>
                            <FiArrowLeft aria-hidden="true" />
                            <span>이전 페이지</span>
                        </button>
                        {props.pageAction}
                    </div>
                )}
                {props.children}
            </main>
            <Footer />
        </>
    )
}

export default Main
