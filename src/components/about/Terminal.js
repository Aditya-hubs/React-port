import React, { useEffect, useRef, useState } from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const { text } = props;
   const [isVisible, setIsVisible] = useState(false); 
   const terminalRef = useRef(null); 

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true); 
               observer.unobserve(terminalRef.current); 
            }
         },
         {
            threshold: 0.5, 
         }
      );

      if (terminalRef.current) {
         observer.observe(terminalRef.current);
      }

      return () => {
         if (terminalRef.current) {
            observer.unobserve(terminalRef.current); 
         }
      };
   }, []);

   return (
      <Box 
         ref={terminalRef} 
         className={classNames(Style['terminal-block'], { [Style.visible]: isVisible })} 
         component={'section'} 

         width={{ xs: '80%', md: '50%' }} 
         borderRadius={'0.5rem'} 
         mb={'4rem'}
      >
         <Box 
            sx={{ backgroundColor: '#8c8c8c' }} 
            p={'0.5rem'} 
            borderRadius={'0.5rem 0.5rem 0 0'}
            fontSize={'1rem'}
         >
            <i className={classNames(iconClass, Style.red)} />
            <i className={classNames(iconClass, Style.amber)} />
            <i className={classNames(iconClass, Style.green)} />
         </Box>
         <Box 
            py={{ xs: '1rem', md: '2rem' }} 
            px={{ xs: '2rem', md: '3rem' }} 
            borderRadius={'0 0 0.5rem 0.5rem'} 
            sx={{ backgroundColor: '#27242f' }} 
            fontSize={'1.5rem'} 
            fontFamily={'Courier New, Courier, monospace'}
         >
            {text}
         </Box>
      </Box>
   );
}

export default Terminal;
