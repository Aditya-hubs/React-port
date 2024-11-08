// import React from 'react';
// import IconLink from "./IconLink";
// import { Box } from "@mui/material";
// import './Portfolio.scss';

// function PortfolioBlock(props) {
//    const { image, live, source, title } = props;
//    return (
//       <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} style={{ margin: '50px' }}>
//          <Box component={'img'} src={image} alt={'mockup'} className="portfolio-image" />
//          <h1 style={{ fontSize: '2rem', marginTop: '40px', color: 'pink' }}>{title}</h1>
//          <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
//               alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
//             <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
//                <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
//             </Box>
//          </Box>
//       </Box>
//    );
// }

// export default PortfolioBlock;



import React, { useEffect, useRef, useState } from 'react';
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import './Portfolio.scss';

function PortfolioBlock(props) {
   const { image, live, source, title } = props;
   const [isVisible, setIsVisible] = useState(false); // To track visibility
   const portfolioRef = useRef(null); // Ref for the portfolio block

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true); // Set visible when element enters the viewport
               observer.unobserve(portfolioRef.current); // Stop observing after it appears
            }
         },
         {
            threshold: 0.5, // Trigger when 50% of the element is visible
         }
      );

      if (portfolioRef.current) {
         observer.observe(portfolioRef.current); // Start observing the element
      }

      return () => {
         if (portfolioRef.current) {
            observer.unobserve(portfolioRef.current); // Cleanup observer on component unmount
         }
      };
   }, []);

   return (
      <Box 
         ref={portfolioRef} 
         className={`portfolio-block ${isVisible ? 'visible' : ''}`} 
         display={'flex'} 
         flexDirection={'column'} 
         justifyContent={'center'} 
         alignItems={'center'} 
         style={{ margin: '50px' }}
      >
         <Box component={'img'} src={image} alt={'mockup'} className="portfolio-image" />
         <h1 style={{ fontSize: '2rem', marginTop: '40px', color: 'pink' }}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} />
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;

