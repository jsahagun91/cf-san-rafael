import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from "react";
import './GallerySection.css';

import gallery1 from '../../images/gallery-1.jpg'
import gallery2 from '../../images/gallery-2.jpg'
import gallery3 from '../../images/gallery-3.jpg'
import gallery4 from '../../images/gallery-4.jpg'

function GallerySection() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const [items, setItems] = useState([
        { id: 1, content: '', title:'', description: '', price: '', imageUrl: gallery1  },
        { id: 2, content: '', title:'',description: '', imageUrl: gallery2 },
        { id: 3, content: '', title:'',description: '', imageUrl: gallery3 },
        { id: 4, content: '', title:'',description: '', imageUrl: gallery4 },
    ]);

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <>
        <div className='gallery-container'>
            <h2>Gallery</h2>
        <motion.div ref={carousel} className='gallery-carousel' whileTap={{cursor: "grabbing"}}>
            <motion.div 
                drag="x" 
                dragConstraints={{ right: 0, left: -width }} 
                className='gallery-inner-carousel'
            >
                {items.map(item => (
                    <motion.div 
                        className='gallery-item' 
                        key={item.id}
                        style={{ background: `url(${item.imageUrl})` }} /* Use item's imageUrl property */
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

export default GallerySection;
