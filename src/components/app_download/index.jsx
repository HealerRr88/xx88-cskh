import ios_qr from "../../assets/images/ios-qr.png";
import android_qr from "../../assets/images/android-qr.png";
import appstore_btn from "../../assets/images/appstore-btn.png";
import googleplay_btn from "../../assets/images/googleplay-btn.png";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { ANDROID_APP_URL, IOS_APP_URL } from "../../utils/config";

export default function AppDownloadComponent() {
  return (
    <div className="container d-flex justify-content-center mt-md-4 mt-3">
      <div className="col-md-6 col-12 d-flex">
        <div className="col-6 pe-2 d-flex">
          <div className="col-5">
            <img className="w-100" src={ios_qr} alt="ios_qr" />
          </div>
          <div className="ms-md-3 ms-2 flex-fill d-flex flex-column align-items-center justify-content-center">
            <Link to={IOS_APP_URL} className={`w-100 d-flex justify-content-center align-items-center ${styles.downloadBtn}`}>TẢI XUỐNG</Link>
            <div className="mt-md-3 mt-1">
              <Link to={IOS_APP_URL}>
                <img className="w-100" src={appstore_btn} alt="App Store Button" />
              </Link>
            </div>
          </div>
        </div>
        <div className="ms-md-4 ms-1 col-6 ps-2 d-flex">
          <div className="col-5">
            <img className="w-100" src={android_qr} alt="android_qr" />
          </div>
          <div className="ms-md-3 ms-2 flex-fill d-flex flex-column align-items-center justify-content-center">
            <Link to={ANDROID_APP_URL} className={`w-100 d-flex justify-content-center align-items-center ${styles.downloadBtn}`}>TẢI XUỐNG</Link>
            <div className="mt-md-3 mt-1">
              <Link to={ANDROID_APP_URL}>
                <img className="w-100" src={googleplay_btn} alt="Google Play" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}