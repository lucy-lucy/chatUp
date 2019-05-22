import React, { PureComponent } from 'react';
import pt from 'prop-types';

// Utils
import uuidv4 from 'uuid/v4';
import { emptyString } from '../../../utils/validate';
import isEmpty from '@tinkoff/utils/is/empty';

// Components
import Button from '../../ui/Button/Button';
import Textarea from '../../ui/Textarea/Textarea';
import Message from '../../ui/Message/Message';
import Command from '../Command/Command';

// Constants
import { MESSAGE, COMMAND } from '../../../constants/events';

// Styles
import s from './Chat.module.css';

class Chat extends PureComponent {
    static propTypes = {
        user: pt.object.isRequired,
        socket: pt.object.isRequired,
        onLogout: pt.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            message: '',
            messages: [],
        };

        this.messagesContainer = React.createRef();
    }

    componentDidMount() {
        const { socket } = this.props;

        socket.on(MESSAGE, this.updateMessages)
        socket.on(COMMAND, this.updateMessages)
    }

    scrollToBottom = () => {
        if (this.messagesContainer && this.messagesContainer.current) {
            this.messagesContainer.current.scrollTop = this.messagesContainer.current.scrollHeight;
        }
    }

    updateMessages = (message) => {
        this.setState((state) => ({
            messages: [...state.messages, { ...message, id: uuidv4()}],
        }));
        this.scrollToBottom();
    }

    clearMessageInput = () => this.setState({
        message: ''
    });

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value,
        });
    }

    createMessage = (message) => {
        const { user: { name } } = this.props;

        return ({
            message,
            author: name,
        });
    }

    addMessage = (message) => {
        const { socket } = this.props;   
        const newMessage = this.createMessage(message);

        this.updateMessages(newMessage);
        socket.emit(MESSAGE, newMessage);
    }
    
    handleMessageSend = (event) => {
        event.preventDefault();

        const { message } = this.state;

        if (!emptyString(message)) {    
            this.addMessage(message)
            this.clearMessageInput();
        }
    }

    handleCommandClick = () => {
        const { socket } = this.props;

        socket.emit(COMMAND);
    }

    handleSelectCommand = (id) => (message) => {
        const { messages } = this.state;

        this.setState({
            messages: messages.filter((message) => message.id !== id)
        }, () => {
            this.addMessage(message)
        });
    }

    renderMessages = () => {
        const { user: { name }, onLogout } = this.props;
        const { messages } = this.state;

        if (emptyString(messages)) {
            return <span className={s.description}>Start conversation...</span>;
        }

        return messages.map(({ author, message, command, id }) => {    
            if (!emptyString(message)) {
                return <div key={id} className={s.message}>
                    <Message
                        text={message}
                        author={author}
                        incoming={author !== name}
                    />
                </div>;
            }

            if (!isEmpty(command)) {
                const { type, data } = command;

                return <div key={id} className={s.message}>
                    <Command
                        type={type}
                        data={data}
                        onSelect={this.handleSelectCommand(id)}
                        onLogout={onLogout}
                    />
                </div>;
            }

            return null;
        });
    }

    componentWillUnmount() {
        const { socket } = this.props;

        socket.removeAllListeners();
        this.messagesContainer = null;
    }

    render() {
        const { message } = this.state;

        return <div className={s.wrapper}>
            <div className={s.messages} ref={this.messagesContainer}>
                {this.renderMessages()}
            </div>
            <div className={s.formWrapper}>
                <form onSubmit={this.handleMessageSend}>
                    <div className={s.controls}>
                        <Textarea
                            type='text'
                            id='message'
                            name='message'
                            value={message}
                            onChange={this.handleMessageChange}
                            placeholder='Message...'
                        />
                        <button type='submit' disabled={!message} className={s.submitButton}>></button>
                    </div>
                    <div className={s.luckyBtn}>
                        <Button onClick={this.handleCommandClick}>"I'm Feeling Lucky"</Button>
                    </div>
                </form>
            </div>
        </div>;
    }
}

export default Chat;
