import Header from "../Header/Header";
import {useState, useEffect} from "react"
import axios from "axios";
import Resp from "../Resp/Resp";
import Pagination from "../Pogination/Pogination";
const Content = () =>{ 
  
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState (false)
    const [currentPage, setCurrentPage] = useState (1)
    const [setPage] = useState (10)
    const [inputValue , setInputValue] = useState('')
    const inputName = inputValue

    const getApi = async() =>{
      setLoading(true)
      const res = await axios.get(`https://api.github.com/users/${inputName}/repos?per_page=100`)
      
      setRepos(res.data)
      setLoading(false)

}
const lastreposelement = currentPage * setPage
const firstreposelement = lastreposelement - setPage
const currenrepos = repos.slice(firstreposelement , lastreposelement)
const paginate = nums => setCurrentPage(nums)





  return ( 
    <> 
      <Header></Header>
      <div className="container__sm">
        <input className="serch" type="text" placeholder="Serch" onChange={e => setInputValue(e.target.value)} />
        <button className="btn" onClick={getApi}>Click</button>
        <Resp repos={currenrepos} loading={loading} />
        <Pagination
        reposPage={setPage}
        repostotal={repos.length} 
        paginate = {paginate}     
        />
      </div>


    </> 
  ); 
} 

export default Content;