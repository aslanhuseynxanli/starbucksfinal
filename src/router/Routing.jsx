import { Route, createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Menu from "../pages/Menu";
import Rewards from "../pages/Rewards";
import Giftcard from "../pages/Giftcard";
import Home from "../pages/Home";
import Location from "../pages/Location";
import List from "../components/UI/List";
import Menudetail from "../components/UI/Menudetail";
import Menuproducts from "../components/UI/Menuproducts";
import Featured from "../components/UI/Featured";
import Previous from "../components/UI/Previous";
import Favorites from "../components/UI/Favorites";
import Productscard from "../components/UI/Productscard";
import Signin from "../components/UI/Signin";
import Loggin from "../components/UI/Loggin";
import Seeall from "../components/UI/Seeall";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
          <Route path='/' element={<Mainlayout />}>
            <Route index element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            
            <Route path="menu" element={<Menu />}>
              <Route path="/menu" element={<List />} >
                  <Route path=":subcat" element={<Menuproducts/>}/>
                  <Route path=":subcat" element={<Productscard />} />
              </Route> 
              <Route path="previous" element={<Previous />}/>
              <Route path="favorites" element={<Favorites />}/>
            </Route>

            <Route path="featured" element={<Featured />} />
            

            <Route path="/drinks/:id" element={<Menudetail />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/giftcard" element={<Giftcard />} />
            <Route path="/location" element={<Location />} />
            <Route path="/giftcards/:cat" element={<Seeall />} />
           
            
            
          </Route>
          <Route path="/loggin" element={<Loggin />} />
          <Route path="/signin" element={<Signin/>}/>
        </>
    )
)