import React, { useState ,useEffect } from "react";
import './card.css';
import'./popup.css';
import Popup from "./popup";

function Card({ job ,darkMode }) {
    // For popup
    const [showPopup, setPopup] = useState(false);

    const cardSelect = () => {
        setPopup(true);
    };

    const closePopup = () => {
        setPopup(false);
    };

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        } 
    }, [showPopup]);

    // For the tags on the right
    const info = [job.role, job.level];
    for (const language of job.languages) {
        info.push(language);
    }
    for (const tool of job.tools) {
        info.push(tool);
    }

    // When focus on info
    const [focusedIndex, setFocusedIndex] = useState(null);

    const handleFocus = (index) => {
        setFocusedIndex(index);
    };

    const handleBlur = () => {
        setFocusedIndex(null);
    };

    // Info on left div
    const allinfo = (
        <div className="all-info">
            <div className="general-info">
                <div className={`company ${darkMode ? "company-dark" : ""}`}>{job.company}</div>
                {job.new && <div className="new">NEW!</div>}
                {job.featured && <div className="featured">FEATURED</div>}
            </div>
            <div className={`position ${darkMode ? "position-dark" : ""}`}>{job.position}</div>
            <div className={`publish-info ${darkMode ? "publish-dark" : ""}`}>
                {job.postedAt} • {job.contract} • {job.location}
            </div>
        </div>
    );

    // Tags div
    const tags = (
        <div className="all-tags">
            {info.map((i, index) => (
                <div
                    key={index}
                    className={`info ${darkMode ? "dark-info" : ""} ${focusedIndex === index ? "show" : ""}`}
                    tabIndex="0"
                    onFocus={() => handleFocus(index)}
                    onBlur={handleBlur}
                >
                    {i}
                </div>
            ))}
        </div>
    );

    // Image div
    const imagee = <div className="logo-div"></div>;

    return (
        <div >
            {/* Card */}
            <div className={`card ${darkMode ? "card-dark" : ""}`} onClick={cardSelect} tabIndex="0">
                <div className="card-left">
                    {/* LOGO */}
                    {imagee}
                    {/* info */}
                    {allinfo}
                </div>
                <div className="separator"></div>
                <div className="card-right">
                    
                    {tags}
                </div>
            </div>

            {/* Popup */}
            {showPopup && <Popup closePopup={closePopup} imagee={imagee} tags={tags} allinfo={allinfo} darkMode={darkMode}></Popup>}
        </div>
    );
}

export default Card;
