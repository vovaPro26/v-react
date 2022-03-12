import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DialogsContainer from 'components/Dialogs/dialog/DialogsContainer';
import MessagesContainer from 'components/Dialogs/messages/MessagesContainer';
import Header from 'components/Header/header';
import MainContent from 'components/MainContent/MainContent';
import Components from 'components/Menu/leftMenu';

import './App.css';
import Users from 'components/Users/Users';
import UsersConteiner from 'components/Users/UsersConteiner';

function App(props) {



  return (
    <BrowserRouter>
      <div className='my-app'>
        <Header />
        <Components />
        <div className='centrContent' >
          <Routes>
            <Route path="profile" element={<MainContent  />} />
            <Route path="messages" element={<DialogsContainer  />}>
              <Route path=":id" element={<MessagesContainer />} />
            </Route>
            <Route path="users" element={<UsersConteiner/>}>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
