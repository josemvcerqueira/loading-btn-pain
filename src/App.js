import React from 'react';
import './App.css';
import CheckMark from "./check-mark";
import SvgCircle from "./circle";

function App() {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [final, setFinal] = React.useState(false);

  const handleOnSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setSuccess(true)
    }, 4000);
    setTimeout(() => {
      setFinal(true);
    }, 7500);
    setTimeout(() => {
      setLoading(false);
      setSuccess(false);
      setFinal(final);
    }, 8000);
  };

  let stateStyles = '';
  let btnText = 'Submit';
  let loaderWrapperStyles = '';
  let checkMarkStyles = '';

  if (loading) {
    stateStyles = 'loading';
    loaderWrapperStyles = 'show';
  }


  if (success) {
    stateStyles = 'success';
    btnText = 'Message Sent';
    loaderWrapperStyles = '';
    checkMarkStyles = 'success'
  }

  if (final) {
    stateStyles = 'final';
    btnText = 'Submit';
    checkMarkStyles = 'success final'
  }

  return (
    <div className="container">
      <div id="progress-button" className={`progress-button ${stateStyles}`}>
        <button onClick={handleOnSubmit} disabled={loading} >
          <span>
            {btnText}
        </span>
            <CheckMark className={`svg-wrapper ${checkMarkStyles}`}/>
        </button>
        <div className={`loader-wrapper ${loaderWrapperStyles}`}>
          <div className='loader'>
            <SvgCircle className='circular-loader'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
