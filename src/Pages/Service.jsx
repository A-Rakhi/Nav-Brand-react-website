import React from 'react';
import Cards from './Cards';
import Cdata from './Cdata';

const Service = () => {
    return (  
        <>
<section id ="service" >
        <h3 className="text-center mx-auto py-5 text-danger">
          Our <span style={{ fontSize:'33px' }}>Services</span>
        </h3>

        <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
               {
                 Cdata.map((value,index) =>
                 {
                   return <Cards
                     key= {index}
                     imgsrc={value.imgsrc}
                     title= {value.title} />
                 })
               }
            </div>
          </div>
        </div>
      </div>

      </section>

        </>
    );
}
 
export default Service;