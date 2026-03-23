import React from 'react';
import OImg from '../assets/OllyImg.webp';
import Searching from '../assets/search-icon-png-21.png';
import Cart from '../assets/Cart2.webp';
import sleep from '../assets/sleep.webp';
import hair from '../assets/hair.webp';
import beauty from '../assets/beauty.webp';
import happy from '../assets/happy.webp';
export default function Olly(){




    return(
        <div>
          <div className='navUp'>
          <h4>FREE Shiping on Orders over $59 |<span> SHOP NOW</span></h4>
          </div>

          <nav className='NavBar'>
            <div className='Logo'>
            <img src={OImg} alt="OllyApp-Logo" height={30} width={100}/>
            </div>
            <ul className='listStyle'>
                <li>SHOP</li>
                <li>INSIDE THE PRODUCT</li>
                <li>ABOUT</li>
                <li>OUR MISSION</li>
            </ul>
            <ul className='rightList'>
            <li><img src={Searching} alt="Search Image" height={15} width={20}/></li>
            <li>LOGIN</li>
            <li><button id='shop'>SHOP NOW</button></li>
            <li><img src={Cart} alt="Cart Image" height={21} width={23}/></li>
            </ul>
            
          </nav>

          <div className='content'>
            
            <h1 className='heading'>Show By Category</h1>
            
            <div className='products'>
              
              <div className='card'>
                 <img src={sleep} height={300} width={350}/>
                 <h3>DEEP SLEEP</h3>
              </div>

              <div className='card'>
                 <img src={hair} height={300} width={350}/>
                 <h3>HAIR GROWTH</h3>
              </div>

              <div className='card-2'>
                <img src={beauty} height={300} width={350}/>
                <h3  id='beauty'>BEAUTY FROM WITHIN</h3>
              </div>

              <div className='card-2'>
                <img src={happy} height={296} width={272}/>
                <h3>MOOD SUPPORT</h3>
              </div>

            </div>

          </div>

          <button className='support'>&#10067;support</button>
        </div>
    );
}