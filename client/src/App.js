import Navigation from "./components/views/Nav/Navigation";
import Products from "./components/common/Products/Products";
import Carousel from "./components/views/Carousel/CarouselComp";
import SingleProduct from "./components/views/SingleProduct/SingleProduct";

import {
  useRoutes
} from "react-router-dom";


function App() {

  const routes =  useRoutes([
    {
      path: '/',
      element: [<Carousel key={1}/>, <Products key={2}/>]
    },
    {
      path: '/products/:id',
      element: <SingleProduct/>
    },

  ])
  return (
    <>
      <Navigation/>
      {routes}

    </>
  );
}

export default App;
