import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import './ScheduleSection.css';

import logo from '../../images/logo.png';
import capitolCity from '../../images/capitol-city-logo.png'
import afc from '../../images/afc-solano-logo.png'
import sv from '../../images/sv-Galaxy-logo.png'
import sfc from '../../images/selma-fc-logo.png'

function ScheduleSection() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const [items, setItems] = useState([
        { id: 1, dateTime: '4/20/24 7:00 PM', team1: { logoUrl: logo, name: 'CFSR', score: 6 }, team2: { logoUrl: capitolCity, name: 'CC', score: 0 }},
        { id: 2, dateTime: '5/5/24 7:00 PM', team1: { logoUrl: afc, name: 'AFCS', score: '' }, team2: { logoUrl: logo, name: 'CFSR', score: '' }},
        { id: 3, dateTime: '5/18/24 2:00 PM', team1: { logoUrl: sv, name: 'AFCS', score: '' }, team2: { logoUrl: logo, name: 'CFSR', score: '' }},
        { id: 4, dateTime: '5/25/24 2:00 PM', team1: { logoUrl: logo, name: 'CFSR', score: '' }, team2: { logoUrl: sfc, name: 'SFC', score: '' }},
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
                              <div className="team-info">
                                <img src={item.team1.logoUrl} alt="Team 1 Logo" className="team-logo" />
                                <p>{item.team1.name}</p>
                              </div>
                              <div className="team-score">
                                <p>{item.team1.score}</p>
                              </div>
                            </div>
                            {/* Team 2 */}
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
