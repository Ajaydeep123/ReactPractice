import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';



function App() {
/* we want to conditionally render the Cart component based on uiSlice's state value
We execute this and then you learned that to use selector, we need to pass a function which receives 
the Redux state automatically because this function which we pass to use selector will be executed by React Redux. 
So it receives the current state automatically and we should return the data which we wanna use in this component.
 And in this case, that is this cartIsVisible property value. */

  const showCart = useSelector((state)=> state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);

  //handling async task
  useEffect(() => {
    fetch('https://react-req-93ea7-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
    { showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
