import PropTypes from "prop-types";
import CardComponent from "../../common/card";
import CardEpisodesComponent from "../../common/card.episodes";
import SectionLayout from "../../layout/center.layout";
import { Detail } from "../../model/detail.vm";

const DetailComponent = ({ detail}: Detail) => {

  return (
    <>
      <SectionLayout>
        <CardComponent detail={detail}/>
        <CardEpisodesComponent detail={detail}/>
      </SectionLayout>
    </>
  );
};

DetailComponent.propTypes = {
  detail: PropTypes.array,

};

export default DetailComponent;
