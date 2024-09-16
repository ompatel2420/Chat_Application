import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {

    return(
        < ChatEngine
            height="100vh"
            projectID="0625fa88-2d91-4bdf-9e18-1ff93cf769bc"
            userName ="Om201224"
            userSecret="201224"
            renderChatFeed={(chatappProps) => < ChatFeed {...chatappProps}/>}
            />
    )
}

export default App; 