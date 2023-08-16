import React from 'react';
import { CiCircleCheck } from "react-icons/ci";
import MiddleeStyle from '../Style/MiddleeStyle.css'

const Middle = () => {

    return (

        <>
            <div className=' mt-5 container'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-md-6 mt-3' data-aos="fade-up-right">
                        <h5>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h5>
                        <div >
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> <br /><br />
                            <span><CiCircleCheck className='icostyle' />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> <br />

                            <span> <CiCircleCheck className='icostyle' />Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span> <br />
                            <span> <CiCircleCheck className='icostyle' />Ullamco laboris nisi ut aliquip ex ea commodo consequat.Ullamco laboris nisi ut aliquip ex ea commodo consequat.Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span><br /><br />
                            <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </div>
                    </div>
                    <div className='col-md-5 mt-3' data-aos="zoom-in-left">

                        <div>
                            <img src="https://bootstrapmade.com/demo/templates/Mentor/assets/img/about.jpg"
                                className='img-fluid imgStyle'
                            />

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Middle;