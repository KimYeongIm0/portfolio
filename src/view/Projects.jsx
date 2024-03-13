import React, { useEffect,useRef } from 'react';
import timeLineData from "../components/timeLineData";
import '../css/project.css';

const Projects = () => {
  const myRef = useRef();
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log('entry',entry);
    })
    observer.observe(myRef.current)
  },[])


  return (
    <div>
      <h1>project</h1>
      <div className='project-container'>
        <div className='project-container-line'>
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
      <div ref={myRef}></div>
    </div>
  );
};

export default Projects;