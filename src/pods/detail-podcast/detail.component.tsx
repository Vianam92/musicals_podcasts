import PropTypes from "prop-types";
import CardComponent from "../../common/card";
import { Detail } from "../../model/detail.vm";

const DetailComponent = ({ podcast }: Detail) => {
  return (
    <>
      <CardComponent podcast={podcast} />
    </>
  );
};

DetailComponent.propTypes = {
  podcast: PropTypes.object,
};

export default DetailComponent;
