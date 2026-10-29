import { createContext } from "react";
import { Products } from "../assets/assets";
import { useState } from "react";

export const ShopContext = createContext();

const ShopContextprovider = (props) => {
 
    const currency = '$';
    const delivery_free = 10;
    const [search,setsearch] = useState('');
    const [showSearch,setshowSearch] = useState(false );

    const value = {
        Products, currency, delivery_free,
        search, setsearch, showSearch, setshowSearch
    }

    return (    
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextprovider;