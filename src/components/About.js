import React, { Component } from 'react';
import './CSS/About.css';
import {Card, CardGroup, CardBody} from 'reactstrap';
import Navbar from './Navbar';
import Footer from './Footer';

class About extends Component {
  render() {
    return (
      <div>
        <Navbar/>
          <div className="row1"> 
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 backgrounda">
              <div className='aboutname'><i>About Us</i></div>
            </div> 
          </div>
          <div className="row1">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <p className="taxs">What is TAX?</p><br/>
              <p className="taxp">Tax is a dynamic and fast paced industry which requires not only analytical ability, but excellent problem solving and commercial skills. For everything that has economic consequences, whether it is for a company, an individual or the Government - tax is relevant, as is the need for tax advisers.</p>
              <p className="taxp">The complex and diverse nature of taxation means that tax advisers rapidly develop areas of specialist knowledge.</p>
              <input type="submit" value="Read More" className="readb"></input>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img src={require('../images/taxa.jpg')} className="taximga" alt="calculator" />  
            </div>  
            {/* <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div> */}
          </div>
           <div className="row1">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 ">
                <img  src={require('../images/benifitsa.jpg')} alt="Card" className="bimg" />
          <div className="row1">
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
              <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
              <div className="box bg-cello  benifit">
                <h1 className="benifita">Our Benifits</h1>
                <p className="benifitp"><h3>1.Competency</h3>
                We keep abreast of relevant trends and changes in accounting treatment, tax law, and financial management. </p>
                <p><h3>2.Professionalism</h3>
                We treat each client with dignity and respect. We listen attentively to their goals and needs.</p>
                <p><h3>3.Commitment</h3>
                Our relationships with clients extend beyond financial recordkeeping and reporting.</p>  
              </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>  
            </div>
              </div>
              <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>   
          </div> 
         <div className="row1"> 
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 backgroundw">
          <p className="paragraph"><i>Why US?</i></p><br/>
              <p className="benifitp2">Using a tax advisor to manage your taxation affairs can be very rewarding. Professionals are much more likely to be aware of more of the ways in which your taxes can be optimised so that you pay the least possible amount.<br></br>
                <p className="p1">
                  1.Conducting research on tax laws<br/>
                  2.Strategizing with clients to minimize tax liability<br/>
                  3.Communicating with clients to explain tax issues<br/>
                  4.Preparing tax returns<br/>
                  5.Estate planning<br/>
                  6.Keeping clients compliant with their tax obligations</p></p>
          </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div> 
         <div className="row1"> 
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
            <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
              <h1 className="teamc"><i>Our Team</i></h1>
              <CardGroup>
                <Card>
                  <CardBody>
                  <div class="dropdown">
                    <img src={require('../images/expert3.jpg')} alt="Card" className="tmimg" />
                      <p>Ross McEwan</p>
                      <p>CEO</p>
                    <div class="dropdown-content">   
                      <img src={require('../images/email1.png')} alt="Card" className="emaili" />
                      <label className="labeln">ross@gmail.com</label><br/>
                      <img src={require('../images/phone1.jpg')} alt="Card" className="phonei" />
                      <label className="labelp">+1(804)892-163</label>  
                    </div>
                  </div>
                  </CardBody>
                </Card>
                <Card>     
                  <CardBody>
                  <div class="dropdown">
                    <img  src={require('../images/expert4.jpg')} alt="Card" className="tmimg" />
                    <p>Sarah Danckert</p>
                    <p>Business Reporter.</p>
                    <div class="dropdown-content">
                    <img src={require('../images/email1.png')} alt="Card" className="emaili" />
                      <label className="labeln">sarahd@gmail.com</label><br/>
                      <img src={require('../images/phone1.jpg')} alt="Card" className="phonei" />
                      <label className="labelp">+1(804)567-899</label>
                    </div>
                  </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                  <div class="dropdown">
                    <img  src={require('../images/expert2.jpg')} alt="Card"  className="tmimg"/>
                    <p>Kumar Birla</p>
                    <p>Advisor</p>
                    <div class="dropdown-content">
                    <img src={require('../images/email1.png')} alt="Card" className="emaili" />
                      <label className="labeln">kumar@gmail.com</label><br/>
                      <img src={require('../images/phone1.jpg')} alt="Card" className="phonei" />
                      <label className="labelp">+1(947)393-027</label>
                    </div>
                  </div>
                  </CardBody>
                </Card>
                <Card>
                  <CardBody>
                  <div class="dropdown">
                    <img  src={require('../images/expert1.png')} alt="Card"  className="tmimg"/>
                    <p>Jeff Bezos</p>
                    <p>Manager</p>
                    <div class="dropdown-content">
                    <img src={require('../images/email1.png')} alt="Card" className="emaili" />
                      <label className="labeln">jeffbezs@gmail.com</label><br/>
                      <img src={require('../images/phone1.jpg')} alt="Card" className="phonei" />
                      <label className="labelp">+1(354)830-922</label>
                    </div>
                  </div>
                  </CardBody>
                </Card>
              </CardGroup>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>
        </div>
         <div className="row1 backendp">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            <p className="peoplep"><i>“What People Say”</i></p>
        <div className="row1">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <div className="peoplep1">
              <p>Team professional team</p>
              <p>Taxexpert field my tax for this year.They were very complicated as compared to any other due 
                to a host of reasons.They handled my tax return very professionally and accrately.</p>
            </div><br/>
              <img className="imgp" src={require('../images/clients1.jpg')} alt="First slide" />
              <p className="colorwp2">Aahna
              <p className="colorwp">Top Manager</p></p>
            <div className="peoplep1">
              <p>very knowledgeable tax accountants</p>
              <p>Our experts use proprietary technology to develop customised plans as per the financial goals of each customer.
              They handled my tax return very professionally and accrately</p>     
            </div><br/>
              <img className="imgp" src={require('../images/clients4.jpg')} alt="First slide" />
              <p className="colorwp2">Aadita
              <p className="colorwp">Coordinator</p></p>  
            </div>
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <div className="peoplep1">
              <p>Financial Planner</p>
              <p>Every individual who wants to meet short and long term financial goals, needs a Financial Planner.
                 each in the area of Financial planning and portfolio management.x for this year.</p>
            </div><br/>
              <img className="imgp" src={require('../images/clients6.jpg')} alt="First slide" />
              <p className="colorwp2">Kumar Birla
              <p className="colorwp">Manager</p></p>
            <div className="peoplep1">
              <p>Benefits tax and financial</p>
              <p>They determine your current financial situation with regard to income, savings, living expenses, debts and also help in mitigating risks associated with your investments.
              </p>
            </div><br/>  
              <img className="imgp" src={require('../images/clients3.jpg')} alt="First slide" />
              <p className="colorwp2">Aaditya
              <p className="colorwp">CEO</p></p>
            </div>
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
        </div>
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
          </div>   
      {/* <Footer/> */}
      </div>  
      </div>
    );
  }
}

export default About;

