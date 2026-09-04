import {useState} from 'react'
const Searchprojects = ({projects, searchWord, setSearchWord, setResults}) => {

    function handleSubmit(e){
        e.preventDefault();
        search();
        
    }
    function handleChange(e){
        setSearchWord(e.target.value);
    }

    function search(){
        
        const results = projects.filter(project=> {
            const word = searchWord.toLowerCase();
            const projectName = project.project_name.toLowerCase();
           return projectName.includes(word)
        })
        setSearchWord("");
        setResults(results);
        console.log(results);  
    }
    
  return (
    <div className='flex justify-center py-4'>
        <form onSubmit={handleSubmit} className='flex w-full h-10'>
            <input type="search" placeholder='Search Projects' value={searchWord} onChange={handleChange} className='bg-white rounded-md px-3 border border-slate-300 shadow-md w-full'/>
        </form>
        
    </div>
  )
}

export default Searchprojects