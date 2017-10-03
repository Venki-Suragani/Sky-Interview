import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router,Route,browserHistory } from 'react-router';
import configureStore from './redux/store';
import Header from './components/Header';
import itemsPage from './pages/itemsPage';
import MessagesPage from './pages/MessagesPage';
import  { loadMessages } from './logic/actions';

const store = configureStore();
store.dispatch (loadMessages());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div >
          <Header />
          <div>
          <Router history={browserHistory}>
              <Route path="/" component={ MessagesPage} />
              <Route path="items" component = {itemsPage} />           
        </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
