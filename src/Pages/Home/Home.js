import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import images from '../../ProjectImages/ProjectImages';
import { Link } from 'react-router-dom';

export default class HomePage extends Component{
    render(){
        return(
            <div>
                <Header />
                <div class = "splash-container">
                    <div class = "splash">
                        <h1 class ="splash-head">WeTalk App</h1>
                        <p class = "splash-subhead">
                            Lets talk with our loved ones.
                        </p>
                        <div id = "custom-button-wrapper">
                            <Link to = "/login">
                                <a class = "my-super-cool-btn">
                                    <div class = "dots-container">
                                        <div class = "dot"></div>
                                        <div class = "dot"></div>
                                        <div class = "dot"></div>
                                        <div class = "dot"></div>
                                    </div>
                                    <span className = "buttoncooltext">Get Started</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class = "content-wrapper">
                    <div class = "content">
                        <h2 class = "content-head is-center">Features of WeTalk App</h2>

                        <div className = "Appfeatures">
                            <div className = "contenthead">
                                <h3 class = "content-subhead">
                                    <i class = "fa fa-rocket"></i>
                                    Get Started Quickly
                                </h3>
                                <p>
                                    Just Register Yourself with this app and start chatting...
                                </p>
                            </div>
                            <div class = "l-box pure-u-l pure-u-md-l-2 pure-u-lg-l-4">
                                <h3 class = "content-subhead">
                                    <i class="fa fa-sign-in"></i>
                                    Firebase Authentication
                                </h3>
                                <p>
                                    Firebase Authentication has been implemented in this app.
                                </p>
                            </div>
                            <div class = "l-box pure-u-l pure-u-md-l-2 pure-u-lg-l-4">
                                <h3 class = "content-subhead">
                                    <i class="fa fa-th-large"></i>
                                    Media
                                </h3>
                                <p>
                                    You can share images with your friends for better experience
                                </p>
                            </div>
                            <div class = "l-box pure-u-l pure-u-md-l-2 pure-u-lg-l-4">
                                <h3 class = "content-subhead">
                                    <i class="fa fa-refresh"></i>
                                    Updates
                                </h3>
                                <p>
                                    We will work with new features in the future.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class = "AppfeaturesFounder">
                        <div class = "l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                            <img width = "300" alt="File Icons" class="pure-img-responsive" src={images.dp} />
                        </div>
                        <div class = "pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
                            <h2 class = "content-head content-head-ribbon">Quadrumvirate</h2>
                            <p style={{color:'white'}}>
                                The Founder of WeTalk.
                            </p>
                            <p style={{color:'white'}}>
                                Currently Studies at IUT.
                            </p>
                        </div>
                    </div>

                    <div class = "content">
                        <h2 class = "content-head is-center">Who Are We?</h2>

                        <div class = "Appfeatures">
                            <div class = "l-box-lrg pure-u-1 pure-u-md-2-5">
                                <form class = "pure-form pure-form-stacked">
                                    <fieldset>
                                        <label for = "name">Your Name</label>
                                        <input id = "name" type = "text" placeholder = "Your Name"/>

                                        <label for = "email">Your Email</label>
                                        <input id = "email" type = "email" placeholder = "Your Email"/>

                                        <label for = "password">Your Password</label>
                                        <input id = "password" type = "password" placeholder = "Your Password"/>

                                        <button type = "submit" class="pure-button">Sign Up</button>
                                    </fieldset>
                                </form>
                            </div>

                            <div class = "l-box-lrg pure-u-1 pure-u-md-3-5">
                                <h4>Contact Us</h4>
                                <p>
                                    For More Question or suggestion you can contact us via:
                                    Facebook:<a href = "https://www.facebook.com/">Click Here</a>
                                </p>
                                <p>
                                    Intagram:<a href = "https://www.instagram.com/">Click Here</a>
                                </p>

                                <h4>More Information</h4>
                                <p>To whom it may concern</p>
                                <p>
                                This app is developed for academic project submission.
                                Developed By- Quadrumvirate (Md.Rafid Islam, Ratun Rahman, Akib Ahmed)
                                </p>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}