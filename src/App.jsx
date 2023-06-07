import { useState, useEffect } from 'react'
import { TitleComponent } from './TitleComponent';
import { BodyComponent } from './BodyComponent';


function App() {
  const [showbg, setShowbg] = useState(false);
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(()=>{
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    }
  }, []);

  function refreshClock() {
    setTime(new Date());
  }

  /*const getRefresh = () => {
    
    let today = new Date()
    let currentTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    setTime(currentTime)
}*/
function handleSubmit(e) {
  const enteredPassword = e.target.querySelector(
    'input[type="password"]').value;
  const auth = enteredPassword == password;
  setAuthorized(auth)
}

  function toggleHandle (e){
    setShowbg(current => !current)
  }

  const login = (
    <div>
      <h1>Enter the Password</h1>
        <form action="#" onSubmit={handleSubmit}>
          <input 
          type="password"
          placeholder="Password"
          />
          
        </form>
    </div>
    );
 

  return (
    <>
    <p>{time.toLocaleTimeString()}</p>
    
    <div id="authorization">
      {authorized? 
        <div>
          <TitleComponent showbg={showbg} onClick={toggleHandle}/>
          <BodyComponent showbg={showbg}/>
        </div>
    : login}
    </div>
    </>
  )
}

export default App;
