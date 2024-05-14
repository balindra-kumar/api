
import './App.css';
import React,{ useState } from 'react';
import { useMutation } from '@apollo/client';
import { USER_LOGIN } from './services';
import AllUsers from './components/AllUsers';

function App() {
  const [user_email, setUsername] = useState('');
  const [user_password, setPassword] = useState('');
  
  const [loginUser,{loading, error}] = useMutation(USER_LOGIN);
const Login = async (e)=>{
  e.preventDefault()
  try{
    const  {data} = await loginUser({variables: {user_email, user_password}});
    console.log('login successfully', data)
   
    if(data.loginUser.user_email=="" && data.loginUser.user_password==""){
      alert("Please enter the writer username and password")
      return
    }
    if(data){
      const token = data.loginUser.token;
      // Store token in local storage
      localStorage.setItem('jwtToken', token);
      
      alert('Login successful');
    }else{
      alert("You're not an authorized user");
    }
   
  }catch(err){
    console.log('Error',err)
    alert("Your are doing something wrong in the token key refresh the page and login again");
    localStorage.removeItem('jwtToken');
    //window.location.reload(false)
  }
} 
const [showData, setshowData] = useState(false)
const readMore = ()=>{
  setshowData(true)
}
  return (
    <div className="App">
  
      <div className='flex flex-col items-center justify-center bg-slate-100 mx-auto md:h-screen'>
        <div>
       {
        showData && (
          <div>
            <AllUsers/>
            </div>
        )
       }
        <button onClick={readMore}>Read More</button>
        </div>
        <div className='w-2/6 border rounded shadow-md p-10 bg-white rounded'>
        <form method="post" onSubmit={Login}>
        <h1 className='text-2xl font-semibold text-green-600 border-b pb-3'>Login Panel</h1>
          <div className='mb-3 text-left'>
            <label className='font-semibold text-lg p-3 block'>Username</label>
            <input type="text" value={user_email} onChange={(e)=>setUsername(e.target.value)} className='border rounded w-full p-2' placeholder='Please enter the username'/>
          </div>

          <div className='mb-3 text-left'>
            <label className='font-semibold text-lg p-3 block'>Password</label>
            <input type="text" value={user_password} onChange={(e)=>setPassword(e.target.value)} className='border focus:ring-4 focus:ring-green-300 rounded w-full p-2' placeholder='password....'/>
           
          </div>

          <div className='mb-3 text-left'>
        
            <input type="submit" className='border hover:cursor-pointer hover:bg-green-700 rounded w-full p-2 bg-green-600 text-white' value="login" placeholder='Please enter the username'/>
          </div>
          
        </form>
        </div>
      </div>
     
    </div>
   
  );
}

export default App;
