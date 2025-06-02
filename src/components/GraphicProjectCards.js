// src/components/GraphicProjectCards.jsx
import React from 'react';
import  { useState } from 'react';

import './GraphicDesign.css';

import logo1 from '../assets/logos/2.png';
import logo2 from '../assets/logos/3.png';
import logo3 from '../assets/logos/4.png';
// import logo4 from '../assets/logos/5.png';
import logo5 from '../assets/logos/6.png';
import logo6 from '../assets/logos/7.png';
import logo7 from '../assets/logos/8.png';
import logo8 from '../assets/logos/9.png';
import logo9 from '../assets/logos/10.png';
import logo10 from '../assets/logos/11.png';
import logo11 from '../assets/logos/12.png';
import logo12 from '../assets/logos/13.png';
import logo13 from '../assets/logos/14.png';
import logo14 from '../assets/logos/15.png';
import logo15 from '../assets/logos/16.png';
import logo16 from '../assets/logos/17.png';
import logo17 from '../assets/logos/18.png';

import tshirt1 from '../assets/Shirts/1.png';
import tshirt2 from '../assets/Shirts/2.png';
import tshirt3 from '../assets/Shirts/3.png';
import tshirt4 from '../assets/Shirts/4.png';
import tshirt5 from '../assets/Shirts/5.png';
import tshirt6 from '../assets/Shirts/6.png';
import tshirt7 from '../assets/Shirts/7.png';
import tshirt8 from '../assets/Shirts/8.png';
import tshirt9 from '../assets/Shirts/9.png';
import tshirt10 from '../assets/Shirts/10.png';
import tshirt11 from '../assets/Shirts/11.png';
import tshirt12 from '../assets/Shirts/12.png';
import tshirt13 from '../assets/Shirts/13.png';
import tshirt14 from '../assets/Shirts/14.png';
import tshirt15 from '../assets/Shirts/15.png';
import tshirt16 from '../assets/Shirts/16.png';
import tshirt17 from '../assets/Shirts/17.png';
import tshirt18 from '../assets/Shirts/18.png';
import tshirt19 from '../assets/Shirts/19.png';
import tshirt20 from '../assets/Shirts/20.png';
import tshirt21 from '../assets/Shirts/21.png';
import tshirt22 from '../assets/Shirts/22.png';
import tshirt23 from '../assets/Shirts/23.png';
import tshirt24 from '../assets/Shirts/24.png';
import tshirt25 from '../assets/Shirts/25.png';
import tshirt26 from '../assets/Shirts/26.png';
import tshirt27 from '../assets/Shirts/27.png';
import tshirt28 from '../assets/Shirts/28.png';
import tshirt29 from '../assets/Shirts/29.png';
import tshirt30 from '../assets/Shirts/30.png';
// import tshirt31 from '../assets/Shirts/31.png';
import tshirt32 from '../assets/Shirts/32.png';
import tshirt33 from '../assets/Shirts/33.png';
import tshirt34 from '../assets/Shirts/34.png';
import tshirt35 from '../assets/Shirts/35.png';
// import tshirt36 from '../assets/Shirts/36.png';
import tshirt37 from '../assets/Shirts/37.png';
import tshirt38 from '../assets/Shirts/38.png';
import tshirt39 from '../assets/Shirts/39.png';
import tshirt40 from '../assets/Shirts/40.png';
import tshirt41 from '../assets/Shirts/41.png';
import tshirt42 from '../assets/Shirts/42.png';
import tshirt43 from '../assets/Shirts/43.png';
import tshirt44 from '../assets/Shirts/44.png';
import tshirt45 from '../assets/Shirts/45.png';
import tshirt46 from '../assets/Shirts/46.png';
import tshirt47 from '../assets/Shirts/47.png';
import tshirt48 from '../assets/Shirts/48.png';
import tshirt49 from '../assets/Shirts/49.png';
import tshirt50 from '../assets/Shirts/50.png';
import tshirt51 from '../assets/Shirts/51.png';
import tshirt52 from '../assets/Shirts/52.png';
import tshirt53 from '../assets/Shirts/53.png';


import alphabet1 from '../assets/Alphabets/a.png';
import alphabet2 from '../assets/Alphabets/b.png';
import alphabet3 from '../assets/Alphabets/c.png';
import alphabet4 from '../assets/Alphabets/d.png';
import alphabet5 from '../assets/Alphabets/e.png';
import alphabet6 from '../assets/Alphabets/f.png';
import alphabet7 from '../assets/Alphabets/g.png';
import alphabet8 from '../assets/Alphabets/h.png';
import alphabet9 from '../assets/Alphabets/i.png';
import alphabet10 from '../assets/Alphabets/j.png'; 
import alphabet11 from '../assets/Alphabets/k.png';
import alphabet12 from '../assets/Alphabets/l.png';
import alphabet13 from '../assets/Alphabets/m.png';
import alphabet14 from '../assets/Alphabets/n.png';
import alphabet15 from '../assets/Alphabets/o.png';
import alphabet16 from '../assets/Alphabets/p.png';
import alphabet17 from '../assets/Alphabets/q.png';
import alphabet18 from '../assets/Alphabets/r.png';
import alphabet19 from '../assets/Alphabets/s.png';
import alphabet20 from '../assets/Alphabets/t.png';
import alphabet21 from '../assets/Alphabets/u.png';
import alphabet22 from '../assets/Alphabets/v.png';
import alphabet23 from '../assets/Alphabets/w.png';
import alphabet24 from '../assets/Alphabets/x.png';
import alphabet25 from '../assets/Alphabets/y.png';
import alphabet26 from '../assets/Alphabets/z.png';

const assets = {
  logo: [logo1, logo2, logo3, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17],
  tshirt: [tshirt1, tshirt2, tshirt3, tshirt4, tshirt5, tshirt6, tshirt7, tshirt8, tshirt9, tshirt10, tshirt11, tshirt12, tshirt13, tshirt14, tshirt15, tshirt16, tshirt17, tshirt18, tshirt19, tshirt20, tshirt21, tshirt22, tshirt23, tshirt24, tshirt25, tshirt26, tshirt27, tshirt28, tshirt29, tshirt30, tshirt32, tshirt33, tshirt34, tshirt35, tshirt37, tshirt38, tshirt39, tshirt40, tshirt41, tshirt42, tshirt43, tshirt44, tshirt45, tshirt46, tshirt47, tshirt48, tshirt49, tshirt50, tshirt51, tshirt52, tshirt53],
  alphabet: [alphabet1, alphabet2, alphabet3, alphabet4, alphabet5, alphabet6, alphabet7, alphabet8, alphabet9, alphabet10, alphabet11, alphabet12, alphabet13, alphabet14, alphabet15, alphabet16, alphabet17, alphabet18, alphabet19, alphabet20, alphabet21, alphabet22, alphabet23, alphabet24, alphabet25, alphabet26],
};

const GraphicProjectCards = ({ type }) => {
  const [showAll, setShowAll] = useState(false);
  const isTshirt = type === 'tshirt';
  const items = assets[type];
  const displayItems = isTshirt && !showAll ? items.slice(0, 10) : items;

  const whiteBgLogos = [0, 11, 15, 16];

  return (
    <div className="graphic-section">
      <div className="graphic-grid">
        {displayItems.map((img, index) => {
          const needsWhiteBg = type === 'logo' && whiteBgLogos.includes(index);
          return (
            <div className="graphic-card" key={index}>
              <img
                src={img}
                alt={`${type} ${index + 1}`}
                className={`graphic-img ${needsWhiteBg ? 'white-bg' : ''}`}
              />
            </div>
          );
        })}
      </div>
{type === 'tshirt' && (
        <>
          <div className="see-more-container">
            <button className="see-more-btn" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'See Less' : 'See More'}
            </button>
          </div>

          {showAll && (
            <div className="etsy-btn-container">
              <a
                href="https://www.etsy.com/shop/ReelandRoyl?ref=shop-header-name&listing_id=1715405948&from_page=listing" // Replace with your real Etsy link
                target="_blank"
                rel="noopener noreferrer"
                className="etsy-btn"
              >
                Visit Our Etsy Shop
              </a>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GraphicProjectCards;