'use client';
import { Variants, useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FC, useEffect } from "react";



const PortfolioSection: FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({triggerOnce: true});
    const variantsTopLeft: Variants = {
        visible: {opacity:1, x:0, y:0},
        hidden: {opacity:0 , x:-100, y:-100}
    } 

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        }
        else{
            controls.start("hidden")
        }
    }, [controls, inView])

    return (
        <div ref={ref} className="w-full my-10 px-24">
            <motion.div
             initial= "hidden"
             animate= {controls}
             variants={variantsTopLeft}
             transition={{ duration: 0.5, delay: 0.7 }}
             >test
            </motion.div>
        </div>
    )
    

}
export default PortfolioSection