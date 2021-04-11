import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, joinConference } from '../../actions/feeds-categories';
import '../../assets/css/categories.css'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function CategoriesSlider({
    getCategories,
    conversation,
}) {
    useEffect(() => {
        getCategories();
        console.log(conversation.categories)
    }, [getCategories]);

    return (
        <>
            {
                conversation.categories !== null ?
                    <Swiper navigation speed={500} slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 7,
                                spaceBetween: 10,
                            },
                            1300: {
                                slidesPerView: 9,
                                spaceBetween: 10,
                            },
                        }}>
                        {conversation.categories.map((cat, i) => (
                            <SwiperSlide key={i}>{cat.category}</SwiperSlide>
                        ))}
                    </Swiper> : null
            }
        </>

    )
}

CategoriesSlider.propTypes = {
    // toggling: PropTypes.object.isRequired,
    conversation: PropTypes.object.isRequired,
    // changeView: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    // toggling: state.toggling,
    conversation: state.conversation,
});
export default connect(mapStateToProps, { getCategories })(
    CategoriesSlider
);