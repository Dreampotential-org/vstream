import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import FeedsCategories from "./categories";
import CategoryCards from "./category-card";

function CategoryMain({ toggling: { toggleNavbarBurger }, loadUser }) {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  return (
    <div
      className={toggleNavbarBurger ? 'content-inner' : 'content-inner active'}
    >
      <Fragment>
        <div className='container-fluid'>
          {/* <!-- Begin Page Header--> */}
          <div className='row'>
            <div className='page-header'>
              <div className='d-flex align-items-center'>
                <CategoryCards></CategoryCards>

              </div>
            </div>
          </div>
          {/* <!-- End Page Header --> */}
          {/* <!-- Begin Row --> */}

          {/* <div className='row flex-row'> */}
            {/* <div className='col-xl-12'> */}
              {/* <!-- Form --> */}
              {/* <div className='widget has-shadow'> */}


                {/* <div className='widget-body'> */}
                  <FeedsCategories></FeedsCategories>
                {/* </div> */}
              {/* </div> */}
              {/* <!-- End Form --> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </Fragment>
    </div>
  );
}

CategoryMain.propTypes = {
  toggling: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  toggling: state.toggling,
});

export default connect(mapStateToProps, { loadUser })(CategoryMain);
