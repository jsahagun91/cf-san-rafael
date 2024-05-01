import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import './ServicesSection.css';

function ServicesSection() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const [items, setItems] = useState([
        { id: 1, content: 'Concrete Pumping Services ', title:'Serving Marin, Sonoma, and Napa County', description: '', price: '', imageUrl: 'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'  },
        { id: 2, content: 'Quality First', title:'Your satisfaction is our priority',description: '', imageUrl: 'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
        { id: 3, content: 'Service', title: '', description: 'Our service is designed to allow you to place concrete more efficiently and faster, saving both time and labor. ', imageUrl: 'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
    ]);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
        <div className='services-container'>
            {/* <h1>Services</h1> */}
        <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
            <motion.div 
                drag="x" 
                dragConstraints={{ right: 0, left: -width }} 
                className='inner-carousel'
            >
                {items.map(item => (
                    <motion.div 
                        className='item' 
                        key={item.id}
                        style={{ backgroundImage: `url(${item.imageUrl})`, background: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.1)), url(${item.imageUrl})` }} /* Use item's imageUrl property */
                    >
                        <div className='item-content' >
                            {item.content}
                            <p className='item-title'>{item.title}</p>
                            <p className='item-description'>{item.description}</p>
                            <p className='item-price'></p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
        </div>
        </>
    );
}

export default ServicesSection;
