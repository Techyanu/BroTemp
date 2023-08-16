import React from 'react';
import { CiHeart, CiUser, CiInstagram, CiLinkedin, CiTwitter,CiFacebook } from "react-icons/ci";
import Avatar from 'react-avatar';
import PopularStyle from '../Style/PopularStyle.css'


const arr = [
    {
        id: '1',
        title: 'Website Design',
        url: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-1.jpg',
        cat: 'Web Development',
        price: '$150',
        pricce2: '',
        user: '65',
        url1: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-1.jpg',
    },
    {
        id: '2',
        title: 'Search Engine Optimization',
        url: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-2.jpg',
        cat: 'Marketing',
        price: '$180',
        pricce2: '',
        user: '70',
        url1: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg',
    },
    {
        id: '3',
        title: 'Copywriting',
        url: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/course-3.jpg',
        cat: 'Content',
        price: '$100',
        pricce2: '',
        user: '50',
        url1: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg',

    }
]

const data = [
    {
        id: '1',
        url: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-1.jpg',
    },
    {
        id: '2',
        url: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-2.jpg',
    },
    {
        id: '3',
        url: 'https://bootstrapmade.com/demo/templates/Mentor/assets/img/trainers/trainer-3.jpg',
    }
]

const PopularCourse = () => {
    return (
        <>
            <div className='container mt-5'>
                <span className='mt-5 coursetxt'>Course</span>
                <hr className="hrs" />
                <h1 className='h1style'>POPULAR COURSE</h1>
                <div className='row justify-content-between mt-5' data-aos="zoom-in-up">
                    {arr.map((items) =>
                        <div className=" col-sm-4  mt-3" style={{ margin: 'inherit' }}>
                            <img className='card-img-top' src={items.url} />
                            <div className="card-body cardbor">
                                <div className="d-flex" >
                                    <div className="cat mt-3 p-2 flex-grow-1">{items.cat}</div>
                                    <div className="p-2 flex-grow-1"></div>
                                    <div className=" mt-3 p-2"><b>{items.price}</b></div>
                                </div>
                                <h5 className=" mt-3 card-title">{items.title}</h5>
                                <div className=" mt-3 card-text p-2" style={{ fontSize: '14ppx' }}><i style={{ fontSize: '14px' }}>Some quick example text to build on the card title and make up the bulk of the card's content Some quick example text to build on the card.</i></div> <hr />
                                <div className="d-flex">
                                    <div className="mt-1">
                                        <Avatar style={{ marginLeft: '10px' }} size="35" round={true} src={items.url1} />
                                    </div>
                                    <div className=" flex-grow-1 mb-3"></div>
                                    <div className=" p-2 mb-3"><CiUser /><b>$129</b></div>
                                    <div className=" p-2 mb-3"><CiHeart /><b>$120</b></div>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
                <div className="row container  mt-5" data-aos="flip-left" data-aos-duration="1000">
                    {data.map((ele) =>
                        <div className="col-sm-4 mt-5">
                            <img className="card-img-top" src={ele.url} alt="Card image cap" />
                            <div className="column">
                                <div className='flex justifiy-content-center' style={{ border: '2px solid #eef0ef' }}>
                                    <h6 className="mt-3" style={{ textAlign: 'center' }}>Walter White</h6>
                                    <p className='cattxt' >Web Development</p>
                                    <i className="tuttext">Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</i>
                                    <div className="row text-center mt-3 mb-5">
                                        <div className="col-sm-4"></div>
                                        <div className="col-sm-1"><CiInstagram /></div>
                                        <div className="col-sm-1"><CiLinkedin /></div>
                                        <div className="col-sm-1"><CiTwitter/></div>
                                        <div className="col-sm-1"><CiFacebook/></div>
                                        <div className="col-ms-4"></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    )

}

export default PopularCourse;