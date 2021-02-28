import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../actions/auth';

function Dashboard({ toggling: { toggleNavbarBurger }, loadUser }) {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <div
      className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
    >
      <div className='container-fluid'>
        {/* <!-- Begin Page Header--> */}
        <div className='row'>
          <div className='page-header'>
            <div className='d-flex align-items-center'>
              <h2 className='page-header-title'>Dashboard</h2>
              {/* <div>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="!#"><i className="ti ti-home"></i></a></li>
                                <li className="breadcrumb-item active">Blank</li>
                            </ul>
                        </div>	                             */}
            </div>
          </div>
        </div>
        {/* <!-- End Page Header --> */}
        {/* <!-- Begin Row --> */}

        <div className='row flex-row'>
          <div className='col-xl-12'>
            {/* <!-- Form --> */}
            <div className='widget has-shadow'>
              {/* <div className='widget-header bordered no-actions d-flex align-items-center'>
                <h4>All Courses</h4>
              </div> */}

              <div className='widget-body'>
                <h1>Welcome To Vstream</h1>
              </div>
            </div>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  toggling: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, { loadUser })(Dashboard);
