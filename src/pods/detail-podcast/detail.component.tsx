import PropTypes from "prop-types";
import CardComponent from "../../common/card";
import CardEpisodesComponent from "../../common/card.episodes";
import SectionLayout from "../../layout/center.layout";

const DetailComponent = ({ detail }: any) => {

  return (
    <>
      <SectionLayout>
        <CardComponent detail={detail} />
        <CardEpisodesComponent />
      </SectionLayout>
    </>
  );
};

DetailComponent.propTypes = {
  detail: PropTypes.array,
};

export default DetailComponent;
