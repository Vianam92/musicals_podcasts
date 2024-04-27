import React, { useContext } from "react";
import { LayoutFlex } from "../common/styled/styled.component";
import UseContextLoader from "../core/useContext/useLoader";
interface Props {
  children: React.ReactNode;
}
const SectionEpisodesLayout = ({ children }: Props) => {
  const { isloader } = useContext(UseContextLoader);
  return <LayoutFlex>{isloader ? "": children}</LayoutFlex>;
};

export default SectionEpisodesLayout;
