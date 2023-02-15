import React, {useState} from 'react';
import './App.css';

function App() {
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
    const [passwordSubmitted, setPasswordSubmitted] = useState(false);
  return (
      <div className="Maybe Check out the Sources Tab...">
          {!isPasswordCorrect && <form
              onSubmit={async (ev) => {
                  ev.preventDefault();
                  console.log("Getting warmer...")
                  setPasswordSubmitted(true);
                  // @ts-ignore
                  if (ev.target.password.value === 'prosperity') {
                      setIsPasswordCorrect(true);
                  } else {
                  }
              }}
          >
              <label>
                  Password:
                  <input type="text" name="password" />
              </label>
              <input type="submit" value="Submit" />
          </form>}
          {passwordSubmitted && !isPasswordCorrect && <p className='incorrect'>Incorrect Password</p>}
          {isPasswordCorrect && <div className="hidden"/>}
      </div>
  );
}

export default App;
