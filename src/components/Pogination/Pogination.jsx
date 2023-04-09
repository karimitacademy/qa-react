import React from "react";

const Pagination = ({reposPage, repostotal, paginate})=>{
  const num = []
  for(let i = 1;i < Math.ceil(repostotal / reposPage); i++){
    num.push(i)
  }
  return(
    <>
    <ul className="pagination">
      {
        num.map(item =>(
          <li key={item}>
            <div className="pagination__btn"><a onClick={e => paginate(item)}>{item}</a></div>
          </li>
          
        ))
      }
    </ul>
    </>
  )
}
export default Pagination;