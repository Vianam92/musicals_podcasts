import React from "react";
import { LayoutGrid } from "../styled/styled.component";
interface Props {
  children: React.ReactNode;
}
const SectionLayout = ({ children }: Props) => {
  return <LayoutGrid>{children}</LayoutGrid>;
};

export default SectionLayout;
