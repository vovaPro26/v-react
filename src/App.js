import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DialogsContainer from 'components/Dialogs/dialog/DialogsContainer';
import MessagesContainer from 'components/Dialogs/messages/MessagesContainer';
import Components from 'components/Menu/leftMenu';

import './App.css';

import UsersConteiner from 'components/Users/UsersConteiner';
import MainContentConteiner from 'components/MainContent/MainContentConteiner';
import HeaderConteiner from 'components/Header/HeaderConteiner';

function App(props) {



  return (
    <BrowserRouter>
      <div className='my-app'>
        <HeaderConteiner/>
        <Components />
        <div className='centrContent' >
          <Routes>
            <Route path="profile" element={<MainContentConteiner />} >
              <Route path=':id'/>
            </Route>
            <Route path="messages" element={<DialogsContainer />}>
              <Route path=":id" element={<MessagesContainer />} />
            </Route>
            <Route path="users" element={<UsersConteiner />}>
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
