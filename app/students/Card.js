import React from 'react';
import './style.css';
import Image from 'next/image';
// import A from '../../public/Ab1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCommentDots, faHeart,  faShareNodes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
let A = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44xyPyV2KNaYbm0oO-E5sn0NyanhpjfjI7pd6ozdrRTJRl9Y5ixHj5dIQsAso7d9A1ms&usqp=CAU';


export default function Card({ getData, student }) {
  return (
    <div className='profile-info-card'>
      <div className="img">
        <Image src={A} alt='profile-img' className='profile-card-img' width={140} height={140}/>
      </div>
      <div className="name">
        {student.name}
      </div>
      <div className="role">
      {student.university}
      </div>
      <div className="social-medias">
        <Link href={`/card`}><FontAwesomeIcon icon={faInstagram} size='2x' className='insta'/></Link>
        <Link href={`/card`}><FontAwesomeIcon icon={faLinkedin} size='2x' className='lnkdn'/></Link>
        <Link href={`/card`}><FontAwesomeIcon icon={faGithub} size='2x' className='git'/></Link>
      </div>
      <div className="connect">
        <button>follow</button>
        <button>Message</button>
      </div>
      <div className="impression">        
        <FontAwesomeIcon icon={faHeart} size='1x' className='heart'/>
        <FontAwesomeIcon icon={faCommentDots} size='1x' className='left-border chat'/>
        <FontAwesomeIcon icon={faShareNodes} size='1x' className='left-border share'/>
      </div>
    </div>
  )
}
