
const Projects = ({project}) => {

  return (
    <>

        <img src = {project.image} className='bg-amber-100 min-w-30 max-h-40 rounded-md'/>
        <div className='flex flex-col gap-1 justify-center min-h-30'>
            <h3 className="font-semibold">{project.project_name}</h3>
            <p className='flex flex-wrap'>{project.description}</p>
        </div>
    </>
)
}

export default Projects