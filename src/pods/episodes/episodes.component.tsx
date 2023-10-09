import CardComponent from "../../common/card";
import PropTypes from "prop-types";
import SectionLayout from "../../layout/center.layout";

const EpisodesComponent = ({ detail }: any) => {
  return (
    <>
      <SectionLayout>
        <CardComponent detail={detail}></CardComponent>
      </SectionLayout>
    </>
  );
};

EpisodesComponent.propTypes = {
  detail: PropTypes.array,
};

export default EpisodesComponent;
