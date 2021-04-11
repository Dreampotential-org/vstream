import React, { Fragment, useState, useEffect } from 'react';
import Live from "../../assets/icons/videos/live.png";
import { Card, CardColumns } from "react-bootstrap";
import User from "../../assets/icons/videos/user.png";
import Favourite from "../../assets/icons/videos/favorites.png";
import Share from "../../assets/icons/videos/share.png";
import Views from "../../assets/icons/videos/views.png";
import "../../assets/css/categories.css";
const PostsData = [
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        "category": "Travel",
        "title": "Nomad Lifestyle",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
        "category": "Development",
        "title": "React and the WP-API",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
        "category": "News",
        "title": "CNN Acquire BEME",
        "text": "CNN purchased Casey Neistat's Beme app for $25million.",
        "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
        "category": "Travel",
        "title": "Nomad Lifestyle",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
        "category": "Development",
        "title": "React and the WP-API",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    }
]
class RoomMain extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {}
        }
    }
    componentWillMount() {
        this.setState({
            posts: PostsData
        });
    }


    render() {
        return (
            // <CardColumns>
            //     <Card>
            //         <Card.Header>
            //             {/* <Card.Img variant="top" src={Live} /> */}
            //             <div className="card-header--title" >
            //                 <img src={Live}></img>
            //             </div>
            //         </Card.Header>

            //         <Card.Body>
            //             <Card.Title>Card title that wraps to a new line</Card.Title>
            //             <Card.Text>
            //                 This is a longer card with supporting text below as a natural lead-in to
            //                 additional content. This content is a little bit longer.
            //             </Card.Text>
            //         </Card.Body>
            //         <Card.Footer>
            //             <div className="row">
            //                 <div className="col">
            //                     <img src={Live}></img>
            //                 </div>
            //                 <div className="col">
            //                     <img src={Live}></img>
            //                 </div>
            //                 <div className="col">
            //                     <img src={Live}></img>
            //                 </div>
            //                 <div className="col">
            //                     <button
            //                         // onClick={(e) => console.log("click!")}
            //                         className='btn btn-lg btn-gradient-01'
            //                     // style={toggleLoader ? { pointerEvents: 'none' } : null}
            //                     >
            //                         <span>
            //                             Join
            //                         </span>
            //                     </button>
            //                 </div>
            //                 <div className="col">
            //                     <img src={Live}></img>
            //                 </div>
            //             </div>
            //             {/* <small className="text-muted">Last updated 3 mins ago</small> */}
            //         </Card.Footer>
            //     </Card>
            //     <Card className="p-3">
            //         <blockquote className="blockquote mb-0 card-body">
            //             <p>
            //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            //                 erat a ante.
            //             </p>
            //             <footer className="blockquote-footer">
            //                 <small className="text-muted">
            //                     Someone famous in <cite title="Source Title">Source Title</cite>
            //                 </small>
            //             </footer>
            //         </blockquote>
            //     </Card>
            //     <Card>
            //         <Card.Img variant="top" src="holder.js/100px160" />
            //         <Card.Body>
            //             <Card.Title>Card title</Card.Title>
            //             <Card.Text>
            //                 This card has supporting text below as a natural lead-in to additional
            //             content.{' '}
            //             </Card.Text>
            //         </Card.Body>
            //         <Card.Footer>
            //             <small className="text-muted">Last updated 3 mins ago</small>
            //         </Card.Footer>
            //     </Card>
            //     <Card bg="primary" text="white" className="text-center p-3">
            //         <blockquote className="blockquote mb-0 card-body">
            //             <p>
            //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            //                 erat a ante.
            //             </p>
            //             <footer className="blockquote-footer">
            //                 <small className="text-muted">
            //                     Someone famous in <cite title="Source Title">Source Title</cite>
            //                 </small>
            //             </footer>
            //         </blockquote>
            //     </Card>
            //     <Card className="text-center">
            //         <Card.Body>
            //             <Card.Title>Card title</Card.Title>
            //             <Card.Text>
            //                 This card has supporting text below as a natural lead-in to additional
            //             content.{' '}
            //             </Card.Text>
            //             <Card.Text>
            //                 <small className="text-muted">Last updated 3 mins ago</small>
            //             </Card.Text>
            //         </Card.Body>
            //     </Card>
            //     <Card>
            //         <Card.Img src="holder.js/100px160" />
            //     </Card>
            //     <Card className="text-right">
            //         <blockquote className="blockquote mb-0 card-body">
            //             <p>
            //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
            //                 erat a ante.
            //             </p>
            //             <footer className="blockquote-footer">
            //                 <small className="text-muted">
            //                     Someone famous in <cite title="Source Title">Source Title</cite>
            //                 </small>
            //             </footer>
            //         </blockquote>
            //     </Card>
            //     <Card>
            //         <Card.Body>
            //             <Card.Title>Card title</Card.Title>
            //             <Card.Text>
            //                 This is a wider card with supporting text below as a natural lead-in to
            //                 additional content. This card has even longer content than the first to
            //                 show that equal height action.
            //             </Card.Text>
            //             <Card.Text>
            //                 <small className="text-muted">Last updated 3 mins ago</small>
            //             </Card.Text>
            //         </Card.Body>
            //     </Card>
            // </CardColumns>
            <div className="listOfCards" id="app-card-list">
                {
                    Object
                        .keys(this.state.posts)
                        .map(key => <VideosCard key={key} index={key} details={this.state.posts[key]} />)
                }
            </div>
        )

    }
}

class Button extends React.Component {
    render() {
        return (
            <button className="button button-primary">
                <i className="fa fa-chevron-right"></i> Find out more
            </button>
        )
    }
}


class CardHeader extends React.Component {
    render() {
        const { image, category } = this.props;
        var style = {
            backgroundImage: 'url(' + image + ')',
        };
        return (
            <header style={style} className="card-header">
                {/* <h4 className="card-header--title">{category}</h4> */}
                <div className="card-header--title" >
                    <img src={Live}></img>
                </div>

            </header>
        )
    }
}


class CardBody extends React.Component {
    render() {
        return (
            // <div className="card-body">
            <div>
                <div className="widget-header d-flex align-items-center">
                    <div className="user-image">
                        <img className="rounded-circle" src={User} alt="..." />
                    </div>
                    <div className="d-flex flex-column mr-auto">
                        <div className="title">
                            <span className="username">Runway Hits Camp Jamming</span>
                        </div>
                        <div className="time">Runway Hits</div>
                    </div>
                    {/* <div className="widget-options">
                    <div className="dropdown">
                        <button type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle">
                            <i className="la la-ellipsis-h"></i>
                        </button>
                        <div className="dropdown-menu">
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i class="la la-edit"></i>Edit Post
                                                                    </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i class="la la-trash"></i>Delete Post
                                                                    </a>
                            <a href="javascript:void(0);" className="dropdown-item">
                                <i class="la la-bell-slash"></i>Disable Notifications
                                                                    </a>
                            <a href="javascript:void(0);" className="dropdown-item faq">
                                <i class="la la-question-circle"></i>FAQ
                                                                    </a>
                        </div>
                    </div>
                </div> */}
                </div>
                <div className="widget-footer d-flex align-items-center">
                    <div className="col-xl-5 col-md-8 col-5 no-padding d-flex justify-content-start align-items-center">
                        <div className="users-like">
                            <a href="javascript:void(0);">
                                <img src={Views} className="img-fluid rounded-circle" alt="..." />
                            </a>
                            <a className="db-social view-more ml-auto" href="javascript:void(0);"> 5.3k
                        {/* <img src={} class="img-fluid rounded-circle" alt="..."/> */}
                            </a>
                            <a href="javascript:void(0);" className="ml-auto">
                                <img src={Favourite} className="img-fluid rounded-circle" alt="..." />
                            </a>
                            <a href="javascript:void(0);" className="db-social view-more ml-auto"> 3.1k
                        {/* <img src="assets/img/avatar/avatar-09.jpg" className="img-fluid rounded-circle" alt="..."/> */}
                            </a>
                            {/* <a className="view-more" href="javascript:void(0);">
                                            +4
                    </a> */}
                        </div>
                    </div>
                    <div className="col-xl-7 col-md-4 col-7 no-padding d-flex justify-content-end">
                        <div className="meta">
                            <ul>
                                <li>
                                    <button
                                        className='btn btn-gradient-01'
                                    // type='submit'
                                    //   style={toggleLoader ? { pointerEvents: 'none' } : null}
                                    >
                                        <span
                                        // style={toggleLoader ? { marginRight: '10px' } : null}
                                        >
                                            Join
                                </span>

                                    </button>
                                    {/* <a href="javascript:void(0);">
                                <i className="la la-comment"></i><span className="numb">12</span>
                            </a> */}
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src={Share} className="img-fluid" alt="..." />
                                    </a>
                                    {/* <a href="javascript:void(0);">
                                        <i className="la la-heart-o"></i><span className="numb">18</span>
                                    </a> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            // {/* <p className="date">March 20 2015</p>

            //             <h2>{this.props.title}</h2>

            //             <p className="body-content">{this.props.text}</p> */}
            // {/* <Card.Footer>
            //             <small className="text-muted">Last updated 3 mins ago</small>
            //         </Card.Footer> */}
            // {/* <Button /> */ }
            // {/* </div> */ }
        )
    }
}


class VideosCard extends React.Component {
    render() {
        return (
            <article className="card">
                <CardHeader category={this.props.details.category} image={this.props.details.image} />
                <CardBody title={this.props.details.title} text={this.props.details.text} />
            </article>
        )
    }
}

export default RoomMain;