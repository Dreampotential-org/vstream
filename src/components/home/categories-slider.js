import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, joinConference } from '../../actions/feeds-categories';


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
                    <div className="col-xl-12 widget-29">
                        <div className="widget no-bg">
                            <div className="widget-body pt-0">
                                {/* <div className="widget29"> */}
                                <OwlCarousel dots={false} autoPlay={true} className='widget29 owl-theme'
                                    items={5} margin={5} nav
                                    navText={[
                                        "<i class='fa fa-caret-left'></i>",
                                        "<i class='fa fa-caret-right'></i>"
                                      ]}>
                                    {conversation.categories.map((cat, i) => (
                                        // <SwiperSlide key={i}>{cat.category}</SwiperSlide>
                                        <div className='item'>
                                            <div className="devices-item d-flex justify-content-center align-items-center">
                                                <i className={ICON_DICT_OF_CATEGORY[cat.category]}></i>
                                                <div className="room">{cat.category}</div>
                                            </div>
                                        </div>
                                    ))}
                                
                                </OwlCarousel>
                            </div>
                        </div>
                    </div> : null
            }
        </>
        // </div>
        // <>
        //     {
        //         conversation.categories !== null ?
        //             <Swiper navigation speed={500} slidesPerView={1}
        //                 spaceBetween={10}
        //                 breakpoints={{
        //                     // when window width is >= 640px
        //                     640: {
        //                         slidesPerView: 2,
        //                         spaceBetween: 10,
        //                     },
        //                     768: {
        //                         slidesPerView: 5,
        //                         spaceBetween: 10,
        //                     },
        //                     1024: {
        //                         slidesPerView: 7,
        //                         spaceBetween: 10,
        //                     },
        //                     1300: {
        //                         slidesPerView: 9,
        //                         spaceBetween: 10,
        //                     },
        //                 }}>
        //                 {conversation.categories.map((cat, i) => (
        //                     <SwiperSlide key={i}>{cat.category}</SwiperSlide>
        //                 ))}
        //             </Swiper> : null
        //     }
        // </>
        // <div classNameName="row">
        // <div className="col-xl-12 widget-29">
        //     <div className="widget no-bg">
        //         <div className="widget-body pt-0">
        //             <div className="widget29 owl-carousel owl-loaded owl-drag">
        //                 <div className="owl-stage-outer">
        //                     <div className="owl-stage" style={{
        //                         transform: "translate3d(-927px, 0px, 0px)",
        //                         transition: "all 0s ease 0s",
        //                         width: "2914px"
        //                     }}>
        // <div className="owl-item cloned">
        //     <div class="item" data-toggle="modal" data-target="#living-room">
        // <div class="devices-item d-flex justify-content-center align-items-center">
        //     <i class="la la-tv"></i>
        //     <div class="room">Living Room</div>
        // </div>
        //         {/* <img class="img-fluid" src="assets/img/smarthome/03.jpg" alt="..." /> */}
        //     </div>
        // </div>
        //                         <div className="owl-item cloned">
        //                             <div class="item" data-toggle="modal" data-target="#living-room">
        //                                 <div class="devices-item d-flex justify-content-center align-items-center">
        //                                     <i class="la la-tv"></i>
        //                                     <div class="room">Living Room</div>
        //                                 </div>
        //                                 <img class="img-fluid" src="assets/img/smarthome/03.jpg" alt="..." />
        //                             </div>
        //                         </div>
        //                         <div className="owl-item cloned">
        //                             <div class="item" data-toggle="modal" data-target="#living-room">
        //                                 <div class="devices-item d-flex justify-content-center align-items-center">
        //                                     <i class="la la-tv"></i>
        //                                     <div class="room">Living Room</div>
        //                                 </div>
        //                                 <img class="img-fluid" src="assets/img/smarthome/03.jpg" alt="..." />
        //                             </div>
        //                         </div>
        //                     </div>
        // <div className="owl-nav">
        //     <button type="button" className="owl-prev">
        //         <i className="ion-chevron-left" aria-hidden="true"></i>
        //     </button>
        //     <button type="button" className="owl-next">
        //         <i className="ion-chevron-right" aria-hidden="true"></i>
        //     </button>
        // </div>
        //                     <div className="owl-dots disabled"></div>
        //                 </div>
        // {/* <div className="owl-item" data-target="#living-room">
        //     <div className="devices-item d-flex justify-content-center align-items-center">
        //         <i className="la la-tv"></i>
        //         <div className="room">Living Room</div>
        //     </div>
        //     <img className="img-fluid" src="assets/img/smarthome/03.jpg" alt="..." />
        // </div>
        // <div className="owl-item" data-target="#kitchen">
        //     <div className="devices-item d-flex justify-content-center align-items-center">
        //         <i className="la la-cutlery"></i>
        //         <div className="room">Kitchen</div>
        //     </div>
        //     <img className="img-fluid" src="assets/img/smarthome/04.jpg" alt="..." />
        // </div> */}



        //             </div>
        //         </div>
        //     </div>
        // </div>
        // </div>

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