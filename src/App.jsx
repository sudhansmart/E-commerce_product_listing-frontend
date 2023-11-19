import { useState,useEffect } from 'react'
import NavBar from './components/NavBar'
import Login from './components/Login'
import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'
import Branches from './components/Branches'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProducts from './components/AddProducts'
import ModifyList from './components/ModifyList'
import UserList from './components/UserList'
import Wishlist from './components/WishList'
import CartPage from './components/CartPage'
import CheckoutPage from './components/CheckoutPage'
import Filteration from './components/Filteration'
import Review from './components/Review'

function App() {
  const [products, setProducts] = useState([
    {
      productname: 'Ear Ring',
      price: '15000',
      weight: '4.00',
      quantity: 1,
      description: 'The Fantastic ear ring ',
      category: 'Gold',
      subcategory: 'EarRing',
      size: 'men',
      releasedate: '15/06/2019',
      imagelink: 'https://www.jewelegance.com/cdn/shop/products/JGS-2106-01262.jpg?v=1675710253',
      productspec: 'Hello, this is a trial version',
    },
    {
        productname: 'Ring',
        price: '2000',
        weight: '6.00',
        quantity: 1,
        description: 'The Fantastic  ring ',
        category: 'Diamond',
        subcategory: 'Ring',
        size: 'Women',
        releasedate: '15/06/2023',
        imagelink: 'https://d25g9z9s77rn4i.cloudfront.net/uploads/product/158/1673962109_d237e9feb935a9f44303.jpg',
        productspec: 'Hello, this is a trial version',
      },
      {
        productname: 'Necklace',
        price: '25000',
        weight: '16.00',
        quantity: 1,
        description: 'The Fantastic ear ring ',
        category: 'Platinum',
        subcategory: 'Necklace',
        size: 'Women',
        releasedate: '15/06/2022',
        imagelink: 'https://blingvine.com/cdn/shop/products/enchanted-necklace-set-necklace-sets-blingvine-301149_750x.jpg?v=1641410776',
        productspec: 'Hello, this is a trial version',
      },
  ]);


  return (
    <>
    <Router>
         <NavBar/>
         {/* <Category/> */}
         {/* <AddProducts/> */}
          {/* <ModifyList/> */}
          {/* <UserList/> */}
          {/* <Wishlist/> */}
          {/* <CartPage/> */}
          {/* <CheckoutPage/> */}
          {/* <Filteration products={products}/> */}
          {/* <Review/> */}
        <Routes>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
            <Route path='/branches' element={<Branches/>}/>
        </Routes>
    </Router>
     
    
    </>
  )
}

export default App
