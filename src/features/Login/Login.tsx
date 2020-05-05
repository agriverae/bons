import React from 'react'

const Login = () => {
  return (
    <div className="login">
        <form className="form" action="">
          <h1 className="form__title">Welcome to Bons Game</h1>
          <label htmlFor="name" className="form__name mt--small">What's your name</label>
          <input id="name" placeholder="NAME" name="name" type="text" className="form__text mt--big"/>
          <button className="button mt--small button--cyan">Let's Play</button>
        </form>
      </div>
  )
}

export default Login
