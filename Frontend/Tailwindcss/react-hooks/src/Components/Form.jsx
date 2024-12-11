import React ,{useState} from 'react'

const Form = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const handleChange = (e) => {
    setUsername(e.target.value)
  };
  const emailChange = (e) => {
      setEmail(e.target.value)
    };
   
  console.log(username);
  console.log(email);
  
  
  return (
    <div className='flex justify-center mt-5'>
      <input type="text" placeholder='Username' required 
      value={username}
      onChange={handleChange}
      className='bg-slate-900 text-lime-300'
      />
      <input type="email" 
      placeholder='user@gmail.com' 
      required
      value={email}
      onChange={emailChange}
      className='bg-slate-50 text-orange-400'/>
      <button className='text-black bg-rose-700'> Submit</button>
    </div>
  )
}

export default Form