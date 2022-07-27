
import classes from './Card.module.css';

function Cart({countrie}) {
console.log(countrie)
   
  return (
    <div className={classes.cardContainer}>
      <img src={countrie.flags.png} className={classes.image} />
      <p>Name: {countrie.name.official}</p>
      <p>Capital: {countrie.capital}</p>
      <p>Area: {countrie.area} </p>
    </div>
  )
}

export default Cart
