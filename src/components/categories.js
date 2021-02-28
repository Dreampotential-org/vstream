import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories } from '../actions/feeds-categories';
// import Loader from 'react-loader-spinner';
import Icofont from 'react-icofont';

function FeedsCategories({
    categories: { categories },
    getCategories,
    changeView,
}) {

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    const [toggleLoader, setToggleLoader] = useState(true);


    return (
        <div>
            {toggleLoader ? (
                <Icofont icon='spinner' size='3' spin='true' />
            ) : <p>{categories}</p>}
        </div>
    )

}

AddCourse.propTypes = {
    // toggling: PropTypes.object.isRequired,
    categories: PropTypes.object.isRequired,
    // changeView: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    // toggling: state.toggling,
    categories: state.categories,
});

export default connect(mapStateToProps, { getCategories })(
    FeedsCategories
);