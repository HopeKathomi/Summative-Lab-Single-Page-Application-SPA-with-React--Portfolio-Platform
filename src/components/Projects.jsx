
const Projects = ({project}) => {

  return (
    <div className='flex flex-row justify-center items-center min-h-30 border-slate-300 shadow-md border rounded-lg gap-5 px-5'>
        <img src = {project.image} className='bg-amber-100 min-w-30 max-h-40 rounded-md'/>
        <div className="">
            <h3 className="font-semibold">{project.project_name}</h3>
            <p className='flex flex-wrap'>{project.description}</p>
        </div>
    </div>
)
}

export default Projects