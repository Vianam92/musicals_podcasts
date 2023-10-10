import React from "react";
import "./episodes.layout.css";
interface Props {
  children: React.ReactNode;
}
const SectionEpisodesLayout = ({ children }: Props) => {
  return <section className="layout-flex">{children}</section>;
};

export default SectionEpisodesLayout;
