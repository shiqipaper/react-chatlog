import './App.css';
import ChatLog from './components/ChatLog';
import chatData from './data/messages.json';


const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Chat between Vladimir and Estragon</h1>
        <h2></h2>
      </header>
      <main>
        <ChatLog entries={chatData} />
      </main>
    </div>
  );
};

export default App;
