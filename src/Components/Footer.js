import React from 'react';
import FooterStyle from '../Style/FooterStyle.css'
import { AiOutlineRight } from "react-icons/ai";

const Footer = () => {
    return (

        <>
            <div className=" fluid-container d-flex flex-column h-100 mt-5" style={{ background: 'transparent' }}>
                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h1 className="text-black">BRO.</h1>
                                <span className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</span>
                                <span className="small text-muted mb-0">&copy; Copyrights. All rights reserved.</span>
                            </div>

                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-black mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li className='lineH'>  <AiOutlineRight size={15} color='#5fcf80' /><a href="#">Home</a></li>
                                    <li className='lineH'> <AiOutlineRight size={15} color='#5fcf80' /><a href="#">About Us</a></li>
                                    <li className='lineH'> <AiOutlineRight size={15} color='#5fcf80' /><a href="#">Servies</a></li>
                                    <li className='lineH'> <AiOutlineRight size={15} color='#5fcf80' /><a href="#">Terms & Policy</a></li>
                                    <li className='lineH'> <AiOutlineRight size={15} color='#5fcf80' /><a href="#">privacy & Policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-black mb-3">Our Servies</h5>
                                <ul className="list-unstyled text-muted">
                                    <li className='lineH'> <AiOutlineRight size={15} color='#5fcf80' /><a href="#">Web Design</a></li>
                                    <li className='lineH'> <AiOutlineRight size={15} color='#5fcf80' /><a href="#">Web Development</a></li>
                                    <li className='lineH'><AiOutlineRight size={15} color='#5fcf80' /><a href="#">Product Managment</a></li>
                                    <li className='lineH'><AiOutlineRight size={15} color='#5fcf80' /><a href="#">Marketing</a></li>
                                    <li className='lineH'><AiOutlineRight size={15} color='#5fcf80' /><a href="#">Graphic Dedsign</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-black mb-3">Newsletter</h5>
                                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <form action="#">
                                    <div className="input-group mb-3 mb-1">
                                        <input className="form-control" type="text" placeholder="Enter mail address" style={{ height: '45px' }} />
                                        <button className="btnF btn-success1" type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>


    )
}

export default Footer;