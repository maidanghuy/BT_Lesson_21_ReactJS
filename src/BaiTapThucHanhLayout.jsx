import { Header } from "./Header.jsx";
import { Banner } from "./Banner.jsx";
import { CardGrid } from "./CardGrid.jsx";
import { Footer } from "./Footer.jsx";

export default function BaiTapThucHanhLayout() {
  return (
    <>
      <Header />
      <Banner />
      <CardGrid />
      <Footer text="Your Website 2023" />
    </>
  );
}
