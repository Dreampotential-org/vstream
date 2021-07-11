import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/css/categories.css';
import { changeTabOfCategory } from "../../actions/toggling";

function TabsCategory(
    { toggling, changeTabOfCategory }
) {
    return (
        <div className="widget-body sliding-tabs" style={{ width: "100%" }}>
            <ul className="nav nav-tabs" id="example-one" role="tablist">
                <li className="nav-item" id="live_now" onClick={(e) => changeTabOfCategory(e.target.id)}>
                    <a className={toggling.activeTabStates['live_now'] ? "nav-link active" : "nav-link"}
                        id="live_now" data-toggle="tab"
                        role="tab" aria-controls="tab-1" aria-selected="false">Live now</a>
                </li>
                <li className="nav-item" id="trending" onClick={(e) => changeTabOfCategory(e.target.id)}>
                    <a className={toggling.activeTabStates['trending'] ? "nav-link active" : "nav-link"}
                        id="trending" data-toggle="tab"
                        role="tab" aria-controls="tab-2" aria-selected="false">Trending</a>
                </li>
                <li className="nav-item" id="following" onClick={(e) => changeTabOfCategory(e.target.id)}>
                    <a className={toggling.activeTabStates['following'] ? "nav-link active" : "nav-link"}
                        id="following" data-toggle="tab"
                        role="tab" aria-controls="tab-3" aria-selected="false">Following</a>
                </li>
                <li className="nav-item" id="discover" onClick={(e) => changeTabOfCategory(e.target.id)}>
                    <a className={toggling.activeTabStates['discover'] ? "nav-link active" : "nav-link"}
                        id="discover" data-toggle="tab"
                        role="tab" aria-controls="tab-4" aria-selected="false">Discover</a>
                </li>
            </ul>
        </div>
    )
}
TabsCategory.propTypes = {
    toggling: PropTypes.object.isRequired,
    changeTabOfCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
});

export default connect(mapStateToProps, { changeTabOfCategory })(TabsCategory);
