import {useState, useEffect} from 'react'
const Addproject = ({project}) => {

    const [input, setInput] =useState({project_name:"", description:""});

    function handleClick(e){
        e.preventDefault();

        fetch('http://localhost:3000/projects',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(input)
        })
        .then(response => response.json())
        .then(data=>{
            console.log("Project added: ", data);
            setInput({project_name:"", description:""});
        })
        .catch((error) => {
            console.error("Error adding project:", error);
        });  
    }

    function getInput(e){
        setInput(prev =>({...prev, [e.target.name]:e.target.value}))
    }
    // console.log(input);
    return (
        <div className=' bg-gray-300 border rounded-md mx-6 my-4.5 px-4 py-3'>
            <p className='font-semibold'>Add Project</p>
            <form className='flex flex-col gap-4'>
                <label htmlFor="title" className='flex flex-col'>
                    Title
                    <input type="text" name='project_name' value={input.project_name} onChange={getInput} className='bg-white shadow-black shadow-2xl border rounded-md' />
                </label>

                <label htmlFor="description" className='flex flex-col'>
                    Description
                    <textarea name="description" id="description" value={input.description} onChange={getInput} className='bg-white border rounded-md'></textarea>
                </label>

                <button onClick={handleClick}className='bg-white border rounded-md'>Add</button>
            </form>
        </div>
    )
}

export default Addproject