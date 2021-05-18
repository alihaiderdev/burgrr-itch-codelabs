import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUsScreen from './screens/AboutUsScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import HomeScreen from './screens/HomeScreen';
import NewHomeScreen from './screens/NewHomeScreen';
import Error404Screen from './screens/Error404Screen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderPlaceScreen from './screens/OrderPlaceScreen';

// admin site imports
import GetStartedScreen from './screens/admin/GetStartedScreen';
import SignupScreen from './screens/admin/SignupScreen';
import SetupStoreScreen from './screens/admin/SetupStoreScreen';
import AdminHomeScreen from './screens/admin/AdminHomeScreen';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={NewHomeScreen} />
          <Route exact path='/home' component={HomeScreen} />
          <Route exact path='/about-us' component={AboutUsScreen} />
          <Route exact path='/delivery' component={DeliveryScreen} />
          <Route exact path='/contact-us' component={ContactUsScreen} />
          <Route exact path='/place-order' component={PlaceOrderScreen} />
          <Route exact path='/order-place' component={OrderPlaceScreen} />
          {/* Admin site routes */}
          <Route exact path='/admin/get-started' component={GetStartedScreen} />
          <Route exact path='/admin/signup' component={SignupScreen} />
          <Route exact path='/admin/setup-store' component={SetupStoreScreen} />
          <Route exact path='/admin/home' component={AdminHomeScreen} />
          <Route component={Error404Screen} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
