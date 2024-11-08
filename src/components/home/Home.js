

import React, { useEffect, useRef, useState } from 'react';
import Style from './Home.module.scss';
import me from '../../img/try.png';
import classNames from 'classnames';
import EmojiBullet from "./EmojiBullet";
import SocialIcon from "./SocialIcon";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import Train from './Train.js';

export default function Home({ innerRef }) {
   const [isVisible, setIsVisible] = useState(false); 
   const homeRef = useRef(null); 
   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true); 
               observer.unobserve(homeRef.current); 
            }
         },
         {
            threshold: 0.5, 
         }
      );

      if (homeRef.current) {
         observer.observe(homeRef.current); 
      }

      return () => {
         if (homeRef.current) {
            observer.unobserve(homeRef.current); 
         }
      };
   }, []);

   return (
      <div id='only'>
      <Box 
         ref={homeRef} 
         className={classNames(Style['home-block'], { [Style.visible]: isVisible })} 
         component={'main'} 
         display={'flex'} 
         flexDirection={{ xs: 'column', md: 'row' }} 
         alignItems={'center'}
         justifyContent={'center'} 
         minHeight={'calc(100vh - 175px)'} 
         id={'home'}
      >
         <Box 
            className={classNames(Style.avatar, Style.shadowed)} 
            alt={'image of developer'} 
            style={{ background: info.gradient }} 
            component={'img'} 
            src={me} 
            width={{ xs: '35vh', md: '40vh' }}
            height={{ xs: '35vh', md: '40vh' }}
            borderRadius={'50%'} 
            p={'0.75rem'} 
            mb={{ xs: '1rem', sm: 0 }} 
            mr={{ xs: 0, md: '2rem' }}
         />
         <Box>
            <h1>Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🤚</span></h1>
            <h2>I'm {info.position}.</h2>
            <Box component={'ul'} p={'0.8rem'}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }}>
               {info.socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
      <Train />
    </div>
   );
}
