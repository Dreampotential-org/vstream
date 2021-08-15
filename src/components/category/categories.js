import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCategories, joinConference } from '../../actions/feeds-categories';
// import Loader from 'react-loader-spinner';
import Icofont from 'react-icofont';
import RoomMain from '../room/room-main'

function FeedsCategories({
    conversation,
    getCategories,
    joinConference,
    changeView,
}) {
    const [toggleLoader, setToggleLoader] = useState(true);
    const [categories, setCategories] = useState(null);

    // useEffect(() => {
    //     getCategories();
    // }, [getCategories]);

    const joinRoom = (evt) => {
        evt.preventDefault();
        console.log(evt.target.id);
        console.log(conversation.categories[evt.target.id]);
        var joinRoom = joinConference(conversation.websocket,
            conversation.categories[evt.target.id].category)
        if (joinRoom) {
            console.log(joinRoom)
            window.open(conversation.categories[evt.target.id].conference_url, '_blank');
        }
    }

    return (
        <div>
            <RoomMain></RoomMain>
            {/* {conversation.categoriesLoader ? (
                <Icofont icon='spinner' size='3' spin='true' />
            ) : conversation.categories !== null ?
                    <div className='table-responsive'>
                        <table className='table mb-0'>
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>People Count</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody style={{ height: '60vh' }}>
                                {conversation.categories.map((cat, i) => (
                                    <tr key={i}>
                                        <td>
                                            {cat.category}
                                        </td>
                                        <td>{cat.count}</td>
                                        <td className='td-actions'>
                                            <button
                                                id={i}
                                                onClick={(e) => joinRoom(e)}
                                                className='btn btn-gradient-01'
                                            >
                                                Join Room
                                                </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                    : <h1>hammad</h1>} */}
        </div>
    )

}



FeedsCategories.propTypes = {
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
    FeedsCategories
);