import Projects from "../components/Projects"
import {useEffect} from 'react'

const Displayprojects = ({projects, getProjects, searchWord, results}) => {

   useEffect(()=>{
    fetch('http://localhost:3000/projects')
    .then(response => response.json())
    .then(data=>getProjects(data));
    },[]);

    const displayedProjects = results.length === 0 ? projects : results;

  return (
    <div className=' flex flex-col  border border-t-0 rounded-b-md mx-6     mb-4 py-2'>
      <div className='bg-white px-4 '>
      {displayedProjects.map(project=>(
        searchWord === "" ?
        <div key={project.id } className='flex flex-row gap-2 mt-4'>
          <Projects project={project} results={results}/>
        </div> : <projects/>
      ))}
      </div>
     </div>
  )
}

export default Displayprojects