import React from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
function Form() {
 const userObj=
 {coment:'',
}
const dalu=0
const [value,setValue]=useState(userObj)
const [userData, setUserData] = React.useState([])

const handleChange=(event)=>{
  setValue({...value,[event.target.name ]:event.target.value})
 
}
const addData = () => {
  setUserData([...userData, value])
}
const deleteTodo=(item,id)=> {
  setUserData(userData.filter(item=>item.id !== id ))
 
};
  return (
    <div className='grid  content-center justify-center '>
     yesd
<form className='w-full'>
   <div class="w-full mb-4 border border-gray-400 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800 ">
           <label for="comment" class="sr-only">Your comment</label>
           <textarea onChange={handleChange} name='coment' id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." required></textarea>
       </div>
       <div   class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-700 ">
           <div onClick={addData}  class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
               Post comment
           </div>

       </div>
     
   </div>

</form>

<div>
            <label>text1:</label>
            <input type='text ' onChange={handleChange} name='coment' />
           
            

            <button onClick={addData}>Add</button>
            <DisplayData userList={userData} />
        </div>





    </div>
  );
  function DisplayData({ userList }) {
    return (
        <div>
            <ul>
                {userList.map((item, index) => (
                   <ul>
                     <h1 className='text-3xl font-bold'>Coments</h1>
                     <img  onClick={deleteTodo}className='w-10 h-10 rounded-full ' src="https://static.vecteezy.com/system/resources/previews/000/442/054/original/delete-vector-icon.jpg" alt=""/>
                     <div className='flex w-full mb-4 border border-gray-400 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-700 gap-5 '>
                       <img className='w-10 h-10 rounded-full' src="https://th.bing.com/th/id/OIP.ah1AYDqdL_KW9R6JYTMlgAHaE8?w=203&h=135&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt=""/> <li className='' key={index}>
                      {item.coment}
                      </li></div>
                   </ul>
                ))}
            </ul>
        </div>)
    }
  }


export default Form;
