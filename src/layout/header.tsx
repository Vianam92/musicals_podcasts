import { useContext } from "react";
import LoaderHeader from "../common-app/loader";
import {LoaderContext} from "../core/useContext/useLoader";

const Header = () => {
  const { isloader } = useContext(LoaderContext);

    return (
      <header>
        <a href="/"><h1>Podcaster</h1></a>
        {isloader ? <LoaderHeader /> : ""}
      </header>
    );
}

export default Header;