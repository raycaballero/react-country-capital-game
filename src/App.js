import './App.css';
import CountryCapitalGame from './components/CountryCapitalGame';

function App() {

    return (
        <div>
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
