import React from 'react'
import { CiImageOn, CiPenpot, CiVault, CiCircleChevRight } from "react-icons/ci";
import WhychooseStyle from '../Style/WhychooseStyle.css'


const data = [
    {
        id: '1',
        title: 'Corporis voluptates sit',
        par: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        ic: <CiVault className='iconstyle' />

    },
    {
        id: '1',
        title: 'Corporis voluptates sit',
        par: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        ic: <CiPenpot className='iconstyle' />

    },
    {
        id: '1',
        title: 'Corporis voluptates sit',
        par: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
        ic: <CiImageOn className='iconstyle' />

    }
]



const WhyChoose = () => {
    return (

        <>
            <div className='mt-5 container'>
                <div className=' row  justify-content-evenly'>
                    <div className='col-sm-4 text-center card mt-2' data-aos="fade-up" style={{ backgroundColor: '#5fcf80' }}>
                        <h4 className='mt-3 why'>Why Choose Mentor?</h4>
                        <div>
                            <p className="mt-3" style={{ fontSize: '16px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et.
                                Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.</p>
                        </div>
                        <div className='mt-1'>
                            <button type="button" className=" btn1 mb-5 btn-primary" style={{ fontSize: '15px' }}>Learn More <CiCircleChevRight size={20} /></button>
                        </div>
                    </div>
                    {data.map((item) =>
                        <div className="col-sm-2 card mt-2" data-aos="zoom-in" style={{ height: 'auto', textAlign: 'center' }}>
                            <div className='d-flex align-items-center justify-content-center' >
                                <div className='mt-5'>{item.ic}</div>  <br />
                            </div>
                            <h5 className='mt-5'>{item.title}</h5><br />
                            <i className='mb-3' style={{ fontSize: '14px' }}>{item.par}</i>
                        </div>

                    )}
                </div>
            </div>

        </>
    )
}
export default WhyChoose;