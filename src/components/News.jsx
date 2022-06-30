import React from "react";
import NewsSwiper from "./subComponents/NewsSwiper";

function News(){
  return(
    <div className="section mt-40">
      <div className="layout">
        <div className="section__title">News</div>
        <NewsSwiper/>
      </div>
    </div>
  )
}

export default News;