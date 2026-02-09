import HeaderComponent from "../../../components/header";
import nap_tien_icon from "../../../assets/images/nap-tien-icon.png";
import rut_tien_icon from "../../../assets/images/rut-tien-icon.png";
import khuyen_mai_icon from "../../../assets/images/khuyen-mai-icon.png";
import tai_khoan_icon from "../../../assets/images/tai-khoan-icon.png";
import khieu_nai_icon from "../../../assets/images/khieu-nai-icon.png";
import telegram_icon from "../../../assets/images/telegram-icon.png";

// Bar Menu Images
import hotline_icon from "../../../assets/images/hotline-icon.png";
import dai_ly_icon from "../../../assets/images/dai-ly-icon.png";
import code_free_icon from "../../../assets/images/code-free-icon.png";
import facebook_icon from "../../../assets/images/facebook-icon.png";
import qua_tang_icon from "../../../assets/images/qua-tang-icon.png";
import huong_dan_icon from "../../../assets/images/huong-dan-icon.png";
import kenh_su_kien_icon from "../../../assets/images/kenh-su-kien-icon.png";
import livestream_icon from "../../../assets/images/livestream-icon.png";
import thuong_hieu_icon from "../../../assets/images/thuong-hieu-icon.png";
import thien_nguyen_icon from "../../../assets/images/thien-nguyen-icon.png";

import grid_menu_center_item from "../../../assets/images/grid-menu-center-item.png";
import homeStyles from "../style.module.css";
import pcStyles from "./style.module.css";
import { Link } from "react-router-dom";
import AppDownloadComponent from "../../../components/app_download";
import LinksComponent from "../../../components/links";
import { CODE_FREE_URL, DAILY_URL, FACEBOOK_URL, HOTLINE_NUMBER, HUONG_DAN_URL, KENH_SU_KIEN_URL, KHIEU_NAI_URL, KHUYEN_MAI_URL, LINK_KEYS, LIVESTREAM_URL, NAP_TIEN_URL, QUA_TANG_URL, RUT_TIEN_URL, TAI_KHOAN_URL, TELEGRAM_URL, THIEN_NGUYEN_URL, THUONG_HIEU_URL } from "../../../utils/config";

export default function PCPage({ links }) {
  return (
    <div className="pb-5">
      <HeaderComponent
        links={links}
      />

      {/* Grid Menu */}
      <div className="container d-flex justify-content-center align-items-center mt-3">
        <div className="flex-fill d-flex flex-column justify-content-center align-items-end gap-4">
          <Link to={links.find(x => x.key === LINK_KEYS.NAP_TIEN)?.url || NAP_TIEN_URL} className={`d-flex justify-content-center align-items-center gap-2 ${homeStyles.gridMenuItem}`}>
            <img src={nap_tien_icon} alt="Nạp tiền" />
            <span>NẠP TIỀN</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.RUT_TIEN)?.url || RUT_TIEN_URL} className={`d-flex justify-content-center align-items-center gap-2 ${homeStyles.gridMenuItem}`}>
            <img src={rut_tien_icon} alt="Rút tiền" />
            <span>RÚT TIỀN</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.KHUYEN_MAI)?.url || KHUYEN_MAI_URL} className={`d-flex justify-content-center align-items-center gap-2 ${homeStyles.gridMenuItem}`}>
            <img src={khuyen_mai_icon} alt="Khuyến mãi" />
            <span>KHUYẾN MÃI</span>
          </Link>
        </div>

        <div className="col-6">
          <img className="w-100" src={grid_menu_center_item} alt="Menu Center" />
        </div>

        <div className="flex-fill d-flex flex-column justify-content-center align-items-start gap-4">
          <Link to={links.find(x => x.key === LINK_KEYS.TAI_KHOAN)?.url || TAI_KHOAN_URL} className={`d-flex justify-content-center align-items-center gap-2 ${homeStyles.gridMenuItem}`}>
            <img src={tai_khoan_icon} alt="Tài khoản" />
            <span>TÀI KHOẢN</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.KHIEU_NAI)?.url || KHIEU_NAI_URL} className={`d-flex justify-content-center align-items-center gap-2 ${homeStyles.gridMenuItem}`}>
            <img src={khieu_nai_icon} alt="Khiếu nại" />
            <span>KHIẾU NẠI</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.TELEGRAM)?.url || TELEGRAM_URL} className={`d-flex justify-content-center align-items-center gap-2 ${homeStyles.gridMenuItem}`}>
            <img src={telegram_icon} alt="Telegram" />
            <span>TELEGRAM</span>
          </Link>
        </div>
      </div>

      <AppDownloadComponent
        links={links}
      />

      <div className="text-center">
        <div className={`d-inline-flex gap-5 mt-4 ${pcStyles.barMenu}`}>
          <Link to={`tel:${links.find(x => x.key === LINK_KEYS.HOTLINE)?.url || HOTLINE_NUMBER}`} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={hotline_icon} alt="Hotline" />
            <span>Hotline</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.DAI_LY)?.url || DAILY_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={dai_ly_icon} alt="Đại lý" />
            <span>Đại lý</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.CODE_FREE)?.url || CODE_FREE_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={code_free_icon} alt="Code Free" />
            <span>Code Free</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.FACEBOOK)?.url || FACEBOOK_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={facebook_icon} alt="Facebook" />
            <span>Facebook</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.QUA_TANG)?.url || QUA_TANG_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={qua_tang_icon} alt="Quà tặng" />
            <span>Quà tặng</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.HUONG_DAN)?.url || HUONG_DAN_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={huong_dan_icon} alt="Hướng dẫn" />
            <span>Hướng dẫn</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.KENH_SU_KIEN)?.url || KENH_SU_KIEN_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={kenh_su_kien_icon} alt="Kênh sự kiện" />
            <span>Kênh sự kiện</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.LIVESTREAM)?.url || LIVESTREAM_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={livestream_icon} alt="Livestream" />
            <span>Livestream</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.THUONG_HIEU)?.url || THUONG_HIEU_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={thuong_hieu_icon} alt="Thương Hiệu" />
            <span>Thương Hiệu</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.THIEN_NGUYEN)?.url || THIEN_NGUYEN_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
            <img className={pcStyles.barMenuIcon} src={thien_nguyen_icon} alt="Thiện Nguyện" />
            <span>Thiện Nguyện</span>
          </Link>
        </div>
      </div>

      <LinksComponent
        links={
          links.filter(x => x.key.startsWith(LINK_KEYS.PRE_FIX))
        }
      />
    </div>
  )
}