import React from "react";
import './Train.scss';

function Train(){
    return(
        
        <section className="stage">
        <div className="sky">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
        <div className="train">
          <div className="wagon"></div>
          <div className="wagon"></div>
          <div className="wagon"></div>
          <div className="locomotive">
            <div className="cabin"></div>
            <div className="motor"></div>
            <div className="chimney">
              <div className="smoke"></div>
            </div>
            <div className="light"></div>
          </div>
        </div>
      </section>
  
    )
}

export default Train;