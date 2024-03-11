import { useState } from "react";
import "./Burger.css";

const Burger = () => {

  const [burger_class, setBurgerClass] = useState('burger_btn unclicked')
  const [isBurgerBtnClicked, setIsBurgerBtnClicked] = useState(false)

  const updateBtnState = () => {
    if(!isBurgerBtnClicked){
      setBurgerClass('burger_btn clicked')
    } else{
      setBurgerClass('burger_btn unclicked')
    }
    setIsBurgerBtnClicked(!isBurgerBtnClicked)
  }

  return(
    <div className="burger_menu" onClick={updateBtnState}>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
      <div className={burger_class}></div>
    </div>
  )
};

export default Burger;
