import React from 'react';
import './experience.css';

const Experience = ({ experiences }) => {
  const experienceItems = [];
  experiences.forEach(experience => {
    experienceItems.push(
      <div key={experience.id} className="experience-item">
        <div className="experience-upper">
          <div className="experience-info">
            <span className="role">{experience.role} - </span>
            <span className="show">
              {experience.show} (Season {experience.season})
            </span>
          </div>
          <div className="year">
            <span>{experience.year}</span>
          </div>
        </div>
        <div className="experience-bottom">
          <div className="genre">{experience.genre}</div>{' '}
          <div className="componio-shows">
            {experience.companionShows}
          </div>
        </div>
      </div>,
    );
  });
  return (
    <div className="experience-container">
      <div className="experiences">{experienceItems}</div>
      <div className="footer-wrapper">
        <div className="mutual-connection">
          <div style={{ 'margin-right': '10px' }}>
            mutual connection
          </div>
          <div className="connection-list">
            <div className="rounded-connection">
              <img src={`./assets/img/image_19.png`} alt="doge" />
            </div>
            <div className="rounded-connection">
              <img src={`./assets/img/image_19.png`} alt="doge" />
            </div>
            <div className="rounded-connection">
              <img src={`./assets/img/image_19.png`} alt="doge" />
            </div>
            <div className="rounded-connection">
              <img src={`./assets/img/image_19.png`} alt="doge" />
            </div>
            <div className="rounded-connection">
              <img src={`./assets/img/image_19.png`} alt="doge" />
            </div>
            <div className="more-connections">3+</div>
          </div>
        </div>
        <div className="relevant-credits">
          relevant credits <span className="badge">12</span>
        </div>
      </div>
    </div>
  );
};
export default Experience;
