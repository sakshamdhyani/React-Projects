import React, { useState } from 'react'

const Todo = () => {

    const [input , setInput] = useState('');
    const [todos , setTodo] = useState([]);

    const [editMode , setEditMode] = useState(false);
    const [editId , setEditId] = useState(null);
    const [editValue , setEditValue] = useState('');


    function changeHandler(event){

        
        setInput(event.target.value)
        

    }


    function clickHandler (event) {

        event.preventDefault();


        if(input.trim() !== ''){

            const newTodo = {
                id: new Date().getTime(),
                text: input,
            }

            setTodo([...todos , newTodo])
            setInput('');
        }

    }

    function deleteHandler(id){

       const updatedTodos = todos.filter((todo) => todo.id !== id );

       setTodo(updatedTodos);

       

    }

    function enterEditMode(id , text){

        setEditMode(true);
        setEditId(id);
        setEditValue(text);

    }

    function updateTodo () {

        const updatedTodos = todos.map((todo) =>{

            if(todo.id === editId){
                return {text:editValue};
            }
            return todo;
        })

        setTodo(updatedTodos);
        setEditMode(false);
        setEditId(null);
        setEditValue('');

    }

  
  return (

    <div className="flex flex-col  bg-gradient-to-r from-red-400 to-amber-300  rounded-lg p-5 min-w-[26rem] min-h-[26rem]
    shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]
    ">

        <h1 className='text-center  font-bold text-4xl mb-8 text-black'>ToDO App</h1>

        <form onSubmit={(event) => clickHandler(event)}
        className='flex flex-col items-center justify-center gap-4'>




                <label className='font-semibold text-white text-lg'>
                    Enter task :

                    <input type="text" onChange={(event) => changeHandler(event)} 
                        value={input}
                        className='ml-2 rounded-md w-auto bg-transparent border-2 border-white text-black'
                    />

                </label>


                <button onClick={clickHandler}
                className='bg-white rounded-full px-2 py-1 font-semibold border-2 border-black'>

                    Add task
                </button>



                {
                    editMode ? (
                        <div className='flex gap-5'>
                            <input type='text' value= {editValue}
                                onChange={(event) => setEditValue(event.target.value)}
                                className='ml-2 rounded-md w-auto bg-transparent border-2 border-white text-white font-semibold'
                            />

                            <button onClick={updateTodo}
                             className='bg-black rounded-full px-2 py-1 font-semibold text-white border-2 border-white'>

                                Update Todo
                            
                            </button>
                        </div>
                    )
                    :
                    (
                        <div/>
                    )
                }


                <div className='max-h-[15rem] min-w-[23rem] overflow-auto max'>

                    <ul>
                        {todos.map((todo) => (

                            <li key={todo.id}>

                               <div  className='flex justify-between mb-4 ml-6'>

                                    <div className='font-bold text-lg text-center underline'>
                                        {todo.text}
                                    </div>

                                    <div className='flex mr-5 gap-4'>

                                        <button className='bg-white rounded-full px-1 font-semibold border-2 border-black'
                                        onClick={() => deleteHandler(todo.id)}>

                                        Delete

                                        </button>

                                        <button className='bg-white rounded-full px-2 py-1 font-semibold border-2 border-black'
                                        onClick={() => enterEditMode(todo.id , todo.text)}>
                                        Edit
                                        </button>

                                    </div>

                               </div>

                            </li>

                        ))}
                    </ul>

                </div>





        </form>
        
       
    </div>
  )
}

export default Todo