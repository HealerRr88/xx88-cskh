import HeaderComponent from "../../../components/header";
import nap_tien_icon from "../../../assets/images/nap-tien-icon.png";
import rut_tien_icon from "../../../assets/images/rut-tien-icon.png";
import khuyen_mai_icon from "../../../assets/images/khuyen-mai-icon.png";
import tai_khoan_icon from "../../../assets/images/tai-khoan-icon.png";
import khieu_nai_icon from "../../../assets/images/khieu-nai-icon.png";
import telegram_icon from "../../../assets/images/telegram-icon.png";
import grid_menu_center_item from "../../../assets/images/grid-menu-center-item.png";

// Bar Menu Icons
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

import { Link } from "react-router-dom";
import styles from "./style.module.css";
import LinksComponent from "../../../components/links";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';

import prevIcon from '../../../assets/images/prev-icon.png';
import nextIcon from '../../../assets/images/next-icon.png';
import AppDownloadComponent from "../../../components/app_download";
import { CODE_FREE_URL, DAILY_URL, FACEBOOK_URL, HOTLINE_NUMBER, HUONG_DAN_URL, KENH_SU_KIEN_URL, KHIEU_NAI_URL, KHUYEN_MAI_URL, LINK_KEYS, LIVESTREAM_URL, NAP_TIEN_URL, QUA_TANG_URL, ROOT_API_URL, RUT_TIEN_URL, TAI_KHOAN_URL, TELEGRAM_URL, THIEN_NGUYEN_URL, THUONG_HIEU_URL } from "../../../utils/config";
import { Fragment, useRef } from "react";
import Draggable from "react-draggable";
import { buildFileUrl } from "../../../utils/functions";

export default function MBPage({ links, gifs }) {

  const dragRef = useRef(null);

  return (
    <>
      <div className="pb-5">
        <HeaderComponent
          links={links}
        />

        <div className="container d-flex flex-wrap gap-2 justify-content-center align-items-center mt-3">
          <Link to={links.find(x => x.key === LINK_KEYS.NAP_TIEN)?.url || NAP_TIEN_URL} className={`flex-fill d-flex flex-column justify-content-center align-items-center gap-1 px-3 py-2 ${styles.gridMenuItem}`}>
            <img className={styles.gridMenuItemIcon} src={nap_tien_icon} alt="Nạp tiền" />
            <span>NẠP TIỀN</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.RUT_TIEN)?.url || RUT_TIEN_URL} className={`flex-fill d-flex flex-column justify-content-center align-items-center gap-1 px-3 py-2 ${styles.gridMenuItem}`}>
            <img className={styles.gridMenuItemIcon} src={rut_tien_icon} alt="Rút tiền" />
            <span>RÚT TIỀN</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.KHUYEN_MAI)?.url || KHUYEN_MAI_URL} className={`flex-fill d-flex flex-column justify-content-center align-items-center gap-1 px-3 py-2 ${styles.gridMenuItem}`}>
            <img className={styles.gridMenuItemIcon} src={khuyen_mai_icon} alt="Khuyến mãi" />
            <span>KHUYẾN MÃI</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.TAI_KHOAN)?.url || TAI_KHOAN_URL} className={`flex-fill d-flex flex-column justify-content-center align-items-center gap-1 px-3 py-2 ${styles.gridMenuItem}`}>
            <img className={styles.gridMenuItemIcon} src={tai_khoan_icon} alt="Tài khoản" />
            <span>TÀI KHOẢN</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.KHIEU_NAI)?.url || KHIEU_NAI_URL} className={`flex-fill d-flex flex-column justify-content-center align-items-center gap-1 px-3 py-2 ${styles.gridMenuItem}`}>
            <img className={styles.gridMenuItemIcon} src={khieu_nai_icon} alt="Khiếu nại" />
            <span>KHIẾU NẠI</span>
          </Link>
          <Link to={links.find(x => x.key === LINK_KEYS.TELEGRAM)?.url || TELEGRAM_URL} className={`flex-fill d-flex flex-column justify-content-center align-items-center gap-1 px-3 py-2 ${styles.gridMenuItem}`}>
            <img className={styles.gridMenuItemIcon} src={telegram_icon} alt="Telegram" />
            <span>TELEGRAM</span>
          </Link>
        </div>
        <div className="container mt-3">
          <div className={`pt-2 pb-0 px-4 position-relative ${styles.swiperContainer}`}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              spaceBetween={0}
              slidesPerView={5}
              loop={true}
              pagination={{ clickable: true, dynamicBullets: true }}
              clickable="true"
              onSlideChange={() => { }}
              onSwiper={(swiper) => { }}
            >
              <SwiperSlide>
                <Link to={`tel:${links.find(x => x.key === LINK_KEYS.HOTLINE)?.url || HOTLINE_NUMBER}`} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={hotline_icon} alt="Hotline" />
                  <span>Hotline</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.DAI_LY)?.url || DAILY_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={dai_ly_icon} alt="Đại lý" />
                  <span>Đại lý</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.CODE_FREE)?.url || CODE_FREE_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={code_free_icon} alt="Code Free" />
                  <span>Code Free</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.FACEBOOK)?.url || FACEBOOK_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={facebook_icon} alt="Facebook" />
                  <span>Facebook</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.QUA_TANG)?.url || QUA_TANG_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={qua_tang_icon} alt="Quà tặng" />
                  <span>Quà tặng</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.HUONG_DAN)?.url || HUONG_DAN_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={huong_dan_icon} alt="Hướng dẫn" />
                  <span>Hướng dẫn</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.KENH_SU_KIEN)?.url || KENH_SU_KIEN_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={kenh_su_kien_icon} alt="Kênh sự kiện" />
                  <span>Kênh sự kiện</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.LIVESTREAM)?.url || LIVESTREAM_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={livestream_icon} alt="Livestream" />
                  <span>Livestream</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.THUONG_HIEU)?.url || THUONG_HIEU_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={thuong_hieu_icon} alt="Thương Hiệu" />
                  <span>Thương Hiệu</span>
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link to={links.find(x => x.key === LINK_KEYS.THIEN_NGUYEN)?.url || THIEN_NGUYEN_URL} className="d-flex flex-column justify-content-center align-items-center gap-1">
                  <img className={styles.barMenuIcon} src={thien_nguyen_icon} alt="Thiện Nguyện" />
                  <span>Thiện Nguyện</span>
                </Link>
              </SwiperSlide>
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button className="custom-swiper-button-prev" style={{
              position: 'absolute', top: '50%', left: '0px', transform: 'translateY(-50%)', zIndex: 10, background: 'none', border: 'none'
            }}>
              <img src={prevIcon} alt="Prev" style={{ width: 20, height: 20 }} />
            </button>
            <button className="custom-swiper-button-next" style={{
              position: 'absolute', top: '50%', right: '0px', transform: 'translateY(-50%)', zIndex: 10, background: 'none', border: 'none'
            }}>
              <img src={nextIcon} alt="Next" style={{ width: 20, height: 20 }} />
            </button>
          </div>
        </div>


        <LinksComponent
          links={
            links.filter(x => x.key.startsWith(LINK_KEYS.PRE_FIX))
          }
        />

        <div className="container mt-3">
          <img className="w-100" src={grid_menu_center_item} alt="grid_menu_center_item" />
        </div>

        <AppDownloadComponent
          links={links}
        />
      </div>

      {
        gifs.length > 0 && gifs.map((item, index) => (
          <Fragment key={index}>
            {
              item.file && (
                <Draggable
                  axis="both"
                  defaultPosition={{ x: 0, y: 0 }}
                  allowMobileScroll={true}
                  nodeRef={dragRef}
                >

                  <div
                    ref={dragRef}
                    style={{
                      position: 'fixed',
                      right: `${item.xPosition}${item.xPositionUnit}`,
                      bottom: `${item.yPosition}${item.yPositionUnit}`,
                      zIndex: 9999,
                    }}
                  >
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onDragStart={(event) => event.preventDefault()}
                    >
                      <img
                        className={`object-fit-cover`}
                        style={{ width: item.width ? `${item.width}${item.widthUnit}` : 100, height: item.height ? `${item.height}${item.heightUnit}` : 'auto' }}
                        src={buildFileUrl(ROOT_API_URL, item.file?.path)}
                        alt={item.title}
                        onDragStart={(event) => event.preventDefault()}
                      />
                    </a>
                    <div
                      className={`position-absolute top-0 start-100 translate-middle cursor-pointer ${styles.closeButton}`}
                      onClick={() => {
                        dragRef.current.style.display = 'none';
                      }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"></path>
                      </svg>
                    </div>
                  </div>
                </Draggable>

              )
            }
          </Fragment>
        ))
      }
    </>
  );
}