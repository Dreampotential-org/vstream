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
            {/* <div class="tab-content pt-3">
                <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="base-tab-1">
                    Curabitur Cras gravida vitae. Tempor neque aliquam euismod. To Vestibulum pregnant with a lot of life, enhanced at it. Not just football, pure and innovative impact. Tomorrow, but the pot life, which sometimes variegated and graduated care. Ullamcorper microwave therapy, but they need gateway hatred of law enforcement.
                                            </div>
                <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="base-tab-2">
                    For the arrows of life he wishes to, nor an employee. Till need grief salad. Nullam tortor tortor, lacinia nec consequat id, the time in the backyard. Boat or television chili and Bureau laughter. Nam is not chili graph ecological Bureau. But this is not a ante volutpat aliquam malesuada mauris lacus.
                                            </div>
                <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="base-tab-3">
                    Nam ultricies element blockage. We always need approval. Stress has become the players care and sterilized free site. Pulvinar dui mi Curabitur auctor risus, tincidunt sapien condimentum in. But football is what it is worth, the biggest time consumer chocolate.
                                            </div>
            </div> */}
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
