import React from 'react';

function IconLink(props) {
   const {link, title, icon} = props;
   return (
      <div className='mt-[50px]'>
      <a href={link} target={"_blank"} rel="noopener noreferrer " >
         <i className={icon}/> {title}
      </a>
      </div>
   );
}

export default IconLink;