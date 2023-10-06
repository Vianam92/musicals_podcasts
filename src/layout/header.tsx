import { useContext } from "react";
import LoaderHeader from "../common-app/loader";
import {LoaderContext} from "../core/useContext/useLoader";
import { HeaderStyled, Title } from "../styled/styled.component";

const Header = () => {
  const { isloader } = useContext(LoaderContext);

    return (
      <HeaderStyled>
        <a href="/"><Title>Podcaster</Title></a>
        {isloader ? <LoaderHeader /> : ""}
      </HeaderStyled>
    );
}

export default Header;