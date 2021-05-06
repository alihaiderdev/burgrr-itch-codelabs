import React from 'react';
import '../styles/components/footer.css';
import { Col, Row } from 'react-bootstrap';
import FacebookImage from '../assets/icons/Social Media Icons/Facebook.svg';
import InstagramImage from '../assets/icons/Social Media Icons/Instagram.svg';
import TwitterImage from '../assets/icons/Social Media Icons/Twitter.svg';
import { withRouter } from 'react-router';

const Footer = ({ location: { pathname } }) => {
  return (
    <>
      {pathname === '/get-started' ||
      pathname === '/signup' ||
      pathname === '/setup-store' ? null : (
        <div className='footer'>
          <div className='conatiner-85'>
            <Row>
              <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <div className='footerDescription'>
                  <h5 className='mb-2 orange'>About Us</h5>
                  <p className='white'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using more-or-less
                  </p>
                </div>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <div className='linksContainer2 linksContainer'>
                  <h5 className='mb-2 orange'>Quick Links</h5>
                  <ul>
                    <li className='mb-2'>
                      <a href='#link1' className='white'>
                        Link 1
                      </a>
                    </li>
                    <li className='mb-2'>
                      <a href='#link2' className='white'>
                        Link 2
                      </a>
                    </li>
                    <li className='mb-2'>
                      <a href='#link3' className='white'>
                        Link 3
                      </a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col xs={6} sm={6} md={4} lg={4} xl={4}>
                <div className='linksContainer'>
                  <h5 className='mb-2 orange'>Follow Us</h5>
                  <ul>
                    <a href='#facebook'>
                      <li className='mb-2 white'>
                        <img
                          className='mr-3'
                          src={FacebookImage}
                          alt='faceboook'
                        />
                        Facebook
                      </li>
                    </a>
                    <a href='#instagram'>
                      <li className='mb-2 white'>
                        <img
                          className='mr-3'
                          src={InstagramImage}
                          alt='instagram'
                        />
                        Instagram
                      </li>
                    </a>
                    <a href='#twitter'>
                      <li className='mb-2 white'>
                        <img
                          className='mr-3'
                          src={TwitterImage}
                          alt='twitter'
                        />
                        Twitter
                      </li>
                    </a>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(Footer);
