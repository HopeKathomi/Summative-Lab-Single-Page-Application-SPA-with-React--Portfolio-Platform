import Projects from "../components/Projects"
import {useEffect, useState} from 'react'

const Displayprojects = ({projects, getProjects, searchWord, results}) => {

   useEffect(()=>{
    fetch(' http://localhost:3000/projects')
    .then(response => response.json())
    .then(data=>getProjects(data));
    },[]);
    const displayedProjects = results.length === 0 ? projects : results;


  return (
    <div>
      {displayedProjects.map(project=>(
        searchWord === "" ?
        <div key={project.id } className='flex flex-row gap-2 mt-4'>
          <Projects project={project} results={results}/>
        </div> : <projects/>
      ))}
     
    </div>
  )
}

export default Displayprojects