// src/components/IngredientList.jsx
import React from "react";
const IngredientList = (props) => {
  const ingredients = props.ingredients;


  const handleAddIngredient = (event) => {
    event.preventDefault()
    console.log(`test`);
    const newIngredient = event.target;
    console.log(newIngredient);
  };

  return (
    <>
      <div>
        <h3>ingredients list</h3>
        {/* {ingredients.map((ingredient) => {
                return (
                <button>{ingredient.name}</button>
            )})} */}
        <ul>
          {props.ingredients.map((ingredient, index) => {
            return (
              <React.Fragment key={index}>
                <form onSubmit={handleAddIngredient}>
                  <div style={{ backgroundColor: ingredient.color }}>
                    {ingredient.name}{" "}
                    <button type="submit">
                      <strong>+</strong>
                    </button>
                  </div>
                  {/* <button>{ingredient.name}</button> */}
                </form>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default IngredientList;
