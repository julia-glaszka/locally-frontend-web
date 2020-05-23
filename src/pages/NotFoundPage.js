import React from 'react';
import UserProfile from '../components/user-profile/UserProfile.js';
import get from '../services/apiService.js';
// loads the Icon plugin
import { useParams } from 'react-router-dom';
import CustomFooter from '../components/common/CustomFooter.js';
import CustomNavbar from '../components/common/CustomNavbar.js';
import url from '../config/url.js';
import CustomNotFound from '../components/common/CustomNotFound.js';

const NotFoundPage = () => {
 
  return  <div>
    <CustomNavbar/>
    <CustomNotFound/>
    <CustomFooter/>
 </div>

}

export default NotFoundPage;

