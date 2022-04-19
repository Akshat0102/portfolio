import React from "react";
import './skill-card.styles.css';

const SkillCard = ({ datapercent, title }) => {
    return (
        <div className="skill-card">
            <div className="circle"></div>
            <p className="skill-title">{title}</p>
        </div>
    )
}

export default SkillCard;