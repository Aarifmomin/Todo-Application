import React from "react"

const MenuCard = ({menuData, setMenuData}) => {
    return (
        <>
            <section className="main-card--cointainer">
            {
                menuData.map((item, i)=>
                    <div className="card-container" key={i}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">{item.id}</span>
                                <span className="card-author subtle">{item.category}</span>
                                <h2 className="card-title">{item.name}</h2>
                                <span className="card-description subtle">{item.description}</span>
                                <div className="card-read">Read</div>
                            </div>
                            <img src={item.image} alt="images" className="card-media" />
                            <span className="card-tag subtle">Order Now</span>
                        </div>
                    </div>
                )
            }
            </section>
        </>
    )
}
export default MenuCard;