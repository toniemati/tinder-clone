import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chats from './components/Chats/Chats';
import ChatScreen from './components/ChatScreen/ChatScreen';
import Header from './components/Header/Header';
import SwipeButtons from './components/SwipeButtons/SwipeButtons';
import TinderCards from './components/TinderCards/TinderCards';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />

            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />

            <Chats />
          </Route>

          <Route path="/">
            <Header />

            <TinderCards />

            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
