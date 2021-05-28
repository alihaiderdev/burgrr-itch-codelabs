import React from 'react';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/store/Footer';
import Header from './components/store/Header';

// store side imports
import AboutUsScreen from './screens/store/AboutUsScreen';
import ContactUsScreen from './screens/store/ContactUsScreen';
import DeliveryScreen from './screens/store/DeliveryScreen';
import HomeScreen from './screens/store/HomeScreen';
import NewHomeScreen from './screens/store/NewHomeScreen';
import Error404Screen from './screens/store/Error404Screen';
import PlaceOrderScreen from './screens/store/PlaceOrderScreen';
import OrderPlaceScreen from './screens/store/OrderPlaceScreen';

// admin side imports
import AdminFooter from './components/admin/AdminFooter';

import GetStartedScreen from './screens/admin/GetStartedScreen';
import SignupScreen from './screens/admin/SignupScreen';
import LoginScreen from './screens/admin/LoginScreen';
import SetupStoreScreen from './screens/admin/SetupStoreScreen';
import AdminHomeScreen from './screens/admin/AdminHomeScreen';
import OrdersScreen from './screens/admin/OrdersScreen';
import StatsScreen from './screens/admin/StatsScreen';
import WhyUsScreen from './screens/admin/WhyUsScreen';
import OurSolutionScreen from './screens/admin/OurSolutionScreen';
import PricingScreen from './screens/admin/PricingScreen';
import CheckoutScreen from './screens/admin/CheckoutScreen';
import ForgetPasswordScreen from './screens/admin/ForgetPasswordScreen';
import EditProfileScreen from './screens/admin/EditProfileScreen';
// import { ScrollToTop   } from './utilities/ReuseableFunctions';

const App = () => {
  // ScrollToTop();

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

          <Route exact path='/admin/get-started' component={GetStartedScreen} />
          <Route exact path='/admin/signup' component={SignupScreen} />
          <Route exact path='/admin/setup-store' component={SetupStoreScreen} />
          <Route exact path='/admin/pricing' component={PricingScreen} />
          <Route exact path='/admin/checkout' component={CheckoutScreen} />
          <Route exact path='/admin/login' component={LoginScreen} />
          <Route
            exact
            path='/admin/forget-password'
            component={ForgetPasswordScreen}
          />
          <Route
            exact
            path='/admin/edit-profile'
            component={EditProfileScreen}
          />
          <Route exact path='/admin/home' component={AdminHomeScreen} />
          <Route exact path='/admin/orders' component={OrdersScreen} />
          <Route exact path='/admin/stats' component={StatsScreen} />
          <Route exact path='/admin/why-us' component={WhyUsScreen} />
          <Route
            exact
            path='/admin/our-solution'
            component={OurSolutionScreen}
          />
          <Route component={Error404Screen} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
