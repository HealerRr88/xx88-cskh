import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './style.module.css';
import { isMobile } from 'react-device-detect';
import { getLinkByKey } from '../../utils/functions';
import { LINK_KEYS } from '../../utils/config';
import home_btn from '../../assets/images/home-btn.png';

export default function HeaderComponent({ links }) {
  return (
    <div className={`w-100 bg-white sticky-top z-3 ${styles.headerContainer}`}>
      <div className="d-flex justify-content-between align-items-center">
        <div className={`col-md-1 col-4`}>
          <Link
            to={
              getLinkByKey(links, LINK_KEYS.TRANG_CHU, isMobile)
            }
          >
            <img className={`w-100 ${styles.logo}`} src={logo} alt="XX88 Logo" />
          </Link>
        </div>
        <div className={`col-md-1 col-3 d-flex justify-content-end`}>
          <Link
            to={
              getLinkByKey(links, LINK_KEYS.TRANG_CHU, isMobile)
            }
          >
            <img className={`w-100 ${styles.homeBtn}`} src={home_btn} alt="home_btn" />
          </Link>
        </div>
      </div>
    </div>

  );
}