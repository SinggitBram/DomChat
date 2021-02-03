import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const App = () => {
    if (!localStorage.getItem("username")) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="8e4dad52-9195-4be0-9798-a7b119a0d1db"
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} //supaya yg dipake component kita
        />
    );
};

export default App;
