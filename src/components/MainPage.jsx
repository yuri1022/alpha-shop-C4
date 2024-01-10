import Header from './header.jsx';
import Form from './Form/Form.jsx';
import Footer from './Footer/footer.jsx'; // 這裡引入 Footer 元件
import { CartProvider } from '../components/Form/Cartcontext.jsx';




export default function MainPage() {

  return (
    
    <CartProvider>
      <>
      <Header></Header>
      <Form/>
      <Footer></Footer>
      </>
      </CartProvider>
  
  );
}