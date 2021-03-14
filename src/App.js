import {ChatEngine} from "react-chat-engine";
import './App.css'
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

const App= () => {
	if(!localStorage.getItem('username')) return <LoginForm/>
	return(
		<ChatEngine
		height="100vh"
		projectID="12565dfa-d609-4b6f-ba4e-285965b4607d"
		userName={localStorage.getItem('username')}
		userSecret={localStorage.getItem('password')}
		renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/> }
		/>
	);
}
export default App;