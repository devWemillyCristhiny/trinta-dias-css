import React from 'react';
import './Skills.css'

export default function Skills() {
 return (
   <div className="container">
       <h2>CSS Skills Bar UI Design</h2>
        <div className="skills">
            <span className="name">Html</span>
            <div className="percent">
                <div className="progress" style={{width: '64%'}}></div>
            </div>
            <span className="value">64%</span>
        </div>
        <div className="skills">
            <span className="name">CSS</span>
            <div className="percent">
                <div className="progress" style={{width: '52%'}}></div>
            </div>
            <span className="value">52%</span>
        </div>
        <div className="skills">
            <span className="name">Javascript</span>
            <div className="percent">
                <div className="progress" style={{width: '72%'}}></div>
            </div>
            <span className="value">72%</span>
        </div>
        <div className="skills">
            <span className="name">Concluído!!!</span>
            <div className="percent">
                <div className="progress" style={{width: '100%'}}></div>
            </div>
            <span className="value">100%</span>
        </div>
    </div>
 ); 
}