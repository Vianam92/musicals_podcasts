import React from "react";
import { LayoutGrid } from "../common/styled/styled.component";
interface Props {
  children: React.ReactNode;
}
const SectionLayout = ({ children }: Props) => {
  return <LayoutGrid>{children}</LayoutGrid>;
};

export default SectionLayout;
