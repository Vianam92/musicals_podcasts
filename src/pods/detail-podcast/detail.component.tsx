import PropTypes from "prop-types";
import CardComponent from "../../common/card";

const DetailComponent = ({ podcast }: any) => {
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
