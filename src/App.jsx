import { useState } from 'react'
import Projectlist from './components/Projectslist'
import Searchprojects from './components/Searchprojects'

function App() {
  const [projects, getProjects] = useState([]);
  const [searchWord, setSearchWord] = useState("")
  const [results, setResults] =useState([])

  return (
    <div className='flex flex-col min-h-screen justify-center items-center '>
      <div className='rounded-md border max-w-180'>
        <p className='bg-gray-300 flex flex-col items-center py-3 font-semibold'>
          Personal Project Showcase App
        </p>
        <div className=' bg-gray-300 border rounded-md mx-6 my-4.5 px-4 py-3'>
          <p className='font-semibold'>Add Project</p>
          <form action="" className='flex flex-col gap-4'>

            <label htmlFor="title" className='flex flex-col'>
              Title
              <input type="text" name='title' className='bg-white shadow-black shadow-2xl border rounded-md' />
            </label>

            <label htmlFor="description" className='flex flex-col'>
              Description
              <textarea name="description" id="description" className='bg-white border rounded-md'></textarea>
            </label>

            <button className='bg-white border rounded-md'>Add</button>

          </form>
        </div>

        <Searchprojects  projects={projects} searchWord={searchWord} setSearchWord={setSearchWord} setResults={setResults}/>

        <div className=' flex flex-col  border border-t-0 rounded-b-md mx-6 mb-4 py-2'>
          <div className='bg-white px-4 '>
            <Projectlist projects={projects} getProjects={getProjects} searchWord={searchWord} results={results}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
