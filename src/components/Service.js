import React, { Component } from 'react';
import './CSS/Service.css';
import {Card, CardGroup, CardBody} from 'reactstrap';
import Navbar from './Navbar';
import Footer from './Footer';

class Service extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row1">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
             <div className='apptname'><i>Service</i></div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
         </div>
         <div className="row1">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <p className="expert">Expert Solution</p><br/>
            <p><i>*Welcome to Expert Solutions Tax and Financial Services Inc, an independent full- service firm offering services and solutions for tax management, 
                  accounting, income tax, retirement planning, insurance, consulting, and wealth management needs.<br/>
                  *Enrolled agents (EAs) are America’s Tax Experts. EAs are the only federally licensed tax preparers who also have unlimited rights to represent taxpayers before the IRS.<br/>
                  </i></p>
                  <a href="./ourc"><input type="submit" value="Read More" className="reade"></input></a>
          </div> 
           
             
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <img src={require('../images/teamh.jpg')} className="expertimg" alt="teamimage" />
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
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
        <div className="row1">
        <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <h1 className="taxus"><i>Tax Service</i></h1>
         <p>We offer a full range of tax planning, preparation and support services.</p>
          <CardGroup className="cfonts">
        <Card>
          <CardBody>
            <img src={require('../images/services5.jpg')} alt="Card" className="cimgs"/>
            <p className="servicesp">Tax Preparation</p>
            <p>Are you anxious about filing your on tax returns? While a computer software program may help, there’s no substitute for the quality of service and advice you’ll receive from an experienced tax.</p>    
          </CardBody>
        </Card>
        <Card>     
          <CardBody>
            <img  src={require('../images/services6.jpg')} alt="Card" className="cimgs" />
            <p className="servicesp">IRS Audit Representation</p>
            <p>If you have been selected for an IRS audit, professional representation can set your mind at ease. We’ll take the lead in dealing with the tax authorities based on our familiarity with their.</p></CardBody>
        </Card>
        <Card>
          <CardBody>
            <img  src={require('../images/services7.jpg')} alt="Card" className="cimgs" />
            <p className="servicesp">Tax Planning</p>
            <p>Proactive planning is the key to minimizing your tax liability. We work with businesses and individuals to pay the least amount of tax required by law. Your unique circumstances will determine the strategies.</p>
          </CardBody>
        </Card>
      </CardGroup>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
        {/* <Footer/>  */}
      </div>
     
    );
  }
}

export default Service;


