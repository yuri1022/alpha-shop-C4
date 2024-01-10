import MainPage from './components/MainPage.jsx';
import './styles/style.scss';
import { CartProvider } from './components/Form/Cartcontext.jsx';



function App() {

  return (
    <>
    <CartProvider>
    <MainPage/>
    </CartProvider >

    </>
  );
}

export default App;