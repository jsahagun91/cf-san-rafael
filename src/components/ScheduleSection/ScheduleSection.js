import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import './ScheduleSection.css';

import logo from '../../images/logo.png';
import capitolCity from '../../images/capitol-city-logo.png';
import afc from '../../images/afc-solano-logo.png';
import sv from '../../images/sv-Galaxy-logo.png';
import sfc from '../../images/selma-fc-logo.png';

function ScheduleSection() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const controls = useAnimation();
    const items = [
        { id: 1, dateTime: '4/20/24 7:00 PM', team1: { logoUrl: logo, name: 'CFSR', score: 6 }, team2: { logoUrl: capitolCity, name: 'CC', score: 0 }},
        { id: 2, dateTime: '5/5/24 7:00 PM', team1: { logoUrl: afc, name: 'AFCS', score: '' }, team2: { logoUrl: logo, name: 'CFSR', score: '' }},
        { id: 3, dateTime: '5/18/24 2:00 PM', team1: { logoUrl: sv, name: 'AFCS', score: '' }, team2: { logoUrl: logo, name: 'CFSR', score: '' }},
        { id: 4, dateTime: '5/25/24 2:00 PM', team1: { logoUrl: logo, name: 'CFSR', score: '' }, team2: { logoUrl: sfc, name: 'SFC', score: '' }},
    ];

    useEffect(() => {
        const now = new Date();
        const distances = items.map(item => Math.abs(new Date(item.dateTime) - now));
        const closestItemIndex = distances.indexOf(Math.min(...distances));
        const initialXOffset = closestItemIndex * -176; // Assuming each item is 176px wide
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        
        // Set initial position with a delay to ensure layout is updated
        setTimeout(() => {
            controls.start({ x: initialXOffset + 20 });
        }, 100);
    }, [controls]);

    return (
        <>
        <h5 className='schedule'> Schedule </h5>
        <div className='schedule-container'>
            <motion.div ref={carousel} className='schedule-carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right: 0, left: -width }}
                    className='schedule-inner-carousel'
                    animate={controls}
                >
                    {items.map((item, index) => (
                        <motion.div className='schedule-item' key={item.id}>
                            <p className='date-time'>{item.dateTime}</p>
                            <div className='team'>
                                <div className="team-info">
                                    <img src={item.team1.logoUrl} alt="Team 1 Logo" className="team-logo" />
                                    <p>{item.team1.name}</p>
                                </div>
                                <div className="team-score">
                                    <p>{item.team1.score}</p>
                                </div>
                            </div>
                            <div className='team'>
                                <div className="team-info">
                                    <img src={item.team2.logoUrl} alt="Team 2 Logo" className="team-logo" />
                                    <p>{item.team2.name}</p>
                                </div>
                                <div className="team-score">
                                    <p>{item.team2.score}</p>
                                </div>
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
