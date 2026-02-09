import title_left_img from "../../assets/images/title-left-img.png";
import title_right_img from "../../assets/images/title-right-img.png";
import styles from "./style.module.css";
import LinkItemComponent from "./item";
import { isMobile } from "react-device-detect";
import { LINKS } from "../../utils/config";

export default function LinksComponent({ links }) {

  return (
    <div className="container mt-md-5 mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <div className="flex-fill">
          <img className="w-100" src={title_left_img} alt="title_left_img" />
        </div>
        <div className={`col-md-6 col-8 text-center py-2 ${styles.title}`}>CÁC ĐƯỜNG TRUYỀN TỐC ĐỘ CAO</div>
        <div className="flex-fill">
          <img className="w-100" src={title_right_img} alt="title_right_img" />
        </div>
      </div>
      <div className={`d-flex flex-wrap mt-md-4 mt-3 ${isMobile ? 'gap-2' : 'gap-3'}`}>
        {
          links && links.length > 0 ? (
            isMobile ? (
              links.filter(x => x.device === 2).map((link, index) => (
                <LinkItemComponent
                  key={index}
                  index={index + 1}
                  mbUrl={link.url}
                  pcUrl={link.url}
                  url={link.url}
                />
              ))
            ) : (
              links.filter(x => x.device === 1).map((link, index) => (
                <LinkItemComponent
                  key={index}
                  index={index + 1}
                  mbUrl={link.url}
                  pcUrl={link.url}
                  url={link.url}
                />
              ))
            )
          ) : ( // Không có links truyền vào, sử dụng LINKS mặc định
            LINKS.map((link, index) => (
              <LinkItemComponent
                key={index}
                index={index + 1}
                mbUrl={link.mb}
                pcUrl={link.pc}
                url={link.default}
              />
            ))
          )
        }
      </div>
    </div>
  );
}