import React, { Fragment, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, joinConference } from '../../actions/feeds-categories';
import { clickCategory } from "../../actions/toggling";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
// import '../../assets/css/owl-carousel.min.css';
// import '../../assets/css/owl.theme.css';
// import '../../assets/css/owl-carousel.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { ICON_DICT_OF_CATEGORY } from "../../actions/types";
// import '../../assets/css/categories.css';
// import '../../assets/js/owl.carousel.min.js';

// install Swiper modules
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function CategoriesSlider({
    // getCategories,
    conversation,
    clickCategory,
    toggling,
}) {
    // const myRef = useRef();
    // useEffect(() => {
    //     getCategories();
    //     // refs.categorySlider.goTo(1);

    //     // myRef.to(1);
    //     // myRef.addEvent
    //     // console.log(conversation.categories)
    //     console.log(toggling.subCategoryStates);
    // }, [getCategories]);

    const onActiveItems = (e) => {

        console.log(e.target.id);
        clickCategory(e.target.id);
        e.preventDefault();
    }
    return (
        <>
            {console.log(toggling.subCategoryStates['Business'])}
            {
                conversation.categories !== null ?
                    <div className="col-xl-12 widget-29">
                        <div className="widget no-bg">
                            <div className="widget-body pt-0">
                                {/* <div className="widget29"> */}
                                <OwlCarousel dots={false} autoPlay={true}
                                    className='widget29 owl-theme'
                                    items={5} margin={5} nav={true}
                                // navText={[
                                //     "<i class='fa fa-caret-left'></i>",
                                //     "<i class='fa fa-caret-right'></i>"
                                // ]}
                                >
                                    {conversation.categories.map((cat, i) => (
                                        // <SwiperSlide key={i}>{cat.category}</SwiperSlide>
                                        <div id={cat.category} onClick={onActiveItems} key={i} >
                                            <div
                                                className="item">
                                                <div id={cat.category}
                                                    className={toggling.subCategoryStates[cat.category] ?
                                                        "devices-item d-flex justify-content-center align-items-center backgroud-active-category"
                                                        : "devices-item d-flex justify-content-center align-items-center"}
                                                // className="devices-item d-flex justify-content-center align-items-center"
                                                >
                                                    <i id={cat.category} className={ICON_DICT_OF_CATEGORY[cat.category]}></i>
                                                    <div className="room" id={cat.category}
                                                    >{cat.category}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </OwlCarousel>
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}

CategoriesSlider.propTypes = {
    toggling: PropTypes.object.isRequired,
    conversation: PropTypes.object.isRequired,
    clickCategory: PropTypes.func.isRequired,
    // changeView: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
    conversation: state.conversation,
});
export default connect(mapStateToProps, { clickCategory })(
    CategoriesSlider
);