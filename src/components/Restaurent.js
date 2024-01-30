import React, { useState } from "react";
import './Style.css';
import Menu from "./MenuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqCategory = [...new Set(Menu.map((elem) => {
    return elem.category;
})
), 'All']

const Restaurent = () =>  {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqCategory);

    const filterItem = (category) => {
        if(category === 'All') {
            setMenuData(Menu);
            return;
        }
        let data = Menu.filter((elem)=> {
            return elem.category === category;
        })
        setMenuData(data)
    }
    return(
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} setMenuData={setMenuData}  />
        </>
    )
}

export default Restaurent;