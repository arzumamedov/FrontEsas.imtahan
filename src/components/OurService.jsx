import React, { useContext, useEffect, useState } from 'react'
import './OurService.scss'
import { NavLink } from 'react-router-dom'
import { SearchContext } from '../context/searchContext'
function OurService() {
    const [data, setData] = useState([])
    const {search,handleSearch} = useContext(SearchContext)
    const [sortedProperty, setSortedProperty] = useState(null)


    useEffect(() => {
        fetch("http://localhost:8000/")
            .then((res) => res.json())
            .then((api) => setData(api))
    }, [])



    return (
        <>
            <div className='ourService'>
                <div className='h2'>
                    <h2>Our Services</h2>
                    <input type="text" onChange={(e)=>handleSearch(e)}/>
                    <button onClick={()=>setSortedProperty({property:"name", asc:true})}>A-Z</button>
                    <button onClick={()=>setSortedProperty({property:"name", asc:false})}>Z-A</button>
                    <button onClick={()=>setSortedProperty(null)}>Default</button>
                </div>
                <div className='data'>
                    {data
                    .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
                    .sort((a,b) => {
                        if (sortedProperty && sortedProperty.asc=== true) {
                            return (a[sortedProperty.property].toLowerCase() > b[sortedProperty.property].toLowerCase()) ? 1 : ((b[sortedProperty.property].toLowerCase() > a[sortedProperty.property].toLowerCase()) ? -1 : 0)
                        }else if (sortedProperty && sortedProperty.asc === false) {
                            return (a[sortedProperty.property].toLowerCase()  < b[sortedProperty.property].toLowerCase() ) ? 1 : ((b[sortedProperty.property].toLowerCase()  < a[sortedProperty.property].toLowerCase() ) ? -1 : 0)
                        }else{
                            return 0
                        }
                    })
                    .map((x) => (
                        <div key={x._id} className='cards'>
                            <i className={x.icon}></i>
                            <div>{x.name}</div>
                            <div>{x.description}</div>
                            <NavLink to={"detail/"+x._id}><div className='learnMore'>Learn More</div></NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default OurService