import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';



const burger = (props) => {
    let transformdIngredients = Object.keys(props.ingredients)      // This is like using two for loops 
        .map(igKey =>{
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey+i} type={igKey}/> 
            });
    })
    .reduce((arr,el)=>{         // This was used to flatten the code 
        return arr.concat(el)
    },[]);
    if (transformdIngredients.length===0) {
        transformdIngredients = <p>Please Start Adding ingredients</p>
    }
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformdIngredients}
            <BurgerIngredient type="bread-bottom"/>
            
        </div>
    );
};


export default burger;