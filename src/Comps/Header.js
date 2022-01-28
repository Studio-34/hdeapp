import React from 'react';
// import logo from '../img/appIcon.png';
import headerLogo from '../img/AppLogo11.svg';
// import tiles from '../img/tiles.png';
// import rowTwo from '../img/rowTwo.png';
// import rowThree from '../img/rowThree.png';
// import rowFour from '../img/rowFour.png';
// import rowFive from '../img/rowFive.png';
// import rowSix from '../img/rowSix.png';

export default function Header() {
    return (
        <div className="mx-auto text-center mb-5 frameDiv">
            <div className='header'>
                <div className="p-4"></div>
                <div className='col-10 col-lg-4 mx-auto hero'>
                    <div className="innerHero">
                        <div className="">
                            <img className="logo"
                                src={headerLogo}
                                // style={{ height: 1000, width: 2000 }}
                                alt="HDE Logo"

                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
