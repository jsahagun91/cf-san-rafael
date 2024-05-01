import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import './ScheduleSection.css';

import logo from '../../images/logo.png';
import capitolCity from '../../images/capitol-city-logo.png'
import afc from '../../images/afc-solano-logo.png'

function ScheduleSection() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const [items, setItems] = useState([
        { id: 1, dateTime: 'Saturday April 20, 7:00 PM', team1: { logoUrl: logo, name: 'CF San Rafael', score: 6 }, team2: { logoUrl: capitolCity, name: 'Capitol City', score: 0 }},
        { id: 2, dateTime: 'Saturday May 4, TBD', team1: { logoUrl: afc, name: 'AFC Solano', score: '' }, team2: { logoUrl: logo, name: 'CF San Rafael', score: '' }},
        // Add more items as needed
    ]);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
        <h5 className='schedule'> Schedule </h5>
        <div className='schedule-container'>
            {/* Carousel */}
            <motion.div ref={carousel} className='schedule-carousel' whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }} 
                    className='schedule-inner-carousel'
                >
                    {/* Team Sections */}
                    {items.map(item => (
                        
                        <motion.div 
                            className='schedule-item' 
                            key={item.id}
                        >
                            {/* Date and Time */}
                            <p className='date-time'>{item.dateTime}</p>

                            {/* Team 1 */}
                            <div className='team'>
                                <img src={item.team1.logoUrl} alt="Team 1 Logo" />
                                <p>{item.team1.name}</p>
                                <p>{item.team1.score}</p>
                            </div>
                            {/* Team 2 */}
                            <div className='team'>
                                <img src={item.team2.logoUrl} alt="Team 2 Logo" />
                                <p>{item.team2.name}</p>
                                <p>{item.team2.score}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
        </>
    );
}

export default ScheduleSection;
