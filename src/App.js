import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    
    return(
        < ChatEngine
            height="100vh"
            projectID="0625fa88-2d91-4bdf-9e18-1ff93cf769bc"
            userName ="Jay123456"
            userSecret="123456"
            renderChatFeed={(chatappProps) => < ChatFeed {...chatappProps}/>}
            />
    )
}

export default App; 