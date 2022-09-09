import React, { useCallback, useEffect, useState } from 'react';
import { ContextWebInfo, IContextWebInfo, ContextWebInfoProps } from './contexts/context-web-info';
import { Helper, Constant } from './helpers';
import MyRoutes from './routes/my-routes';

function App(): JSX.Element {
  const { THEME_HAPPYTHEME } = Constant;
  const [data, setData] = useState<IContextWebInfo>(ContextWebInfoProps);
  const [theme, setTheme] = useState(THEME_HAPPYTHEME);

  const getTheme = useCallback(async () => {
    // load theme from local storage
    const theme = localStorage.getItem('theme') ?? data.theme;
    setTheme(theme);
  }, [data]);

  const getData = async () => {
    try {
      // load json from data directory
      const response = await fetch('./data/site.json');
      let text = await response.text();
      let data: IContextWebInfo = Helper.Deserialize(text);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getTheme();
  }, [getTheme]);

  return (
    <ContextWebInfo.Provider value={{
      webInfo: data.webInfo,
      theme: theme,
      setTheme: setTheme,
    }}>
      <MyRoutes />
    </ContextWebInfo.Provider>
  );
}

export default App;
