import { useQuery } from "react-query";
import MBPage from "./mb";
import PCPage from "./pc";
import { isMobile } from "react-device-detect";
import LinkService from "../../services/link";
import PageLoading from "../../components/loading/page";
import megalive_icon from "../../assets/images/megalive-icon.gif";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { useRef } from "react";

export default function HomePage() {
  const LINKS_KEY = 'links';
  const linkService = new LinkService();
  const megaliveIconRef = useRef(null);

  const linksData = useQuery(
    [LINKS_KEY],
    () => linkService.getAll(),
    {
      retry: false,
    }
  );

  if (linksData.isLoading) {
    return <PageLoading />
  }

  return (
    <>
      {
        isMobile ?
          <MBPage
            links={linksData.data?.filter(item => item.device === 2 || item.device === 0) || []
            }
          /> :
          <PCPage
            links={linksData.data?.filter(item => item.device === 1 || item.device === 0) || []}
          />
      }

      <div className="position-fixed bottom-0 end-0 z-3 me-md-5 me-4 mb-md-5 mb-4" ref={megaliveIconRef}>
        <Link to={`https://xx88mega.com/`}>
          <img className={`${styles.megaliveImg}`} src={megalive_icon} alt="Megalive" />
        </Link>
        <div className={`position-absolute top-0 start-100 translate-middle cursor-pointer ${styles.megaliveCloseIcon}`}
          onClick={() => {
            if (megaliveIconRef.current) {
              megaliveIconRef.current.style.display = 'none';
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </div>
      </div>
    </>
  )
}