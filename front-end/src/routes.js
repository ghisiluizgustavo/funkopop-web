import Funko from "./components/funko/Funko";
import { Route, BrowserRouter } from "react-router-dom";

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component = { Funko }  path="/funko" exact />
        </BrowserRouter>
    )
 }
 
 export default Routes;