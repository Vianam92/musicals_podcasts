import { useContext } from "react";
import LoaderHeader from "../common/loader/loader";
import {UseContextGeneral} from "../core/useContext/useContext";
import { HeaderStyled, Title } from "../styled/styled.component";

const Header = () => {
  const { isloader } = useContext(UseContextGeneral);

    return (
      <HeaderStyled>
        <a href="/"><Title>Podcaster</Title></a>
        {isloader ? <LoaderHeader /> : ""}
      </HeaderStyled>
    );
}

export default Header;