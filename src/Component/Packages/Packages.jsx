import React from 'react';
import stylePackage from './Packages.module.css';
import { Link } from 'react-router-dom';
const Packages = () => {
    return (
        <div>
       <section className={stylePackage.packagesSection}>
      <h2 className={stylePackage.title}>Marketing Packages</h2>
      <p className={stylePackage.subtitle}>
        Choose the right marketing package for your business needs.
      </p>

      <div className={stylePackage.packagesContainer}>
        {/* Basic */}
        <div className={stylePackage.packageCard}>
          <h3>Basic</h3>
          <p className={stylePackage.price}>$250</p>
          <ul>
            <li>2 designs</li>
            <li>1 reel</li>
            <li>Content plan</li>
          </ul>
          <Link className={`${stylePackage.btnPrimary} ${stylePackage.btnground}`} to='/FromContact'>Select Package</Link>
        </div>

        {/* Standard */}
        <div className={`${stylePackage.packageCard} ${stylePackage.popular}`}>
          <div className={stylePackage.badge}>Most Popular</div>
          <h3>Standard</h3>
          <p className={stylePackage.price}>$450</p>
          <ul>
            <li>4 designs</li>
            <li>2 reels</li>
            <li>Content plan</li>
            <li>Hashtag strategy</li>
          </ul>
          <Link className={stylePackage.btnPrimary} to='/FromContact'>Select Package</Link>
          
        </div>

        {/* Premium */}
        <div className={stylePackage.packageCard}>
          <h3>Premium</h3>
          <p className={stylePackage.price}>$750</p>
          <ul>
            <li>8 designs</li>
            <li>4 reels</li>
            <li>1 ad video</li>
            <li>Full content plan</li>
            <li>Marketing consultation session</li>
          </ul>
          <Link className={`${stylePackage.btnPrimary} ${stylePackage.btnground}`} to='/FromContact'>Select Package</Link>
        </div>
      </div>
    </section>
      <section className={stylePackage.customSolution}>
      <h3 className={stylePackage.customTitle}>Need a Custom Solution?</h3>
      <p className={stylePackage.customText}>
        Every business is unique. If none of our packages fit your specific
        needs, we can create a custom marketing solution tailored just for you.
      </p>
      <Link to='/FromContact'><button className={stylePackage.btnPrimary}>Discuss Custom Package</button></Link>
    </section>
        </div>
       

 

    );
}

export default Packages;
