
import { Link } from 'react-router-dom';
import classes from './Card.module.css';

function Cart({countrie}) {

   
  return (
     <div className={classes.cardContainer}>
      <img src={countrie.flags.png} className={classes.image} />
      <p>Name: {countrie.name.official}</p>
      <p>Capital: {countrie.capital}</p>
      <p>Area: {countrie.area} </p>
      <Link to={`/${countrie.name.official}`}>More Details</Link>
    </div>
  
  )
}

export default Cart
