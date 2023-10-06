import React from 'react'
import './View.css'

const View = ({view, changeView}) => {

  const changeViewOnClick = (btn)=>{
    if(btn==="all" && view===true){
      changeView();
    }else if(btn==="new" && view===false){
      changeView();
    }
  }

  return (
    <div className="view-btns">
        <button className={"view-btn btn "+ (view ? "not_active" : "active")} onClick={()=>changeViewOnClick("all")}>All Promotions</button>
        <button className={"view-btn btn "+ (view ? "active" : "not_active")} onClick={()=>changeViewOnClick("new")}>New Customers</button>
    </div>
  )
}

export default View