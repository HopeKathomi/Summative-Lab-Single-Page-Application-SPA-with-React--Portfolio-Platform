import {useEffect, useState} from 'react'
const Projects = () => {
    const [projects, getProjects] = useState([]);
    useEffect(()=>{
        fetch(' http://localhost:3000/projects')
        .then(response => response.json())
        .then(data=>getProjects(data));
    },[])
    console.log(projects);
  return (
    <div>
        {projects.map(project=>(
            <div key={project.id} className='flex flex-row gap-2 mt-4'>
                <img src = {project.image} className='bg-amber-100 min-w-30 max-h-40'/>
                <div className='flex flex-col gap-1 justify-center min-h-30'>
                    <h3>{project.project_name}</h3>
                    <p className='flex flex-wrap'>{project.description}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Projects