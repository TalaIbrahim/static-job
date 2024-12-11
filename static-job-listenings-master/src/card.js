import React, { useState } from "react";
import './card.css';
function Card({job}) {
    // const newDiv =null;
    // const featuredDiv = null ;
    // if (job.neww == true) {
    //     newDiv = <div className = "new">new</div>
    // }
    // if (job.featured) {
    //     featuredDiv = <div className = "featured">featured</div>
    // }

    //To add border if click on card

    const [isSelected, setIsSelected] = useState(false);

    const handleSelected = () => {
        setIsSelected(true);
    };

    // For the tags on right 

   const info = [job.role, job.level];

    for (const language of job.languages) {
        info.push(language);
    }
    
    for (const tool of job.tools) {
        info.push(tool);
    }


    //When focus on info 
    const [focusedIndex, setFocusedIndex] = useState(null);

    const handleFocus = (index) => {
        setFocusedIndex(index);
    };

    const handleBlur = () => {
        setFocusedIndex(null);
    };


    return (
        // Card
        <div className={`card ${isSelected ? 'selected-card' : ''}`}
        onClick={handleSelected} tabIndex="0">

            <div className='card-left'>
                {/* LOGO */}
                <div className='logo-div' 
                // style={{ backgroundImage: `url(${job.logo})` }}
                >
                    {/* {job.logo} */}
                </div>

                {/* Info on left  */}
                <div all-info>
                    <div className ='general-info'>
                        <div className='company'>{job.company}</div>
                        {/* is it better to add and remove classes ? (display none , block) */}
                        {job.new && <div className = "new">NEW!</div>}
                        {job.featured&&<div className = "featured">FEATURED</div>}
                    </div>
                    <div className='position'>{job.position}</div>
                    <div className='publish-info'>
                      {job.postedAt} • {job.contract} • {job.location}
                    </div>
                </div>

            </div>
            <div className="separator"></div>
            <div className='card-right'>
                {/* Tags for filltering */}
                <div className="all-tags">
                    {
                        info.map((i,index) => (
                            <div  key={index} className={`info ${focusedIndex === index ? 'show' : ''}`} tabIndex="0"
                            onFocus={() => handleFocus(index)}
                            onBlur={handleBlur}>
                                {i}
                            </div>
                        )
                    )
                    }
                </div>
            </div>

        </div>
    );
}

export default Card;
