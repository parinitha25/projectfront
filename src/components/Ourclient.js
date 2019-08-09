import React, { Component } from 'react';
import Navbar from './Navbar';
import './CSS/Ourclient.css';
import Footer from './Footer';

class Ourclient extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <div className="row1">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
             <div className="'apptname"><i>Our Clients</i></div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
        </div>
        <div className="row1">
          
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ourch">
        <div className="row1">
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
             <p className="ourchpa">Our Clients</p>
             <p className="ourchpb">We work closely with our diverse client base to provide exceptional one-on-one service. Among our clients there are many world-renowned industry leaders.</p>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img src={require('../images/services1.png')} alt="Card" className="logoi"/>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img src={require('../images/services2.png')} alt="Card" className="logoi"/>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img src={require('../images/services3.png')} alt="Card" className="logoi"/>
          </div> <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          <img src={require('../images/services4.png')} alt="Card" className="logoi"/>
          </div>
        </div>
        </div>
        </div>
              <p className="ourcp"><i>What our clients say?</i></p>
              <p className="ourcpa">"Userback makes so much sense! It simply changes the way we communicate with our clients and the way our clients collect feedback from their customers"</p>
        <div className="row1">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <div className="row1">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients1.jpg')} alt="First slide" />
            <p>Aahna</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients4.jpg')} alt="First slide" />
            <p>Aadita</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients6.jpg')} alt="First slide" />
            <p>Kumar Birla</p>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          </div>  
        <div className="row1">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients3.jpg')} alt="First slide" />
            <p>	Aaditya</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients2.jpg')} alt="First slide" />
            <p>Aaghnya</p>
            </div>
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img className="imgoc" src={require('../images/clients5.jpg')} alt="First slide" />
            <p>Aamod</p>
            </div>
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
        </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
          </div>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Ourclient;