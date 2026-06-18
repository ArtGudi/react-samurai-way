//import { Header } from "../src/components/Header.tsx";
//import { SidebarMenu } from "../src/components/SidebarMenu.tsx";
//import { PageTitle } from "./components/PageTitle.tsx";
import { TrackList } from "./ui/TrackList.tsx";
import { TrackDetail } from "./ui/TrackDetail.tsx";
//import { Footer } from "../src/components/Footer.tsx";
import { useTrackSelection } from "./bll/useTrackSelection.tsx";

export function MainPage() {
  const { trackId, setTrackId } = useTrackSelection();

  const handleTrackSelect = (id: string | null): void => {
    setTrackId(id);
  };

  return (
    <>
      {/* <Header />
      <SidebarMenu />
      <PageTitle /> */}
      <div style={{ display: "flex" }}>
        <TrackList
          selectedTrackId={trackId}
          onTrackSelected={handleTrackSelect}
        />
        <TrackDetail trackId={trackId} />
      </div>
      {/* <Footer /> */}
    </>
  );
}
