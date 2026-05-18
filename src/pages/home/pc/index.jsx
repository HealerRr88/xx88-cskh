import HeaderComponent from "../../../components/header";
import { buildFileUrl, getLinkByKey } from "../../../utils/functions";
import { createRef, Fragment, useRef } from "react";
import Draggable from "react-draggable";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import LinksComponent from "../../../components/links";
import title_img from "../../../assets/images/title.png";
import phone_bg from "../../../assets/images/phone-bg.png";
import email_bg from "../../../assets/images/email-bg.png";
import { isMobile } from "react-device-detect";
import phone_icon from "../../../assets/images/phone-icon.svg";
import email_icon from "../../../assets/images/email-icon.svg";
import main_box_bg from "../../../assets/images/main-box-bg.png";
import AppDownloadComponent from "../../../components/app_download";
import { LINK_KEYS, R2_BUCKET_URL } from "../../../utils/config";
import person_img from "../../../assets/images/person.png";

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

export default function PCPage({ links, gifs }) {

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
      <div className={`${styles.pcContainer}`}>
        <div className={`position-relative`}>
          <div className="w-100 position-absolute top-0 start-0">
            <div className={`col-md-3 col-11`}>
              <img className={`w-100 ${styles.titleImg}`} src={title_img} alt="title" />
            </div>
            <div className={`col-md-3 col-12 d-flex align-items-center mt-md-4 mt-3`}>
              <Link to={`tel:${getLinkByKey(links, LINK_KEYS.PHONE, isMobile)}`} className={`d-block col-6 pe-md-0 pe-2 position-relative`}>
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
              <Link to={`mailto:${getLinkByKey(links, LINK_KEYS.EMAIL, isMobile)}`} className={`col-6 ps-md-0 ps-2 position-relative`}>
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
          </div>


          <div className={`d-flex flex-wrap justify-content-center align-items-end mt-md-4 mt-3`}>
            <div className={`col-md-7 col-12 position-relative ${styles.mainBox}`}>
              <div className={`col-5 position-absolute z-3 ${styles.personImgContainer}`}>
                <img className={`w-100`} src={person_img} alt="person_img" />
              </div>
              <div className={`w-100 position-relative`}>
                <img className={`w-100`} src={main_box_bg} alt="main_box_bg" />
                <div className={`w-100 h-100 position-absolute top-0 top-0 ${styles.mainBoxContent}`}>

                  <div className={`d-flex flex-wrap align-items-center justify-content-center px-3`}>
                    <Link to={getLinkByKey(links, LINK_KEYS.NAP_TIEN, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={nap_tien} alt="nap_tien" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.RUT_TIEN, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={rut_tien} alt="rut_tien" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.KHUYEN_MAI, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={khuyen_mai} alt="khuyen_mai" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.TAI_KHOAN, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={tai_khoan} alt="tai_khoan" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.KHIEU_NAI, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={khieu_nai} alt="khieu_nai" />
                    </Link>
                  </div>

                  <div className={`d-flex align-items-center justify-content-center px-4 ${styles.fastlyAccessTitleContainer}`}>
                    <div className={`flex-fill ${styles.fastlyAccessTitleDecor}`}></div>
                    <div className={`px-3 ${styles.fastlyAccessTitle}`}>TRUY CẬP NHANH</div>
                    <div className={`flex-fill ${styles.fastlyAccessTitleDecor}`}></div>
                  </div>

                  <div className={`d-flex flex-wrap align-items-center justify-content-center px-3 mt-3`}>
                    <Link to={getLinkByKey(links, LINK_KEYS.HOTLINE, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={hotline} alt="hotline" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.DAI_LY, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={dai_ly} alt="dai_ly" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.CODE_GAME, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={code_game} alt="code_game" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.QUA_TANG, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={qua_tang} alt="qua_tang" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.HUONG_DAN, isMobile)} className={`d-block px-2 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={huong_dan} alt="huong_dan" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.KENH_SU_KIEN, isMobile)} className={`d-block px-2 mt-4 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={kenh_su_kien} alt="kenh_su_kien" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.FACEBOOK, isMobile)} className={`d-block px-2 mt-4 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={facebook} alt="facebook" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.LIVESTREAM, isMobile)} className={`d-block px-2 mt-4 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={livestream} alt="livestream" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.THUONG_HIEU, isMobile)} className={`d-block px-2 mt-4 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={thuong_hieu} alt="thuong_hieu" />
                    </Link>
                    <Link to={getLinkByKey(links, LINK_KEYS.THIEN_NGUYEN, isMobile)} className={`d-block px-2 mt-4 ${styles.mainBoxItem}`}>
                      <img className="w-100" src={thien_nguyen} alt="thien_nguyen" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`col-md-5 col-12 mt-md-4 mt-3 ${styles.appDownload}`}>
              <AppDownloadComponent links={links} />
            </div>
          </div>
        </div>
        <LinksComponent links={links} />
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
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onDragStart={(event) => event.preventDefault()}
                      >
                        <img
                          className={`object-fit-cover`}
                          style={{ width: item.width ? `${item.width}${item.widthUnit}` : 200, height: item.height ? `${item.height}${item.heightUnit}` : 'auto' }}
                          src={buildFileUrl(R2_BUCKET_URL, item.file?.path)}
                          alt={item.title}
                          onDragStart={(event) => event.preventDefault()}
                        />
                      </Link>
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
  )
}