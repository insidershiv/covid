import './App.css';
import Home from './screens/home/home';
import theme from './theme/theme';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import Header from './components/Header';

function App() {
    return (
        <ThemeProvider theme={theme}>

            <Router>

                <Header />

                <Route exact path='/' component={() => <Home />} />

            </Router>
        </ThemeProvider>
    );
}

export default App;