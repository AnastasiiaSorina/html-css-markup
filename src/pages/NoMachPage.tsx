import Container from "@components/layout/Container";
import SearchIcon from "@public/assets/search-icon.svg";
import TriangleGroup from "@public/assets/triangle-group.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NoMachPage = () => {
  const navigate = useNavigate();
  const handleScrollToHomePage = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <Container className="no-mach-page">
      <div className="triangle-group-wrap">
        <img src={TriangleGroup} className="triangle-group-icon"/>
        <h1>404</h1>
      </div>
      
      <h3>
      Page not found
      </h3>
      <p>It looks like nothing was found at this location.<br />Maybe try a search?</p>
      <form>
          <input placeholder="Search"></input>
          <button>
            <img src={SearchIcon} />
          </button>
        </form>
    </Container>
  );
};

export default NoMachPage;
