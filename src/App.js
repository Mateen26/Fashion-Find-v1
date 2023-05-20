import { Provider } from 'react-redux';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/footer';
import logo from './logo.svg';
import store from './Store/Store';
import Loader from './components/Loader';
import Routes from './components/Routes';
// import './App.css';

const App = () => {
  return (
    <>
    <Provider store ={store}>
    <Loader/>
    <Routes/>
    <Header/>
    <HomePage/>
    <Footer/>
    </Provider>
    </>
  );
}

export default App;
