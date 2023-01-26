import './App.css';
import LoginForm from './components/LoginForm';
import CountryCapitalGame from './components/CountryCapitalGame';

function App() {

    return (
        <div>
            <LoginForm onSubmit={(username, password) => console.log(username, password)} />
            <CountryCapitalGame data={{
                'Poland': 'Warsaw',
                'Germany': 'Berlin',
                'Azerbaijan': 'Baku',
                'Papua New Guinea': 'Port Moresby',
                'Japan': 'Tokyo',
                'Philippines': 'Manila',
                'Russia': 'Moscow',
            }} />
        </div>
    );
}

export default App;
