import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import Menucard from "./menuCard"
import Navbar from "./navbar"

const uniqueList = [...new Set(Menu.map((currElem) => {
    return currElem.category;
})
), "All",
]

const Resturant = () => {
    const [menuData, setmenuData] = useState(Menu)
    const [menuList, setmenuList] = useState(uniqueList);
    const filterItem = (category) => {
        if (category === "All") {
            setmenuData(Menu)
            return
        };
        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        })
        setmenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <Menucard menuData={menuData} />
        </>
    )
}

export default Resturant
