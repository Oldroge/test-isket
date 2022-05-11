/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';
import myContext from '../Components/MyContext';

export default function getApi({ children }) {
  const [dataMaps, setDataMaps] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_GET)
      .then((res) => {
        setDataMaps(res.data);
      });
  }, []);
  /* Estava com problema de re-render em estados que não precisavam
  ser renderizados novamente, resolvido com a referência a seguir: */

  // https://blog.agney.dev/useMemo-inside-context/
  const values = useMemo(() => ({
    dataMaps,
    setDataMaps,
  }), [dataMaps]);

  if (!dataMaps) return null;
  return (
    <myContext.Provider value={values}>
      { children }
    </myContext.Provider>
  );
}
