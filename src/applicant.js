
import React from 'react';
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './custom-progress-bar.css';
import './applicant.css';

import {  MdAdd, MdClose,MdPowerSettingsNew } from "react-icons/md";

import { IconContext } from "react-icons";
const Applicant=({applicant})=>{
  
  // console.log(images,`./${applicant.picture}`);
  
  let img = `./assets/img/${applicant.picture}`;
  return(
    <div className="applicant-container">
      <div style={{color: '#424242', margin:'10px 10px 0px 0px', width:'10px',height:'auto',float:'right' }}>
        <MdClose />
      </div>
      <div className='applicant'>
        <div style={{ width: "85px", margin: 'auto' }}>
          <CircularProgressbarWithChildren value={applicant.percentage} strokeWidth={2} style={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',

            // Text size
            textSize: '16px',

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',
            // Colors
            pathColor: `#92c0e8`,
            textColor: '#f88',
            trailColor: 'rgba(0, 0, 0, 0.2)',
            backgroundColor: '#3e98c7',
          })}>
            <div className="rounded-applicant">
              <img src={img} alt="doge" />
            </div>
          </CircularProgressbarWithChildren>
        </div>
        <div className='percentage'>{applicant.percentage}% MATCH</div>
        <div className='name'>{applicant.name}
          <IconContext.Provider
            value={{
              style: { verticalAlign: 'middle', color:'#FCB800',width:"16px", height:"16px"} ,
              attr: { focusable: "false" }
            }}
          >
          <MdPowerSettingsNew width="40px" height="40px" />
          </IconContext.Provider>
        </div>
        <div className='location'>{applicant.location}</div>
        <div className='description'>{applicant.description}</div>
      </div>
      <div className='applicant-footer'>
        <button>
        <IconContext.Provider
            value={{
              style: { verticalAlign: 'middle', width:"18px", height:"18px"} ,
              attr: { focusable: "false" }
            }}
          >

          <MdClose style={{height:"36"}}/><span>pass</span>
          </IconContext.Provider>
        </button>
        <button >
        <IconContext.Provider
            value={{
              style: { verticalAlign: 'middle', width:"18px", height:"18px"} ,
              attr: { focusable: "false" }
            }}
          >

        <MdAdd style={{height:"36"}} /><span>shortlist</span>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  )
}
export default Applicant;