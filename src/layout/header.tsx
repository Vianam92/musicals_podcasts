import { useContext } from "react";
import LoaderHeader from "../common/loader/loader";
import { HeaderStyled , Title} from "../common/styled/styled.component";
import UseContextLoader from "../core/useContext/useLoader";

const Header = () => {
  const { isloader } = useContext(UseContextLoader);

    return (
      <HeaderStyled>
        <a href="/"><Title>Podcaster</Title></a>
        {isloader ? <LoaderHeader /> : ""}
      </HeaderStyled>
    );
}

export default Header;