import React, { useEffect } from 'react';
import { CiRainbow, CiShop, CiAlignBottom, CiCalendar, CiBank, CiDatabase, CiBrightnessDown, CiStickyNote, CiHome, CiGrid42, CiMusicNote1, CiStreamOn } from "react-icons/ci";
import ListitemStyle from '../Style/ListitemStyle.css';
import Aos from 'aos';
import 'aos/dist/aos.css'



const Element = [
    {
        id: '1',
        title: 'Lorem Ipsum',
        icon: <CiShop className='icons' style={{ color:'#ffbb2c' }} />
    },
    {
        id: '2',
        title: 'Dolor Sitema',
        icon: <CiAlignBottom className='icons' style={{color: '#5578ff'}} />
    },
    {
        id: '3',
        title: 'Sed perspiciatis',
        icon: <CiCalendar className='icons' style={{ color: '#e80368', }} />
    },
    {
        id: '4',
        title: 'Magni Dolores',
        icon: <CiBank  className='icons' style={{color: '#e361ff', }} />
    },
    {
        id: '5',
        title: 'Nemo Enim',
        icon: <CiDatabase className='icons' style={{color: '#47aeff', }} />
    },
    {
        id: '6',
        title: 'Eiusmod Tempor',
        icon: <CiBrightnessDown className='icons' style={{color: '#ffa76e', }} />
    },
    {
        id: '7',
        title: 'Midela Teren',
        icon: <CiStickyNote className='icons' style={{color: '#11dbcf', }} />
    },
    {
        id: '8',
        title: 'Pira Neve',
        icon: <CiHome className='icons' style={{color: '#4233ff', }} />
    },
    {
        id: '9',
        title: 'Dirada Pack',
        icon: <CiGrid42  className='icons' style={{color: '#b2904f', }} />
    },
    {
        id: '10',
        title: 'Moton Ideal',
        icon: <CiMusicNote1 className='icons' style={{color: '#b20969e', }} />
    },
    {
        id: '11',
        title: 'Verdo Park',
        icon: <CiStreamOn className='icons' style={{color: '#ff5828', }} />
    },
    {
        id: '12',
        title: 'Flavor Nivelanda',
        icon: <CiRainbow className='icons' style={{color: '#29cc61', }} />
    }
]


const ListItems = () => {

    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    return (
        <>
            <div className='container mt-5' data-aos="zoom-in-up">
                <div className='row d-flex flex-wrap justify-content-around'>
                    {
                        Element.map((els) =>
                            <div className=' col-md-4 mt-3 feature main'>
                                <div style={{ float: 'left' }}>{els.icon}</div>
                                <div className='Atext'>{els.title}</div>

                            </div>
                        )}
                </div>
            </div>
        </>
    )
}
export default ListItems;