import MBPage from "./mb";
import PCPage from "./pc";
import { isMobile } from "react-device-detect";

export default function HomePage() {

  //Comment to trigger rebuild 16h01 01/12/2025
  const PageComponent = isMobile ? MBPage : PCPage;

  return (
    <div className="app">
      <PageComponent />
    </div>
  )
}