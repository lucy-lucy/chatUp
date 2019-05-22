import React, { Component } from 'react';
import io from 'socket.io-client';

// Components
import Layout from '../src/components/ui/Layout/Layout';
import Container from '../src/components/ui/Container/Container';
import LoginForm from '../src/components/features/LoginForm/LoginForm';
import Chat from '../src/components/features/Chat/Chat';

// Utils
import isEmpty from '@tinkoff/utils/is/empty';

const socketUrl = process.env.REACT_APP_SOCKET_URL || "https://demo-chat-server.on.ag/";

class ChatApp extends Component {
  state = {
    socket: null,
    user: null,
  };

  handleLogin = (user) => {
    this.setState({
      user,
      socket: io(socketUrl)
    })
  }

  handleLogout = () => {
    const { socket } = this.state;

    socket.close();
    this.setState({
      user: null,
      socket: null,
    });
  }

  render() {
    const { socket, user } = this.state;
    const isAuth = !isEmpty(user);

    return <Layout isAuth={isAuth} onLogout={this.handleLogout}>
      <Container>
        {isAuth ? 
          <Chat socket={socket} user={user} onLogout={this.handleLogout} /> :
          <LoginForm onLogin={this.handleLogin} />
        }
      </Container>
    </Layout>;
  }
}

export default ChatApp;