import { useState } from 'react'
import Projectlist from './components/Projectslist'
import Searchprojects from './components/Searchprojects'
import Addproject from './components/Addproject';

function App() {
  const [projects, getProjects] = useState([]);
  const [searchWord, setSearchWord] = useState("")
  const [results, setResults] =useState([])

  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      <div className='border-b border-slate-50 w-full'>
        <p className='bg-slate-200 shadow-md flex flex-col items-center py-3 font-semibold'>
          Personal Project Showcase App
        </p>
      </div>
      <div className='flex flex-row flex-1 justify-center'>
        <Addproject projects={projects} getProjects = {getProjects}/>
        <div>
          <Searchprojects  projects={projects} searchWord={searchWord} setSearchWord={setSearchWord} setResults={setResults}/>
          <Projectlist projects={projects} getProjects={getProjects} searchWord={searchWord} results={results}/>
        </div>
        
      </div>
    </div>
      
  )
}

export default App
