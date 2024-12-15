import React, { useState } from "react";
import './popup.css';
function Popup({job,allinfo,tags,imagee,isSelected,closePopup,darkMode}) {

    
    return (  
        <div className="popup-background" onClick={closePopup}>
            <div className={`pop-up ${darkMode ? "popup-dark" : ""}`} onClick={(e) => e.stopPropagation()}>
            
                 <div className="upper">
                    <div className="upper-info">
                        {imagee}
                        {allinfo}
                    </div>
                  <div className={`close-popup ${darkMode ? "close-dark" : ""}`} onClick={closePopup}>
                    X
                  </div>  

                </div>

                <div className="lower">
                    {tags}
                </div>  
            </div>
        </div>
    )
}

export default Popup;
