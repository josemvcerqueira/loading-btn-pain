import React from 'react';
import './App.css';
import CheckMark from "./check-mark";

function App() {
  const divRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [success, setSuccess] = React.useState(false);
  const [final, setFinal] = React.useState(false);

  React.useEffect(() => {
    const progressInterval = setInterval(() => {
      setValue(prevState => {
        if (prevState > 360) {
          return 0
        }

        return prevState + 5;
      })
    }, 100);
    if (success) {
      clearInterval(progressInterval)
    }
    return () => {
      clearInterval(progressInterval);
    }
  }, [success])

  const onProgress = value => {
    if (divRef.current)
    divRef.current.style.setProperty('--percentage', `${value}deg`);
  }

  onProgress(value);

  const handleOnSubmit = () => {
    setLoading(true);
    setTimeout(() =>{
      setValue(0);
    }, 1000);
    setTimeout(() => {
      setSuccess(true)
    }, 3000);
    setTimeout(() => {
      setFinal(true);
    }, 5000);
  };

  let buttonStyles = '';
  let circularProgressStyles = '';

  if (loading) {
    buttonStyles = 'loading';
    circularProgressStyles = 'show';
  }


  if (success) {
    buttonStyles = 'success';
    circularProgressStyles = '';
  }

  if (final) {
    buttonStyles = 'final';
  }

  return (
    <div className="container">
      <div id="progress-button" className={`progress-button ${buttonStyles}`}>
        <button onClick={handleOnSubmit} disabled={loading} >
          <span>
            {success ? 'Message Sent' : 'Submit'}
        </span>
            <CheckMark className={success ? 'success svg-wrapper' : 'svg-wrapper'}/>
        </button>
        <div ref={divRef} className={`circular-progress ${circularProgressStyles}`}/>
      </div>
    </div>
  );
}

export default App;
