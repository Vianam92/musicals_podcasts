import CardComponent from "../../common/card";
import PropTypes from "prop-types";
import SectionLayout from "../../layout/center.layout";
import AudioComponent from "../../common/audio";

const EpisodesComponent = ({ detail }: any) => {
  return (
    <>
      <SectionLayout>
        <CardComponent detail={detail}></CardComponent>
        <AudioComponent></AudioComponent>
      </SectionLayout>
    </>
  );
};

EpisodesComponent.propTypes = {
  detail: PropTypes.array,
};

export default EpisodesComponent;
