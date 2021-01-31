import React from 'react';
import View from './View';
import banner from "../images/banner.jpg";


const Home = () => {
  return ( 
    <>
      <View
        name="see the beauty of nature with"
        imgsrc={banner}
        visit="/about"
        btname="Get Started"
      />

     </>

   );
}
 
export default Home;