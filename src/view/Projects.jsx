import React from 'react';
import timeLineData from "../components/timeLineData";
import '../css/project.css';

const Projects = () => {
  return (
    <div>
      <h1>project</h1>
      <div className='project-container'>
        {
          timeLineData && timeLineData.map(element => {
            return (
              <div className='project-mainContent'
                key={element.key}
              >
                <h3>{element.title}</h3>
                <p>{element.description}</p>
                <p>{element.date}</p>
                {/* <img src={element.img}/> */}
                <button>Show Deatils</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default Projects;