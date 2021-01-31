import React from 'react';
import View from './View';
import img5 from "../images/img5.jpg";


const About = () => {
  return ( 
    <>
      <View
        name="welcome to visit "
        imgsrc={img5}
        visit="/contact"
        btname="Contact Here"
      />

     </>

   );
}
 
export default About;