import React, { Component } from 'react';
import './CSS/Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Form,Button} from 'react-bootstrap';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import {Card, CardGroup, CardBody} from 'reactstrap';
import Navbar from './Navbar';
import Footer from './Footer';

class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      income:"",
      total:""
    }
  }
  handleChanget=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmitt=(e)=>{
    var{income,total}=this.state;
    total=income*5/100;
    this.setState({total:total});
    console.log(this.state.year_income);
  }
  render() {
    return (
      <div>
        <Navbar/>  
          <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 " >
                <MDBCarousel 
                  activeItem={1}
                  length={2}
                  showControls={true}
                  showIndicators={false}
                  className="z-depth-1">
                <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img className="imghome" src={require('../images/home-slider-1.jpg')} alt="Second slide" />
                    <h4 className="font">Our Clients Don't Have Tax Problems</h4><br/>
                    <a href='./appt'><input type="submit" value="MAKE AN APPOINTMENT >" className="aptbs"></input></a>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img className="imghome" src={require('../images/home-slide-2.jpg')} alt="Third slide"/>
                    <h4 className="font">Our Clients Don't Have Tax Problems</h4><br/>
                    <a href='./appt'><input type="submit" value="MAKE AN APPOINTMENT >" className="aptbs"></input></a>
                  </MDBView>
                </MDBCarouselItem>
                </MDBCarouselInner>
                </MDBCarousel>
              </div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
          </div>
            <p className="serviceo">Our Services</p>
          <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <CardGroup>
                <Card>
                  <CardBody>
                    <img src={require('../images/service5.jpg')} alt="Card " className="cimg"/>
                    <p className="servicep">Accounting Services</p>
                    <p>Our firm offers a complete range of accounting Services, We prepare Financial Statement in accordance with GAAP, We also assist in Preparation of customs Financial report which suits the Managerial needs. </p>    
                  </CardBody>
                </Card>
                <Card>     
                  <CardBody>
                    <img  src={require('../images/service4.jpg')} alt="Card " className="cimg" />
                    <p className="servicepg">GST Services</p>
                    <p>In order to meet various demands of our esteemed clients, we are engaged in providing an optimum quality array of GST Services.We prepare Financial Statement in accordance with GAAP.</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <img  src={require('../images/service3.jpg')} alt="Card" className="cimg" />
                    <p className="servicep">Book Keeping Services</p>
                    <p>We are offering a wide array of Book-Keeping Services. These presented bookkeeping services are offered by professionals in adherence to preset industry standards.</p>
                  </CardBody>
                </Card>
              </CardGroup>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              </div>
          <div className="row1">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
              <div className="about"></div>
              <div className="row1">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                <div className="box bg-cello aboutt">
                  <span className="aboutus"><i>About Us</i></span>
                    <p className="aboutp1">We are dedicated to providing professional service with the highest degree of honesty and integrity, and strive to add value to our tax and consulting services.</p>
                    <p className="aboutp"> 1.Highly Competent Professionals<br/>
                      2.Affordable Prices<br/>
                      3.High Successful Recovery<br/>
                      4.Preparing tax returns
                    </p>
                  <a href='./appt'><input type="submit" value="MAKE AN APPOINTMENT >" className="aptb"></input></a>
                </div>
                </div>
                <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
             </div>
            </div>
          </div>
           <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
              <p className="service">Tax Calculator</p>
                <div className="row"> 
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <Form className="mtop">
                      <Form.Group>
                        <label><b>Choose your Business Area</b></label><br/>
                      <Form as="select">
                          <option>Ahmedabad</option>
                          <option>Busan	</option>
                          <option>Hiroshima</option>
                        </Form>
                      </Form.Group>
                      <Form.Group>
                        <label><b>Employees number</b></label><br/>
                        <Form as="select">
                          <option>1-5</option>
                          <option>6-10</option>  
                        </Form>
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                    <Form>
                      <Form.Group>
                        <label className="formc"><b>Country of residence</b></label><br/>
                        <Form as="select" className="mtopa">
                          <option>India</option>
                          <option>South Korea</option>
                          <option>Japan</option>
                        </Form>
                      </Form.Group>
                      <Form.Group>
                          <label><b>Yearly Income</b></label><br/>
                          <input type="number" className="resultv" name="income" onChange={this.handleChanget}/>
                          <input className="result" value={this.state.total}/>  
                      </Form.Group>
                      <Button variant="primary" type="button" className="tbutton" onClick= {this.handleSubmitt}>Total payment</Button>
                    </Form>
                  </div>
                  
                </div>
            </div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 ">
              <img src={require('../images/calculator.jpg')} className="imgc" alt="calculator" />
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div>
          </div>
             <p className="serviceo">Latest News</p>
             <div className="row1">
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
             <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <CardGroup className="cfont">
                <Card>
                  <CardBody>
                    <img src={require('../images/latesta.jpg')} alt="Card" className="timg" />
                    <p className="servicep2">The Top 5 Tax Paper Downloads</p>
                    <p className="servicep3">Most of us will implement some tax planning on behalf of a client which requires some paperwork to support the actions which have been taken.</p>
                  </CardBody>
                </Card>
                <Card>     
                  <CardBody>
                    <img  src={require('../images/latestb.jpg')} alt="Card" className="timg" />
                    <p className="servicep2">The Tax Consequences Of Brexit</p>
                    <p className="servicep3">The incorporation of a business requires an issue of shares ,if appropriate a changing of the name of a company.</p>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                    <img  src={require('../images/latestc.jpg')} alt="Card"  className="timg"/>
                    <p className="servicep2">Exploring American Taxes: Then and Now</p>
                    <p className="servicep3">Backed by rich industry experiences, we are highly engaged in offering a premium quality range of Domain Name Registration Service.</p>
                  </CardBody>
                </Card>
              </CardGroup>
              </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 "></div> 
            </div>
            {/* <Footer/>    */}
      </div>
    );
  }
}

export default Home;
