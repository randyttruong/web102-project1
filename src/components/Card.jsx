import { useState } from 'react'
import './Card.css'

function Card( {image, modelName, companyName, price, listing} = props) {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="Card">
        <div className="container">
            <img className = "img" src={image} alt="image" />
            <h1>{modelName}</h1>
            <h2>{companyName}</h2>
            <h2>{price}</h2>
            <a className="button" href={listing}>Link</a>
        </div>
    </div>
    </>
  )
}

export default Card
