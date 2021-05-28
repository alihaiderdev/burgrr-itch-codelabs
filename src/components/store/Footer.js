import React, { useState } from 'react';
import '../../styles/components/store/footer.css';

import { withRouter } from 'react-router';
import { Col, Row } from 'react-bootstrap';
import { ImFacebook2 } from 'react-icons/im';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';
import EditFooterModal from '../modals/EditFooterModal';
import AlertModal from '../modals/AlertModal';

// import FacebookImage from '../../assets/icons/Social Media Icons/Facebook.svg';
// import InstagramImage from '../../assets/icons/Social Media Icons/Instagram.svg';
// import TwitterImage from '../../assets/icons/Social Media Icons/Twitter.svg';
// import Icon from '../Icon';

const Footer = ({ location: { pathname } }) => {
  const [editFooterModal, setEditFooterModal] = useState(false);
  const handleOpenEditFooterModal = () => setEditFooterModal(true);
  const handleCloseEditFooterModal = () => setEditFooterModal(false);

  const [alertModal, setAlertModal] = useState(false);
  const handleOpenAlertModal = () => setAlertModal(true);
  const handleCloseAlertModal = () => setAlertModal(false);

  return (
    <>
      {pathname === '/' ||
      pathname === '/home' ||
      pathname === '/about-us' ||
      pathname === '/delivery' ||
      pathname === '/contact-us' ||
      pathname === '/place-order' ||
      pathname === '/order-place' ? (
        <div className='footer'>
          <div className='container-85'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='footerDescription linksContainer'>
                  <h5 className='mb-2 orange'>About Us</h5>
                  <p className='white'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using more-or-less
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='linksContainer2 linksContainer'>
                  <h5 className='mb-2 orange'>Follow Us</h5>
                  <div className='followUsWrapper'>
                    <a href='' target='_blank'>
                      <ImFacebook2 color='white' size='20px' />
                    </a>
                    <a href='' target='_blank'>
                      <AiFillInstagram color='white' size='28px' />
                    </a>
                    <a href='' target='_blank'>
                      <FaTwitterSquare color='white' size='22px' />
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='linksContainer'>
                  <h5 className='mb-2 orange'>Contact Us</h5>
                  <ul>
                    <a href='#facebook'>
                      <li className='mb-2 white'>Someone@email.com</li>
                    </a>
                    <a href='#instagram'>
                      <li className='mb-2 white'>+92 309-2422648</li>
                    </a>
                    <a href='#twitter'>
                      <li className='mb-2 white'>
                        Block 4, Gulshan Iqbal, Karachi, Sindh.
                      </li>
                    </a>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        <div className='footer'>
          <button
            className='editBtnWrapper button'
            onClick={() => {
              handleOpenEditFooterModal();
              // handleOpenAlertModal();
            }}
          >
            <MdModeEdit className='gray' size='30' />
          </button>
          <div className='container-85'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='footerDescription linksContainer'>
                  <h5 className='mb-2 orange'>About Us</h5>
                  <p className='white'>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using more-or-less
                  </p>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='linksContainer2 linksContainer'>
                  <h5 className='mb-2 orange'>Follow</h5>
                  <div className='followUsWrapper'>
                    <a href='' target='_blank'>
                      <ImFacebook2 color='white' size='20px' />
                    </a>
                    <a href='' target='_blank'>
                      <AiFillInstagram color='white' size='28px' />
                    </a>
                    <a href='' target='_blank'>
                      <FaTwitterSquare color='white' size='22px' />
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                <div className='linksContainer'>
                  <h5 className='mb-2 orange'>Contact Us</h5>
                  <ul>
                    <a href='#facebook'>
                      <li className='mb-2 white'>Someone@email.com</li>
                    </a>
                    <a href='#instagram'>
                      <li className='mb-2 white'>+92 309-2422648</li>
                    </a>
                    <a href='#twitter'>
                      <li className='mb-2 white'>
                        Block 4, Gulshan Iqbal, Karachi, Sindh.
                      </li>
                    </a>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
      <EditFooterModal
        editFooterModal={editFooterModal}
        handleCloseEditFooterModal={handleCloseEditFooterModal}
      />
      {/* <AlertModal
        type='success'
        modalTitle='Confirm Delete'
        modalDescription='Please confirm that you want to delete item'
        openAlertModal={alertModal}
        closeAlertModal={handleCloseAlertModal}
        btn1Title='Cancel'
        btn2Title='Delete'
        btnColor='#24be59'
      /> */}
      {/* <AlertModal
        type='success'
        modalTitle='Deleted Successfully!'
        modalDescription='Extra has been deleted successfully. If you think it was a mistake.'
        linkTitle='Undo'
        linkPath='/admin/home'
        openAlertModal={alertModal}
        closeAlertModal={handleCloseAlertModal}
        width={700}
        modalPosition={100}
        btn1Title='Cancel'
        btn2Title='Okay'
        btnColor='#24be59' // green
        // btnColor='#fd2b2a' // red
        // btnColor='#F46B0D' // orange
        // centered={true}
      /> */}
    </>
  );
};

export default withRouter(Footer);
