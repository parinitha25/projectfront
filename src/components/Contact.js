import React, { Component } from 'react';
import './CSS/Contact.css';
import {Form} from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 appth">
             <div className='apptname'><i>Contactus</i></div>
             <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            </div>
          </div>
        <div className="row1">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>  
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5"> 
            <p className="taxfind">How To Find Us?</p>  
            <p className="taxhead"><i>Head Quarters</i></p> 
            <p className="addrp">A&D Consultancy
                38, 2nd Main, 7th Cross, Rangappa Laypout Banshankari, 3rd Stage, Near Annapurnay Shri Temple, Katriguppe, 
                canada-560085<br/>
                <p className="emailp">Email:</p>Adconsultancy@gmail.com<br/>
                <p className="emailp">Phonenumer:</p>0912347950</p>   
            <p className="suptp"><i>Support Center</i></p>   
            <p className="addrp">No 459/30, 30th Cross, 4th Block, Bangalore - 560011, Near Police Station
            <p className="emailp">Email:</p>Adconsultancy@gmail.com<br/>
                <p className="emailp">Phonenumer:</p>0912347950</p>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <Form>
            <label className="form">Get in Touch</label>
            <Form.Group >
              <label><b>Name</b></label><br/>
              <input type="text" className="widthc"  />
            </Form.Group>
            <Form.Group>
              <label><b>Email</b></label><br/>
              <input type="text" className="widthc"  />
            </Form.Group>
            <Form.Group>
              <label><b>Message</b></label><br/>
              <input type="text" className="widthc"  />
              <input type="text" className="widthc"  />
              <input type="text" className="widthc"  />
              <input type="text" className="widthc"  />
              <input type="text" className="widthc"  />
              <input type="text" className="widthc"  />
              <input type="text" className="widthc"  />
            </Form.Group>
              <button  type="submit" className="sendbt">Send</button>
              <button type="submit" className="resetbt">Reset</button>
          </Form>
          </div>
          </div>
        </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Contact;