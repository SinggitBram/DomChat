import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";

const App = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="8e4dad52-9195-4be0-9798-a7b119a0d1db"
            userName="singgitbram"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} //supaya yg dipake component kita
        />
    );
};

export default App;
