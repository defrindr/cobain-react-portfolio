import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { ContextWebInfo } from './contexts/context-web-info';

import {
  Beranda,
  TentangSaya,
  Portofolio,
  Kontak
} from './pages';

function App(): JSX.Element {
  const [webInfo, setWebInfo] = useState(null);

  const getWebInfo = async () => {
    try {
      // load json from data directory
      const response = await fetch('./data/site.json');
      const data = await response.json();
      setWebInfo(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getWebInfo();
  }, []);

  return (
    <ContextWebInfo.Provider value={{webInfo}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/tentang-saya" element={<TentangSaya />} />
          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
      </BrowserRouter>
    </ContextWebInfo.Provider>
  );
}

export default App;
