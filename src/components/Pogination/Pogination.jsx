import React, { useState } from "react";

const Pagination = ({reposPage, repostotal, paginate})=>{
  const [page, setPage] = useState(1)
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
            <a href="#start" className={page === item ? 'pagination__btn':'pagination__btn2'}><a onClick={e => paginate(item)&setPage(item)}>{item}</a></a>
          </li>
          
        ))
      }
    </ul>
    </>
  )
}
export default Pagination;