import React, { PureComponent } from 'react';
import pt from 'prop-types';

// Utils
import isEmpty from '@tinkoff/utils/is/empty';

// Components
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

// Styles
import s from './LoginForm.module.css';

class LoginForm extends PureComponent {
    static propTypes = {
        onLogin: pt.func.isRequired,
    };

    state = {
        login: '',
        password: '',
        error: '',
    };

    setError = (error) => this.setState({ error });

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            error: '',
            [name]: value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { login, password } = this.state;

        if (isEmpty(login) || isEmpty(password)) {
            return this.setError('Fill in login and password!');
        }
        
        this.setError('');
        this.props.onLogin({
            password,
            name: login,
        });
    }

    render() {
        const { login, password, error } = this.state;

        return <div className={s.wrapper}>
            <h2 className={s.title}>Log In To ChatUp!</h2>
            <form onSubmit={this.handleSubmit}>
                <div className={s.form}>
                    <div className={s.formRow}>
                        <Input
                            id='login'
                            label='Login:'
                            name='login'
                            value={login}
                            onChange={this.handleChange}
                            placeholder='Love'
                        />
                    </div>
                    <div className={s.formRow}>
                        <Input
                            id='password'
                            type='password'
                            label='Password:'
                            name='password'
                            value={password}
                            onChange={this.handleChange}
                            placeholder='0tT0N0V@'
                        />
                    </div>
                </div>
                <div className={s.buttonWrapper}>
                    <Button type='submit'>Log In</Button>
                    {error && <div className={s.error}>{error}</div>}
                </div>
            </form>
        </div>;
    }
}

export default LoginForm;