import MainFooter from "@components/footer/MainFooter";
import Navigation from "@components/navigation/Navigation";
import SideBar from "@components/navigation/SideBar";
import HomePage from "@pages/HomePage";
import NoMachPage from "@pages/NoMachPage";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/_styles/index.scss";
import Column from "./components/layout/Column";
import Row from "./components/layout/Row";
import ServicesPreview from "./components/home-page/ServicesPreview";

const App = () => {
  return (
    <Fragment>
      <Row>
        <Column size={1}>
          <SideBar />
        </Column>
        <Column size={11}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NoMachPage />} />
          </Routes>
          <MainFooter />
        </Column>
      </Row>
    </Fragment>
  );
};

export default App;
