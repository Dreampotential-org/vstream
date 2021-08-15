import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import AdsCarousel from "./ads-slider";
// import CategoriesSlider from "./categories-slider"
import TabsCategory from "./tabs-category"
import CategoriesSlider from "./category-slider";
import RoomMain from '../room/room-main'
import { getCategories, joinConference } from '../../actions/feeds-categories';

function Home({ toggling: { toggleNavbarBurger }, loadUser, getCategories, }) {
    useEffect(() => {
        loadUser();
        // getCategories();
    }, [ loadUser]);
    return (
        <div
            className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
        >
            <Fragment>
                <div className='container-fluid'>
                    {/* <!-- Begin Page Header--> */}
                    {/* <div className='row'>
                        <div className='page-header'>
                            <div className='d-flex align-items-center'>
                                <h2 className='page-header-title'>Categories</h2>

                            </div>
                        </div>
                    </div> */}
                    {/* <!-- End Page Header --> */}
                    {/* <!-- Begin Row --> */}
                    {/* <div className="row">
                        <img src={BannerAd1}
                            alt="First slide"></img>
                    </div> */}
                    <div className='row' style={{ display: 'block' }}>
                        <AdsCarousel></AdsCarousel>
                    </div>
                    <div className="row" style={{ marginTop: '10px' }}>
                        <CategoriesSlider></CategoriesSlider>
                    </div>
                    <div className="row">
                        <TabsCategory></TabsCategory>
                    </div>
                    {/* <div className="row">
                        <MultipleItems></MultipleItems>
                    </div> */}
                    {/* <div className="row"> */}
                        <RoomMain></RoomMain>
                    {/* </div> */}


                    {/* <div className='row flex-row' style={{ height: "250px" }}>
                        <div className='col-xl-12' style={{ height: "100%" }}>
                            <div className='widget has-shadow' style={{ height: "100%" }}>
                                <div className='widget-body' style={{ height: "100%" }}>
                                    <AdsCarousel></AdsCarousel>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='row flex-row' style={{ height: "250px" }}>
                        <div className='col-xl-12' style={{ height: "100%" }}>
                            <div className='widget has-shadow' style={{ height: "100%" }}>
                                <div className='widget-body' style={{ height: "100%" }}>
                                    <AdsCarousel></AdsCarousel>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </Fragment>
        </div>
    );
}

Home.propTypes = {
    toggling: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
});

export default connect(mapStateToProps, { loadUser })(Home);
