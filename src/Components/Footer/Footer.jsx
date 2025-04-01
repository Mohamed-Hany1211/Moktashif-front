import React from 'react'
import style from './Footer.module.css';
export default function Footer() {
    return (
        <footer className={`${style.footerStyle} p-2  text-center fixed-bottom`}>
            <div className={` ${style.copyright}`}>Copyright © 2022 BRIX | All Rights Reserved</div>
            <div className={``}>
                <div className=''>
                    <i className={`fa-brands fa-facebook-f ${style.social_icons}`} />
                    <i className={`fa-brands fa-x-twitter ${style.social_icons}`}/>
                    <i className={`fa-brands fa-instagram ${style.social_icons}`} />
                    <i className={`fa-brands fa-linkedin-in ${style.social_icons}`} />
                </div>
            </div>
        </footer>
    )
}
