import { useState } from 'react'

function LoginForm({ onSubmit }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <input type="text" id="username-input" onChange={e => setUsername(e.target.value)} value={username} />
            <input type="password" id="password-input" onChange={e => setPassword(e.target.value)} value={password} />
            <input type="submit" id="login-button" value="Submit" onClick={() => onSubmit(username, password)} disabled={!username || !password} />
        </div>
    );
}

export default LoginForm;
