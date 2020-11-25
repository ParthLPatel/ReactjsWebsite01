import React from 'react';
import { NavLink } from 'react-router-dom';

const CommonHome_About = (props)=>{
    return(

        <React.Fragment>
            <section id='header' className='d-flex'>
                <div className='container'>
                    <div className='row'>
                        {/*EntirePage*/}
                        <div className='col-10 mx-auto'>

                            <div className='row'>
                                {/*left side*/}
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                                    <h1>
                                    {props.brandHeading} 
                                    <strong className='brand-name'>{props.brandName}</strong>
                                    </h1>

                                    <h2 className className='my-3'>
                                    {props.brandMotto}
                                    </h2>

                                    <div className='mt-3'>
                                        <NavLink exact to={props.btnRouteTo} className='btn-get-started'>{props.btnValue}</NavLink>
                                    </div>
                                </div>

                                {/*right side*/}
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgSrc} className="img-fluid animated" alt='Home Img'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />

        </React.Fragment>
    );
}
export default CommonHome_About;