import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, joinConference } from '../../actions/feeds-categories';

function CategoryCards({
    conversation,
    getCategories,
    joinConference,
    changeView,
}) {
    useEffect(() => {
        getCategories();
    }, [getCategories]);
    return (
        <div className="categoryCard" id="app-card-list">
            {   conversation.categories !== null ?
                Object
                    .keys(conversation.categories)
                    .map(key => <CategoryCard key={key} index={key} details={conversation.categories[key]} />): null
            }
        </div>
    )
}
class CardHeader extends React.Component {
    render() {
        const { image, category } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} className="card-header">
                <h4 className="card-header--title">{category}</h4>
                {/* <div className="card-header--title" >
                    <img src={Live}></img>
                </div> */}

            </header>
        )
    }
}
class CategoryCard extends React.Component {
    render() {
        return (
            <article className="card">
                <CardHeader category={this.props.details.category} image={this.props.details.image} />
                {/* <CardBody title={this.props.details.title} text={this.props.details.text} /> */}
            </article>
        )
    }
}

CategoryCards.propTypes = {
    // toggling: PropTypes.object.isRequired,
    conversation: PropTypes.object.isRequired,
    // changeView: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    // toggling: state.toggling,
    conversation: state.conversation,
});

export default connect(mapStateToProps, { getCategories, joinConference })(
    CategoryCards
);