import React from "react";
import { LayoutFlex } from "../common/styled/styled.component";
interface Props {
  children: React.ReactNode;
}
const SectionEpisodesLayout = ({ children }: Props) => {
  return <LayoutFlex>{children}</LayoutFlex>;
};

export default SectionEpisodesLayout;
