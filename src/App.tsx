import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import Page from "./components/Page";
import "./index.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

const App = (): JSX.Element => {
  return (
    <Page>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <Analytics />
    </Page>
  );
};

export default App;
