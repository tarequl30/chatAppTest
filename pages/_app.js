import { ContextProvider } from "../context"
import "../styles/auth.css"
import "../styles/chats.css"
import "../styles/index.css"

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}
