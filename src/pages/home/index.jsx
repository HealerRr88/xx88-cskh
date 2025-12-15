import MBPage from "./mb";
import PCPage from "./pc";
import { isMobile } from "react-device-detect";

export default function HomePage() {

  const PageComponent = isMobile ? MBPage : PCPage;

  return (
    <div className="app">
      <PageComponent />
    </div>
  )
}