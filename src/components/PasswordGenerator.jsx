import { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerator() {
  const [length, setLength] = useState(15);
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [password, setPassword] = useState("");

  const passRef =  useRef(null);

  const passwordGen = useCallback(() => {
    let pass = "";
    let aplha = "ABCDEEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(number) aplha+="0123456789";
    if(char) aplha+="!@#$%^&*-_";

    for(let i=0; i<length; i++){
      let charIndex = Math.floor(Math.random() * aplha.length + 1);
      pass += aplha.charAt(charIndex);
    }

    setPassword(pass);

  },[length, number, char, setPassword]);

  const copyPass = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  useEffect(() => {passwordGen()}
  ,[length, number, char, passwordGen])

  return (
    <>
      <div className=' w-full h-fit max-w-lg mx-auto my-8 px-8 py-4 shadow-md rounded-lg flex flex-col gap-2 text-blue-500 bg-gray-900 justify-center '>
        <h1 className='w-full text-white text-3xl flex justify-center py-2' >Password Generator</h1>
        <div className='w-full flex justify-between gap-x-2' >
          <input 
          type='text' 
          value={password} 
          className=' w-full rounded-md p-2 font-semibold' 
          placeholder='password' readOnly 
          ref = {passRef}
          />
          <button 
          className=' bg-gray-700 rounded-md text-white px-4 hover:scale-110 duration-200 hover:text-blue-400'
          onClick={copyPass}>copy</button>
        </div>
        
        <div className='w-full flex flex-grow gap-x-2'>
          <input 
          type='range' 
          value={length}
          min={8} max={50} 
          id='length' name='length'
          onChange={(e) => {setLength(e.target.value)}} />
          <label htmlFor='length'>Length : {length}</label>

          <input 
          type='checkbox'
          defaultChecked={number} 
          id='numbers'
          onChange={() => setNumber(prev => !prev)}
          />
          <label htmlFor='numbers'>Number</label>

          <input 
          type='checkbox'
          defaultChecked={char} 
          id='chars'
          onChange={() => setChar(prev => !prev)}
          />
          <label htmlFor='chars'>Character</label>
        </div>        
        
      </div>
    </>
  )
}

export default PasswordGenerator
