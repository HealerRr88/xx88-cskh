import { Link } from 'react-router-dom';
import logo from '../../assets/images/xx88-logo.gif';
import phoneIcon from '../../assets/images/phone-icon.png';
import emailIcon from '../../assets/images/email-icon.png';
import styles from './style.module.css';
import { BACK_HOME_URL } from '../../utils/config';

export default function HeaderComponent() {
  return (
    <>
      <div className='bg-white'>
        <div className="container d-flex justify-content-between align-items-center">
          <div className='col-md-3 col-5'>
            <Link to={BACK_HOME_URL}>
              <img className={`w-100 ${styles.logo}`} src={logo} alt="XX88 Logo" />
            </Link>
          </div>
          <Link to={BACK_HOME_URL} className={`d-flex align-items-center justify-content-center ${styles.homeBtn}`}>TRANG CHỦ</Link>
        </div>
      </div>

      <div className={`mt-3 ${styles.title}`}>TRUNG TÂM DỊCH VỤ KHÁCH HÀNG</div>

      <div className={`w-100 d-flex align-items-center justify-content-center mt-3`}>
        <div className={`d-flex align-items-center justify-content-center px-md-5 px-3 py-md-3 py-1 gap-4 ${styles.phoneAndEmail}`}>
          <div className='d-flex align-items-center gap-1'>
            <img src={phoneIcon} className={styles.icon} alt="Phone Icon" />
            <span>+84 567880999</span>
          </div>
          <div className='d-flex align-items-center gap-1'>
            <img src={emailIcon} className={styles.icon} alt="Email Icon" />
            <span>admin@xx88.com</span>
          </div>
        </div>
      </div>

    </>
  );
}