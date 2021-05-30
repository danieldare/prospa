import { ThemeProvider } from 'styled-components';
import Routes from 'src/routes';
import './App.css';
import { GlobalStyles } from './theme/global';
import { theme } from './theme';

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <Routes />
            </ThemeProvider>
        </>
    );
}

export default App;
