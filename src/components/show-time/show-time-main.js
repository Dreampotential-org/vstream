import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HostNow from "./host-now";

function ShowTime({ toggling: { toggleNavbarBurger }, }) {
    return (
        <div
            className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
        >
            <Fragment>
                <div className='container-fluid'>
                    <HostNow></HostNow>
                </div>
            </Fragment>
        </div>
    )
}
ShowTime.propTypes = {
    toggling: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
});

export default connect(mapStateToProps, {})(ShowTime);
