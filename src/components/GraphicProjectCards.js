// src/components/GraphicProjectCards.jsx
import React from 'react';
import  { useState } from 'react';

import './GraphicDesign.css';

// import logo1 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/9_bjvnsx.png';
// import logo2 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/8_lyqyya.png';
// import logo3 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/7_t2tihr.png';
// // import logo4 from '../assets/logos/5.png';
// import logo5 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794514/6_dfxffc.png';
// import logo6 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/4_wugtrr.png';
// import logo7 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794504/3_awbih8.jpg';
// import logo8 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/2_tca0qc.png';
// import logo9 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794511/19_zhumgt.png';
// import logo10 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794509/16_wllvjb.png';
// import logo11 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794510/18_cqxuh1.png';
// import logo12 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794510/17_esec32.png';
// import logo13 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794508/15_at7ntd.png';
// import logo14 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/14_ms5oou.png';
// import logo15 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/13_yxcdbn.png';
// import logo16 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794506/12_ljnrhp.png';
// import logo17 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794506/11_vldogc.png';
// import logo18 from 'https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/10_pbv2mf.png';
// import tshirt1 from '../assets/Shirts/1.png';
// import tshirt2 from '../assets/Shirts/2.png';
// import tshirt3 from '../assets/Shirts/3.png';
// import tshirt4 from '../assets/Shirts/4.png';
// import tshirt5 from '../assets/Shirts/5.png';
// import tshirt6 from '../assets/Shirts/6.png';
// import tshirt7 from '../assets/Shirts/7.png';
// import tshirt8 from '../assets/Shirts/8.png';
// import tshirt9 from '../assets/Shirts/9.png';
// import tshirt10 from '../assets/Shirts/10.png';
// import tshirt11 from '../assets/Shirts/11.png';
// import tshirt12 from '../assets/Shirts/12.png';
// import tshirt13 from '../assets/Shirts/13.png';
// import tshirt14 from '../assets/Shirts/14.png';
// import tshirt15 from '../assets/Shirts/15.png';
// import tshirt16 from '../assets/Shirts/16.png';
// import tshirt17 from '../assets/Shirts/17.png';
// import tshirt18 from '../assets/Shirts/18.png';
// import tshirt19 from '../assets/Shirts/19.png';
// import tshirt20 from '../assets/Shirts/20.png';
// import tshirt21 from '../assets/Shirts/21.png';
// import tshirt22 from '../assets/Shirts/22.png';
// import tshirt23 from '../assets/Shirts/23.png';
// import tshirt24 from '../assets/Shirts/24.png';
// import tshirt25 from '../assets/Shirts/25.png';
// import tshirt26 from '../assets/Shirts/26.png';
// import tshirt27 from '../assets/Shirts/27.png';
// import tshirt28 from '../assets/Shirts/28.png';
// import tshirt29 from '../assets/Shirts/29.png';
// import tshirt30 from '../assets/Shirts/30.png';
// // import tshirt31 from '../assets/Shirts/31.png';
// import tshirt32 from '../assets/Shirts/32.png';
// import tshirt33 from '../assets/Shirts/33.png';
// import tshirt34 from '../assets/Shirts/34.png';
// import tshirt35 from '../assets/Shirts/35.png';
// // import tshirt36 from '../assets/Shirts/36.png';
// import tshirt37 from '../assets/Shirts/37.png';
// import tshirt38 from '../assets/Shirts/38.png';
// import tshirt39 from '../assets/Shirts/39.png';
// import tshirt40 from '../assets/Shirts/40.png';
// import tshirt41 from '../assets/Shirts/41.png';
// import tshirt42 from '../assets/Shirts/42.png';
// import tshirt43 from '../assets/Shirts/43.png';
// import tshirt44 from '../assets/Shirts/44.png';
// import tshirt45 from '../assets/Shirts/45.png';
// import tshirt46 from '../assets/Shirts/46.png';
// import tshirt47 from '../assets/Shirts/47.png';
// import tshirt48 from '../assets/Shirts/48.png';
// import tshirt49 from '../assets/Shirts/49.png';
// import tshirt50 from '../assets/Shirts/50.png';
// import tshirt51 from '../assets/Shirts/51.png';
// import tshirt52 from '../assets/Shirts/52.png';
// import tshirt53 from '../assets/Shirts/53.png';


// import alphabet1 from '../assets/Alphabets/a.png';
// import alphabet2 from '../assets/Alphabets/b.png';
// import alphabet3 from '../assets/Alphabets/c.png';
// import alphabet4 from '../assets/Alphabets/d.png';
// import alphabet5 from '../assets/Alphabets/e.png';
// import alphabet6 from '../assets/Alphabets/f.png';
// import alphabet7 from '../assets/Alphabets/g.png';
// import alphabet8 from '../assets/Alphabets/h.png';
// import alphabet9 from '../assets/Alphabets/i.png';
// import alphabet10 from '../assets/Alphabets/j.png'; 
// import alphabet11 from '../assets/Alphabets/k.png';
// import alphabet12 from '../assets/Alphabets/l.png';
// import alphabet13 from '../assets/Alphabets/m.png';
// import alphabet14 from '../assets/Alphabets/n.png';
// import alphabet15 from '../assets/Alphabets/o.png';
// import alphabet16 from '../assets/Alphabets/p.png';
// import alphabet17 from '../assets/Alphabets/q.png';
// import alphabet18 from '../assets/Alphabets/r.png';
// import alphabet19 from '../assets/Alphabets/s.png';
// import alphabet20 from '../assets/Alphabets/t.png';
// import alphabet21 from '../assets/Alphabets/u.png';
// import alphabet22 from '../assets/Alphabets/v.png';
// import alphabet23 from '../assets/Alphabets/w.png';
// import alphabet24 from '../assets/Alphabets/x.png';
// import alphabet25 from '../assets/Alphabets/y.png';
// import alphabet26 from '../assets/Alphabets/z.png';

const assets = {
 logo : [
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/9_bjvnsx.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/8_lyqyya.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/7_t2tihr.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794514/6_dfxffc.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/4_wugtrr.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794504/3_awbih8.jpg",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/2_tca0qc.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794511/19_zhumgt.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794509/16_wllvjb.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794510/18_cqxuh1.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794510/17_esec32.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794508/15_at7ntd.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/14_ms5oou.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794507/13_yxcdbn.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794506/12_ljnrhp.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794506/11_vldogc.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751794505/10_pbv2mf.png"
],
tshirt:["https://res.cloudinary.com/dugqqxf20/image/upload/v1751799747/1_u4aj09.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799751/2_jmlxxh.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799754/3_gscezm.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799758/4_rjwukt.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799764/5_msfx8y.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799765/6_vxntdx.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799774/8_mwkjko.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799774/7_ts6chu.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799781/9_boyqze.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799786/10_ovblja.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799791/11_bbnfkl.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799792/12_cko9cd.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799800/13_zwxyoa.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799804/14_owqigh.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799809/15_r0ebu2.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799814/16_yvtosq.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799855/17_kqhsjn.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799862/18_jsxr9w.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799867/19_gonazl.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799869/20_tvozcr.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799880/22_acfzto.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799881/21_p0ogsx.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799887/23_ruaqup.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799889/24_dpjhac.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799894/25_lnfxy8.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799900/26_wqj3gp.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799904/27_jfv0fa.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799911/28_noagao.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799917/29_vfsp3x.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799919/30_vcx47f.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799925/31_olc8ap.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799930/32_ipgjzt.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799935/33_e3a9gz.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799937/34_fnj8o1.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799943/35_pbefum.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799948/36_rs6z5f.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799951/37_dd3rhg.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799957/38_yqeog3.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799964/39_etpkjb.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799970/41_ve29fq.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799970/40_ii1k9o.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799975/42_s8zgxj.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799983/44_drpwmv.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799983/43_navxl1.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799989/45_ml3wrv.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751799995/46_qbzesj.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800000/47_ecmcjf.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800004/48_vrd9xd.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800009/49_uyq5qs.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800013/50_mccsoj.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800018/51_ocufhl.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800024/52_cmf028.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v1751800029/53_molqzv.png"
],
alphabet:
[
  "https://res.cloudinary.com/dugqqxf20/image/upload/a.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/b.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/c.png",  
  "https://res.cloudinary.com/dugqqxf20/image/upload/d.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/e.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/f.png",  
  "https://res.cloudinary.com/dugqqxf20/image/upload/g.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/h.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/i.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/j.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/k.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/l.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/m.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/n.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/o.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/p.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/q.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/r.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/s.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/t.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/u.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/v.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/w.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/x.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/y.png",
  "https://res.cloudinary.com/dugqqxf20/image/upload/z.png"
]
};

const GraphicProjectCards = ({ type }) => {
  const [showAll, setShowAll] = useState(false);
  const isTshirt = type === 'tshirt';
  const items = assets[type];
  const displayItems = isTshirt && !showAll ? items.slice(0, 10) : items;

  const whiteBgLogos = [6,9,10];

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
