import Header from './header.jsx';
import Form from './Form/Form.jsx';
import Footer from './Footer/footer.jsx'; // 這裡引入 Footer 元件


export default function MainPage() {
  return (
    <>
      <Header></Header>
      <Form />
      <Footer></Footer>
    </>
  );
}