import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Mousewheel, Pagination, Navigation } from "swiper/modules";
import CardComponent from "@components/Cards/CardComponent";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const SwiperComponent = ({ data, isSmallScreen }) => {
  const dispatch = useDispatch();

  function selectEvent(event) {
    dispatch({ type: "event/selectEvent", payload: event });
  }

  return (
    <Swiper
      modules={[Virtual, Mousewheel, Pagination, Navigation]}
      mousewheel
      navigation={isSmallScreen ? true : false}
      pagination={true}
      slidesPerView={isSmallScreen ? 1 : 3}
      direction={!isSmallScreen ? "vertical" : "horizontal"}
      style={{
        display: "flex",
        width: "100%",
        maxHeight: isSmallScreen ? "50vh" : "90vh",
        padding: "2em 0",
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <CardComponent
            variant={"event-card"}
            item={item}
            itemImg={item.image}
            handleSelect={selectEvent}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

SwiperComponent.propTypes = {
  data: PropTypes.array,
  isSmallScreen: PropTypes.bool,
};

export default SwiperComponent;
