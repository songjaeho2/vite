import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/section/Main';  



const Home = lazy(() => import('./pages/Home'));
const Webd = lazy(() => import('./pages/Webd'));
const Mv = lazy(() => import('./pages/Mv'));
const Video = lazy(() => import('./pages/Video'));
const Crr = lazy(() => import('./pages/Crr'));
const Acting = lazy(() => import('./pages/Acting'));
const Not = lazy(() => import('./pages/Not'));
const Today = lazy(() => import('./pages/Today'));





const App = () => {
    return (
<BrowserRouter>

  <Suspense fallback={<Main />}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/today' element={<Today />} />
      <Route path='/webd' element={<Webd />} />
      <Route path='/mv' element={<Mv />} />
      <Route path='/video/:videoId' element={<Video />} />
      <Route path='/crr' element={<Crr />} />
      <Route path='/acting' element={<Acting />} />
      <Route path='*' element={<Not />} />
    </Routes>
  </Suspense>
</BrowserRouter>
    );
}

export default App;