import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import { AuthContextProvider} from './context/AuthContext.js'
import { ChatContextProvider} from './context/ChatContext.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>

)
