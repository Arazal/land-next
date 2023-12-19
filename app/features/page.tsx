'use client'

import Link from "next/link"
import { useEffect } from 'react';

export default function Features() {
    useEffect(() => {
        const container = document.querySelector('.features-container');
    
        // Function to add the 'move' class after a slight delay (adjust as needed)
        function startAnimation() {
          container.classList.add('move');
        }
    
        // Set a delay (1 second in this example) before adding the 'move' class
        setTimeout(startAnimation, 1000);
    
        // Cleanup function to remove listeners or perform other cleanup
        return () => {
          // Perform cleanup here if necessary
        };
      }, []); // Empty dependency arra

    return (
        <div className="features-container">
        <section className="item one">Services</section>
        <section className="item two">Products</section>
        <section className="item icon">
            <Link className="ui-button animate-bounce mainbtn" href="/">Home</Link>
        </section>
        <section className="item three">Contact</section>
        <section className="item four">About</section>
    </div>
    )
}