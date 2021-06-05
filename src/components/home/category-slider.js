import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clickCategory } from "../../actions/toggling";
import { ICON_DICT_OF_CATEGORY } from "../../actions/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../assets/css/categories.css';
function CategoriesSlider({
    // getCategories,
    conversation,
    clickCategory,
    toggling,
}) {
    const onActiveItems = (e) => {
        e.stopPropagation();
        console.log(e.target.id);
        clickCategory(e.target.id);

    }
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
    };
    return (
        <>
            {
                conversation.categories !== null ?
                    <div className="col-xl-12 widget-29">
                        <div className="widget no-bg">
                            <div className="widget-body pt-0">
                                <Slider {...settings}>
                                    {conversation.categories.map((cat, i) => (
                                        // <div id={cat.category} onClick={(e) => onActiveItems(e)} key={i} >
                                            <div id={cat.category} onClick={(e) => onActiveItems(e)} key={i}
                                                className="item">
                                                <div id={cat.category}
                                                    className="devices-item d-flex justify-content-center align-items-center"
                                                    style={toggling.subCategoryStates[cat.category] ?
                                                        { background: "linear-gradient(to right, #7E47AF 10%, #1A1F63 100%)" } :
                                                        null}
                                                // className="devices-item d-flex justify-content-center align-items-center"
                                                >
                                                    <i id={cat.category}
                                                        className={ICON_DICT_OF_CATEGORY[cat.category]}></i>
                                                    <div className="room" id={cat.category}
                                                    >{cat.category}</div>
                                                </div>
                                            </div>
                                        // </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div> : null
            }
        </>
    )
}
CategoriesSlider.propTypes = {
    toggling: PropTypes.object.isRequired,
    conversation: PropTypes.object.isRequired,
    clickCategory: PropTypes.func.isRequired,
    // changeView: PropTypes.func.isRequired,
    // createCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    toggling: state.toggling,
    conversation: state.conversation,
});
export default connect(mapStateToProps, { clickCategory })(
    CategoriesSlider
);
// export default class MultipleItems extends Component {
//     render() {
//         const settings = {
//             dots: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 3,
//             slidesToScroll: 3
//         };
//         return (
//             <>
//                 {
//                     conversation.categories !== null ?
//                         <div className="col-xl-12 widget-29">
//                             <div className="widget no-bg">
//                                 <div className="widget-body pt-0">
//                                     <h2> Multiple items </h2>
//                                     <Slider {...settings}>
//                                         <div>
//                                             <h3>1</h3>
//                                         </div>
//                                         <div>
//                                             <h3>2</h3>
//                                         </div>
//                                         <div>
//                                             <h3>3</h3>
//                                         </div>
//                                         <div>
//                                             <h3>4</h3>
//                                         </div>
//                                         <div>
//                                             <h3>5</h3>
//                                         </div>
//                                         <div>
//                                             <h3>6</h3>
//                                         </div>
//                                         <div>
//                                             <h3>7</h3>
//                                         </div>
//                                         <div>
//                                             <h3>8</h3>
//                                         </div>
//                                         <div>
//                                             <h3>9</h3>
//                                         </div>
//                                     </Slider>
//                                 </div>
//                             </div>
//                         </div> : null}
//             </>

//         );
//     }
// }