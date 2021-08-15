import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, joinConference } from '../../actions/feeds-categories';
import { ICON_DICT_OF_CATEGORY } from "../../actions/types";

function CategoryCards({
    id,
    conversation,
    // getCategories,
    joinConference,
    changeView,

}) {
    // useEffect(() => {
    //     console.log("id...", id)
    //     getCategories();
    // }, [getCategories]);
    return (
        <div className="categoryCard" id="app-card-list">
            {   conversation.categories !== null ?
                Object
                    .keys(conversation.categories)
                    .map(key => <CategoryCard id={id} key={key} index={key} details={conversation.categories[key]} />) : null
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
            <header style={style}
                // className="card-header"
                className={this.props.id === category ?
                    "card-header backgroud-active-category" : "card-header"}
            >

                {/* <div className="category"> */}
                <a className="category">
                    <i className={"icons-of-category-card " + ICON_DICT_OF_CATEGORY[category]}>
                    </i>
                    <span id={category}
                        style={{ display: 'block !important' }}>{category}</span>
                </a>

                {/* <h4 className="category">{category}</h4> */}
                {/* </div> */}
                {/* <div className="card-header--title" >
                    <img src={Live}></img>
                </div> */}

            </header>
        )
    }
}
class CategoryCard extends React.Component {
    render() {
        console.log(this.props.id)
        return (
            <article
                className="card"
            // className={this.props.id === this.props.details.category ? "card backgroud-active-category" : "card"}
            >
                <CardHeader id={this.props.id} category={this.props.details.category} image={this.props.details.image} />
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

export default connect(mapStateToProps, {  joinConference })(
    CategoryCards
);