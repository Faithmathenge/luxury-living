import Navigation1 from "./Navigation1"
import Navigation2 from "./Navigation2"
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";



function CrazyRoute() {
  const [countDown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((c) => c - 1);
    }, 1000);

return () => {
  clearInterval(interval);
}
}, []);

useEffect(() => {
  if (countDown <= 0) {
    navigate(-1);
  }
}, [countDown]);
   

  return (
    <div>
      < Navigation1 />
      < Navigation2 />
      <p>Redirecting in {countDown} seconds...</p>
      <h1>Welcome to the Crazy Route</h1>
    </div>
  );
}

export default CrazyRoute;

