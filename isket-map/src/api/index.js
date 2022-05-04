import axios from 'axios';
import { useEffect, useState } from 'react';

export default function getApi() {
  const [render, setRender] = useState(null);
  console.log(render);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_GET).then((res) => {
      setRender(res.data);
    });
  }, []);
}
