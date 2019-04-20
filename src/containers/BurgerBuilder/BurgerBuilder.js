import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
 

const INGREDIENT_PRICES={
    salad: 0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

class BurgerBuilder extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={

    //     };
    // }
    state={
        ingredients:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4
    }

addIngredientHandler =(type)=>{
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount +1;
    const updatedIngredient = {
        ...this.state.ingredients //copied all elements into updatedIngredients because arrays are pointers T_T
    }
    updatedIngredient[type]=updatedCount; // salad||bacon||meat||cheese were increased by +1

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition; // Updated total price ;)
    this.setState({
        totalPrice:newPrice,
        ingredients:updatedIngredient
    })

}

removeIngredientHandler =(type)=>{
    const oldCount = this.state.ingredients[type];
    
    if (oldCount!==0) {
        const updatedCount = oldCount -1;    
        const updatedIngredient = {
            ...this.state.ingredients 
        }
        updatedIngredient[type]=updatedCount;  
    
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction; 
        this.setState({
            totalPrice:newPrice,
            ingredients:updatedIngredient
        })
    }
    
}


    render(){
        const disabledInfo={
            ...this.state.ingredients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key] <=0 // {salad:true, meat:false}   //magic 
        }
        return(   
            <Auxiliary>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    />
            </Auxiliary>
        );
    }

}

export default BurgerBuilder;