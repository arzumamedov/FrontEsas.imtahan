import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const [detail, setDetail] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch("http://localhost:8000/" + id)
            .then((res) => res.json())
            .then((api) => setDetail(api))
    }, [])

    return (
        <div>
            <ul>
                <li className={detail.icon}></li>
                <li>{detail.name}</li>
                <li>{detail.description}</li>
                </ul>
        </div>
    )
}

export default Detail