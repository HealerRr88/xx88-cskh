import styles from "./style.module.css";
import LinkItemComponent from "./item";
import links_bg from "../../assets/images/links-bg.png";
import links_bg_mb from "../../assets/images/links-bg-mb.png";
import { LINK_PREFIX } from "../../utils/config";
import { isMobile } from "react-device-detect";

export default function LinksComponent({ links }) {

  const linkItems = links.filter(item => item.key.startsWith(LINK_PREFIX));

  return (
    <div className={`position-relative`}>
      <img className={`w-100`} src={isMobile ? links_bg_mb : links_bg} alt="links_bg" />
      <div className={`position-absolute top-0 start-0 w-100 h-100 d-flex flex-wrap align-items-center justify-content-center ${styles.linksContainer}`}>
        {
          linkItems.map((link, index) => (
            <div key={index} className={`col-md-2 col-4 px-md-2 px-1`}>
              <LinkItemComponent
                link={link}
                index={index}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
}