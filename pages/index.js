// import React from "react";
import axios from "axios"
import { useRouter } from "next/router"
import React, { useContext } from "react"
import { Context } from "../context"

const Auth = () => {
  const { username, setUsername, secret, setSecret } = useContext(Context)
  const router = useRouter()
  console.log(useContext)
  function onSubmit(e) {
    e.preventDefault()

    if (username.length === 1 || secret.length === 1) return

    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-Key": "633095b2-9719-4175-acbc-2c9842cc7fad" } }
      )

      .then(r => {
        router.push("/chats")
      })
  }
  console.log(username)
  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={e => onSubmit(e)}>
          <div className="auth-title">NextJS Chat</div>

          <div className="input-container">
            <input
              placeholder="Email"
              className="text-input"
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              className="text-input"
              onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">
            Login / Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Auth
