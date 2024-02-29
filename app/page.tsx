import BestRooms from "@/components/BestRooms";
import Clients from "@/components/Clients";
import ContentBottom from "@/components/ContentBottom";
import MainSlider from "@/components/MainSlider";
import Popular from "@/components/Popular";
import Stats from "@/components/Stats";
import "./page.css";

export default function Home() {
  return (
    <>
      <MainSlider />
      <Popular />
      <Stats />
      <BestRooms />
      <ContentBottom />
      {/* <Clients /> */}
    </>
  );
}
