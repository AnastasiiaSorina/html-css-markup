import MainFooter from "@components/footer/MainFooter";
import Navigation from "@components/navigation/Navigation";
import SideBar from "@components/navigation/SideBar";
import HomePage from "@pages/HomePage";
import NoMachPage from "@pages/NoMachPage";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/_styles/index.scss";

const App = () => {
  return (
    <Fragment>
          <SideBar />
          <section className="wrap">
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NoMachPage />} />
            </Routes>
          </section>   
          <MainFooter />
    </Fragment>
  );
};

export default App;
