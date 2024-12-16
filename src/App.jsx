import './App.css';
import ChatEntry from './components/ChatEntry';
import chatData from './data/messages.json';


const App = () => {
  const firstChat = chatData[0];

  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2></h2>
      </header>
      <main>
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
        <ChatEntry
          sender={firstChat.sender}
          body={firstChat.body}
          timeStamp={firstChat.timeStamp}
          />
      </main>
    </div>
  );
};

export default App;
