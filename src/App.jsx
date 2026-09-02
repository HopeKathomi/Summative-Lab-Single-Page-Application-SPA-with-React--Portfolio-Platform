import { useState } from 'react'
import Projectlist from './components/Projectslist'
import Searchprojects from './components/Searchprojects'
import Addproject from './components/Addproject';

function App() {
  const [projects, getProjects] = useState([]);
  const [searchWord, setSearchWord] = useState("")
  const [results, setResults] =useState([])

  return (
    <div className='flex flex-col min-h-screen justify-center items-center py-7'>
      <div className='rounded-md border max-w-180'>
        <p className='bg-gray-300 flex flex-col items-center py-3 font-semibold'>
          Personal Project Showcase App
        </p>

        <Addproject projects={projects} getProjects = {getProjects}/>
        <Searchprojects  projects={projects} searchWord={searchWord} setSearchWord={setSearchWord} setResults={setResults}/>
        <Projectlist projects={projects} getProjects={getProjects} searchWord={searchWord} results={results}/>
      </div>
    </div>
      
  )
}

export default App
