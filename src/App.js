import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    
    return(
        < ChatEngine
            height="100vh"
            projectID="053c4949-cedc-40e3-8d3f-bc0ef498ccc1"
            userName ="shivu123456"
            userSecret="123456"
            renderChatFeed={(chatappProps) => < ChatFeed {...chatappProps}/>}
            />
    )
}

export default App; 