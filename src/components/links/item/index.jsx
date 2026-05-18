import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { randomInterger } from "../../../utils/functions";
import link_bg from "../../../assets/images/link-bg.png";
import { Link } from "react-router-dom";

export default function LinkItemComponent({ link, index }) {
  const [speed, setSpeed] = useState(randomInterger(50, 99));

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(randomInterger(50, 99));
    }, randomInterger(2000, 5000));

    return () => clearInterval(interval);

  }, [index]);

  return (
    <div className={`position-relative`}>
      <img className={`w-100`} src={link_bg} alt="link_bg" />
      <Link to={link.url} className={`w-100 h-100 position-absolute top-0 start-0 d-flex justify-content-between`}>
        <div className={`col-7 d-flex justify-content-center ${styles.linkIndex}`}>LINK 0{index + 1}</div>
        <div className={`col-5 d-flex justify-content-center align-items-center ${styles.linkSpeed}`}>{speed}ms</div>
      </Link>
    </div>
  )
}