import bg_link_btn from "../../../assets/images/bg-link-btn.png";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import { isMobile, isDesktop, isTablet } from "react-device-detect";

const getRandomSpeed = () => {
  return Math.floor(Math.random() * 49) + 50; // Random speed between 50 and 99 ms
}

export default function LinkItemComponent({ index, mbUrl, pcUrl, url }) {
  const [speed, setSpeed] = useState(getRandomSpeed());

  useEffect(() => {
    const interval = setInterval(() => {
      setSpeed(getRandomSpeed());
    }, 1000 * index);

    return () => clearInterval(interval);

  }, [index]);

  const handleClick = () => {
    if (isMobile || isTablet) {
      window.open(mbUrl, '_blank');
    }
    else if (isDesktop) {
      window.open(pcUrl, '_blank');
    }
    else {
      window.open(url, '_blank');
    }
  }

  return (
    <div className={`flex-fill d-flex justify-content-center align-items-center cursor-pointer gap-3 position-relative ${styles.link}`} onClick={handleClick}>
      <img className="w-100" src={bg_link_btn} alt="bg_link_btn" />
      <div className={styles.leftLink}>
        <div className={styles.linkName}>LINK 0{index}</div>
        <div className={styles.linkCTA}>Vào ngay</div>
      </div>
      <div className={styles.linkSpeed}>{speed} ms</div>
    </div>
  )
}