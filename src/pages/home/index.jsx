import { useQuery } from "react-query";
import MBPage from "./mb";
import PCPage from "./pc";
import { isMobile } from "react-device-detect";
import LinkService from "../../services/link";
import PageLoading from "../../components/loading/page";

export default function HomePage() {
  const LINKS_KEY = 'links';
  const linkService = new LinkService();

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
    <div className="app">
      {
        isMobile ?
          <MBPage
            links={linksData.data?.filter(item => item.device === 2 || item.device === 0) || []}
          /> :
          <PCPage
            links={linksData.data?.filter(item => item.device === 1 || item.device === 0) || []}
          />
      }
    </div>
  )
}