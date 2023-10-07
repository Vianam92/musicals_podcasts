import PropTypes from "prop-types";
import CardComponent from "../../common/card";
import { Detail, DetailData } from "../../model/detail.vm";

const DetailComponent = ({ podcast }: Detail) => {
  return (
    <>
      <CardComponent podcast={podcast} />
    </>
  );
};

DetailComponent.propTypes = {
  podcast: PropTypes.array,
};

export default DetailComponent;
