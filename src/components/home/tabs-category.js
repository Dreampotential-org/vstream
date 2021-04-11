import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../../assets/css/categories.css'

function TabsCategory() {
    return (
        <div className="widget-body sliding-tabs" style={{width: "100%"}}>
            <ul className="nav nav-tabs" id="example-one" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="base-tab-1" data-toggle="tab"
                        role="tab" aria-controls="tab-1" aria-selected="false">Live now</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="base-tab-2" data-toggle="tab"
                        role="tab" aria-controls="tab-2" aria-selected="false">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="base-tab-3" data-toggle="tab"
                        role="tab" aria-controls="tab-3" aria-selected="false">Following</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Discover</a>
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
export default TabsCategory;