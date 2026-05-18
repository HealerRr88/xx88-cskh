import HeaderComponent from "../../../components/header";
import { createRef, Fragment, useRef } from "react";
import Draggable from "react-draggable";
import { buildFileUrl } from "../../../utils/functions";
import styles from "./style.module.css";
import LinksComponent from "../../../components/links";
import AppDownloadComponent from "../../../components/app_download";
import title_img from "../../../assets/images/title-mb.png";
import phone_bg from "../../../assets/images/phone-bg.png";
import email_bg from "../../../assets/images/email-bg.png";
import { isMobile } from "react-device-detect";
import phone_icon from "../../../assets/images/phone-icon.svg";
import email_icon from "../../../assets/images/email-icon.svg";
import { getLinkByKey } from "../../../utils/functions";
import { Link } from "react-router-dom";
import main_box_bg from "../../../assets/images/main-box-bg-mb.png";
import { LINK_KEYS, R2_BUCKET_URL } from "../../../utils/config";
import person_img_mb from "../../../assets/images/person-mb.png";

import nap_tien from "../../../assets/images/nap-tien.png";
import rut_tien from "../../../assets/images/rut-tien.png";
import khuyen_mai from "../../../assets/images/khuyen-mai.png";
import tai_khoan from "../../../assets/images/tai-khoan.png";
import khieu_nai from "../../../assets/images/khieu-nai.png";
import hotline from "../../../assets/images/hotline.png";
import dai_ly from "../../../assets/images/dai-ly.png";
import code_game from "../../../assets/images/code-game.png";
import qua_tang from "../../../assets/images/qua-tang.png";
import huong_dan from "../../../assets/images/huong-dan.png";
import kenh_su_kien from "../../../assets/images/kenh-su-kien.png";
import facebook from "../../../assets/images/facebook.png";
import livestream from "../../../assets/images/livestream.png";
import thuong_hieu from "../../../assets/images/thuong-hieu.png";
import thien_nguyen from "../../../assets/images/thien-nguyen.png";

export default function MBPage({ links, gifs }) {

  const gifsRef = useRef([]);

  const getGifRef = (index) => {
    if (!gifsRef.current[index]) {
      gifsRef.current[index] = createRef();
    }

    return gifsRef.current[index];
  };

  return (
    <>
      <HeaderComponent links={links} />

      <div className={`container mt-3`}>
        <div>
          <img className={`w-100`} src={person_img_mb} alt="person_img_mb" />
        </div>
        <div className={`col-11 mt-3`}>
          <img className={`w-100 ${styles.titleImg}`} src={title_img} alt="title" />
        </div>
        <div className={`col-12 d-flex align-items-center mt-3`}>
          <Link to={`tel:${getLinkByKey(links, LINK_KEYS.PHONE, isMobile)}`} className={`d-block col-6 pe-1 position-relative`}>
            <img className={`w-100`} src={phone_bg} alt="phone_bg" />
            <div className={`w-100 h-100 position-absolute top-0 start-0 d-flex align-items-center justify-content-center ${styles.phoneNumber}`}>
              <img src={phone_icon} alt="phone_icon" />
              <div className={`ms-1`}>
                {
                  getLinkByKey(links, LINK_KEYS.PHONE, isMobile)
                }
              </div>
            </div>
          </Link>
          <Link to={`mailto:${getLinkByKey(links, LINK_KEYS.EMAIL, isMobile)}`} className={`col-6 ps-1 position-relative`}>
            <img className={`w-100`} src={email_bg} alt="email_bg" />
            <div className={`w-100 h-100 position-absolute top-0 start-0 d-flex align-items-center justify-content-center ${styles.email}`}>
              <img src={email_icon} alt="email_icon" />
              <div className={`ms-2`}>
                {
                  getLinkByKey(links, LINK_KEYS.EMAIL, isMobile)
                }
              </div>
            </div>
          </Link>
        </div>

        <div className={`w-100 position-relative mt-3`}>
          <img className={`w-100`} src={main_box_bg} alt="main_box_bg" />
          <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-start pt-2`}>
            <div className="d-flex flex-wrap px-2">
              <div className={`col-4 p-1`}>
                <Link to={getLinkByKey(links, LINK_KEYS.NAP_TIEN, isMobile)}>
                  <img className={`w-100`} src={nap_tien} alt="nap_tien" />
                </Link>
              </div>
              <div className={`col-4 p-1`}>
                <Link to={getLinkByKey(links, LINK_KEYS.RUT_TIEN, isMobile)}>
                  <img className={`w-100`} src={rut_tien} alt="rut_tien" />
                </Link>
              </div>
              <div className={`col-4 p-1`}>
                <Link to={getLinkByKey(links, LINK_KEYS.KHUYEN_MAI, isMobile)}>
                  <img className={`w-100`} src={khuyen_mai} alt="khuyen_mai" />
                </Link>
              </div>
              <div className={`col-4 p-1`}>
                <Link to={getLinkByKey(links, LINK_KEYS.TAI_KHOAN, isMobile)}>
                  <img className={`w-100`} src={tai_khoan} alt="tai_khoan" />
                </Link>
              </div>
              <div className={`col-4 p-1`}>
                <Link to={getLinkByKey(links, LINK_KEYS.KHIEU_NAI, isMobile)}>
                  <img className={`w-100`} src={khieu_nai} alt="khieu_nai" />
                </Link>
              </div>
            </div>
            <div className={`d-flex align-items-center justify-content-center px-4 mt-1`}>
              <div className={`flex-fill ${styles.fastlyAccessTitleDecor}`}></div>
              <div className={`px-3 ${styles.fastlyAccessTitle}`}>TRUY CẬP NHANH</div>
              <div className={`flex-fill ${styles.fastlyAccessTitleDecor}`}></div>
            </div>
            <div className="d-flex flex-wrap px-2 mt-1">
              <div className="col-3 text-center">
                <Link to={getLinkByKey(links, LINK_KEYS.HOTLINE, isMobile)}>
                  <img className="col-10" src={hotline} alt="hotline" />
                </Link>
              </div>
              <div className="col-3 text-center">
                <Link to={getLinkByKey(links, LINK_KEYS.DAI_LY, isMobile)}>
                  <img className="col-10" src={dai_ly} alt="dai_ly" />
                </Link>
              </div>
              <div className="col-3 text-center">
                <Link to={getLinkByKey(links, LINK_KEYS.CODE_GAME, isMobile)}>
                  <img className="col-10" src={code_game} alt="code_game" />
                </Link>
              </div>
              <div className="col-3 text-center">
                <Link to={getLinkByKey(links, LINK_KEYS.QUA_TANG, isMobile)}>
                  <img className="col-10" src={qua_tang} alt="qua_tang" />
                </Link>
              </div>
              <div className="col-3 text-center mt-2">
                <Link to={getLinkByKey(links, LINK_KEYS.HUONG_DAN, isMobile)}>
                  <img className="col-10" src={huong_dan} alt="huong_dan" />
                </Link>
              </div>
              <div className="col-3 text-center mt-2">
                <Link to={getLinkByKey(links, LINK_KEYS.KENH_SU_KIEN, isMobile)}>
                  <img className="col-10" src={kenh_su_kien} alt="kenh_su_kien" />
                </Link>
              </div>
              <div className="col-3 text-center mt-2">
                <Link to={getLinkByKey(links, LINK_KEYS.FACEBOOK, isMobile)}>
                  <img className="col-10" src={facebook} alt="facebook" />
                </Link>
              </div>
              <div className="col-3 text-center mt-2">
                <Link to={getLinkByKey(links, LINK_KEYS.LIVESTREAM, isMobile)}>
                  <img className="col-10" src={livestream} alt="livestream" />
                </Link>
              </div>
              <div className="col-3 text-center mt-2">
                <Link to={getLinkByKey(links, LINK_KEYS.THUONG_HIEU, isMobile)}>
                  <img className="col-10" src={thuong_hieu} alt="thuong_hieu" />
                </Link>
              </div>
              <div className="col-3 text-center mt-2">
                <Link to={getLinkByKey(links, LINK_KEYS.THIEN_NGUYEN, isMobile)}>
                  <img className="col-10" src={thien_nguyen} alt="thien_nguyen" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-3`}>
          <LinksComponent links={links} />
        </div>

        <div className={`mt-3 pb-5`}>
          <AppDownloadComponent links={links} />
        </div>
      </div>

      {
        gifs.length > 0 && gifs.map((item, index) => {
          const gifRef = getGifRef(index);

          return (
            <Fragment key={index}>
              {
                item.file && (
                  <Draggable
                    axis="both"
                    defaultPosition={{ x: 0, y: 0 }}
                    allowMobileScroll={true}
                    nodeRef={gifRef}
                  >

                    <div
                      ref={gifRef}
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
                          src={buildFileUrl(R2_BUCKET_URL, item.file?.path)}
                          alt={item.title}
                          onDragStart={(event) => event.preventDefault()}
                        />
                      </a>
                      <div
                        className={`position-absolute top-0 start-100 translate-middle cursor-pointer ${styles.closeButton}`}
                        onClick={() => {
                          if (gifRef.current) {
                            gifRef.current.style.display = 'none';
                          }
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
          )
        })
      }
    </>
  );
}