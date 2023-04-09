import {useState, useEffect} from "react"
import Content from "../Content/Content"
const Resp = ({repos,loading})=>{
  if(loading){
    return <p>
      <div class="dot-spinner">
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
    <div class="dot-spinner__dot"></div>
</div>
    </p>
  }
  return(
    <>
    <li>
      {
        repos.map(item => (
          <div className="content">
            <div className="all__cards">
              <img className="img" src={item.owner.avatar_url}   alt="" />
              <p className="name">{item.full_name}</p>
              <p className="data">{item.pushed_at}</p>
              <p className="star">{item.stargazers_count} ☆ ☆ ☆</p>
              <a className="sell" href={item.html_url}>Go to repository</a>
            </div>
          </div>
        ))
      }
    </li>
    </>
  )
}
export default Resp;