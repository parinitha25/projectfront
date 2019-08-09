import React, { Component } from 'react';
import './CSS/Footer.css';

class Footer extends Component {
  render() {
    return (
				<div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
        		<footer>
							<div className="footer">
								<div className="fdiv1">
								<label className="aboutf">About Us</label>
								<p>
								As the pace of innovation accelerates in a hyper competitive environment, success depends on putting customers at the center of everything a business does.
								</p>
									<a href="#" class="fa fa-facebook fac"></a>
									<a href="#" class="fa fa-twitter fac"></a>
									<a href="#" class="fa fa-linkedin fac"></a>
									<a href="#" class="fa fa-instagram fac"></a>
								</div>
								<div className="fdiv2">
									<label className="aboutf">Quick Links</label><br/>
									<a href="#item2" id="Quick_Links" className="pf">>Home</a><br/>
									<a href="#item2" id="Quick_Links" className="pf">>About us</a><br/>
									<a href="#item3" id="Quick_Links" className="pf">>Services</a><br/>
									<a href="#item4" id="Quick_Links" className="pf">>Appointment</a><br/>
									<a href="#item7" id="Quick_Links" className="pf">>Contacts</a><br/>
								</div>
								<div className="fdiv3">
									<label className="aboutf">Subscribe</label><br/><br/>
									<p className="pf">Get the latest Updates</p>
									<input type="mail" className="enter_mail" placeholder="Enter Email" name="lastname" />
									<input type="submit" value="Send" className="send"/><br/>
								</div>
								</div><br/><br/>
								<div className="footcolor">
								<label className="copyright">Copyright ©2019Tax expert. Privacy Policy</label>
							</div>
						</footer>  
					</div>
			</div>
  	);
	}
}

export default Footer;