import React from 'react';
import AboutmeStyle from '../Style/AboutmeStyle.css'

const AboutMe = () => {
    return (
        <>
            <div className='container mt-5'>
                <h1 style={{ fontSize: '30px', color: 'black' }}>About Me</h1>
                <hr className='hrs' />
                <div className='row mt-5'>
                    <img src="https://i.ibb.co/QXq7Wkp/anuimg.jpg" data-aos="zoom-in-right" className="rounded float-left" style={{ height: '335px', width: '250px', objectFit: 'cover' }} />
                    <div className='col-sm-8 mt-3' data-aos="zoom-in-left">
                        <h5>ReactJs Developer & <span style={{ color: 'rgb(95, 207, 128)' }} >Front-end Developer</span></h5>
                        <i>Seasoned Frontend Developer with 1 year of hands-on experience creating user-friendly and
                            visually appealing web interfaces. Proficient in ReactJs, JavaScript, Redux, HTML, CSS, Bootstrap,NodeJs, MongoDB
                            and , I thrive on turning design concepts into responsive, interactive websites. Eager to leverage
                            my expertise to collaborate with cross-functional teams, enhance user experiences, and tackle
                            new challenges in a dynamic environment.</i> <br />
                        <a className=" mt-3 hire  btn-success2" href="https://www.linkedin.com/in/anubhavsingh26/y" role="button">Hire Me</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMe;