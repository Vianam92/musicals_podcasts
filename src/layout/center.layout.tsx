import React from "react";
import "./center.css";
interface Props {
  children: React.ReactNode;
}
const SectionLayout = ({ children }: Props) => {
  return <section className="layout-grid">{children}</section>;
};

export default SectionLayout;
