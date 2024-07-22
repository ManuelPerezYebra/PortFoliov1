import { Header } from './components/Header/Header';
import { MainApp } from './components/MainApp/MainApp';
import { MainContainer } from './components/MainContainer/MainContainer';
import { GlobalStyles } from './GlobalStyles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles></GlobalStyles>
			<MainApp>
				<Header />
				<MainContainer />
			</MainApp>
		</>
	);
};

export default App;
