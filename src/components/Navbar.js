import React from "react";

const Navbar = ({filterItem, menuList}) => {
    return (
        <>
        <nav className="navbar">
            <div className="btn-group">
            {
                menuList.map((item, i)=> {
                    return(
                        <button key={i} className="btn-group__item" onClick={()=> filterItem(item)}>
                            {item}
                        </button>
                    )
                })
            }
            </div>
        </nav>
        </>
    )
}

export default Navbar;