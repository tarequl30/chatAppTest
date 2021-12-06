import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React, { useContext, useEffect, useState } from "react"
import { Context } from "../context"

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then(module => module.ChatEngine)
)
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then(module => module.MessageFormSocial)
)

export default function Home() {
  const { username, secret } = useContext(Context)
  const [showChat, setShowChat] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (typeof document !== undefined) {
      setShowChat(true)
    }
  }, [])

  useEffect(() => {
    if (username === "" || secret === "") {
      router.push("/")
    }
  }, [username, secret])

  if (!showChat) return <div />

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100vh - 212px)"
          projectID="
          56a01c81-9e97-45c9-9050-8c6377465812"
          userName={username}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />
      </div>
    </div>
  )
}
