import { Link } from "react-router-dom";
import styles from "./style.module.css";
import app_download_bg from "../../assets/images/app-download-bg.png";
import ios_qr from "../../assets/images/ios-qr.png";
import android_qr from "../../assets/images/android-qr.png";
import app_store from "../../assets/images/app-store.png";
import google_play from "../../assets/images/google-play.png";
import btn_download_bg from "../../assets/images/btn-download-bg.png";
import { getLinkByKey } from "../../utils/functions";
import { LINK_KEYS } from "../../utils/config";

export default function AppDownloadComponent({ links }) {
  return (
    <div className="position-relative">
      <img className={`w-100`} src={app_download_bg} alt="app_download_bg" />
      <div className={`position-absolute bottom-0 start-0 w-100 d-flex align-items-end justify-content-center ${styles.appDownloadContainer}`}>
        <div className="col-6 d-flex align-items-center justify-content-center pe-md-3 pe-2">
          <div className="col-6 text-start">
            <img className="col-10" src={ios_qr} alt="ios_qr" />
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <Link to={getLinkByKey(links, LINK_KEYS.APP_IOS_BTN)} className="d-block position-relative">
              <img className="w-100" src={btn_download_bg} alt="btn_download_bg" />
              <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-white ${styles.appDownloadBtn}`}>
                TẢI XUỐNG
              </div>
            </Link>
            <Link to={getLinkByKey(links, LINK_KEYS.APP_IOS_LINK)} className="d-block position-relative mt-md-2 mt-1">
              <img className="w-100" src={app_store} alt="app_store" />
            </Link>
          </div>
        </div>
        <div className="col-6 d-flex align-items-center justify-content-center ps-md-3 ps-2">
          <div className="col-6 text-start">
            <img className="col-10" src={android_qr} alt="ios_qr" />
          </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <Link to={getLinkByKey(links, LINK_KEYS.APP_ANDROID_BTN)} className="d-block position-relative">
              <img className="w-100" src={btn_download_bg} alt="btn_download_bg" />
              <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-white ${styles.appDownloadBtn}`}>
                TẢI XUỐNG
              </div>
            </Link>
            <Link to={getLinkByKey(links, LINK_KEYS.APP_ANDROID_LINK)} className="d-block position-relative mt-md-2 mt-1">
              <img className="w-100" src={google_play} alt="google_play" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}