import React, {useContext } from "react";
import CardDetail from "./CardDetail";
import { context } from "../App";



// ------------------------------------- Card Functional Component -------------------------------


const Card = (props) => {
   
    const {contact } = props; //All the details of the contact item 
    const { state, dispatch } = useContext(context); //Loading Global state and dispatch using Context API  
 
  
  return (
    <>
    {/* Show all the card details */}
    {state.showDetails && <CardDetail/>}
    <section
      onClick={() => {
        dispatch({type:"loadEdit",payload:contact})
        dispatch({type:"showDetails"})
    }}
        
      className={style.cardContainer}
    >
      {/* Contact Card with basic details */}
      <div className={style.card}>
        <h3>Username</h3>
        <span>&nbsp;:</span>
        <h3 className={style.cardItem}>{contact.username}</h3>
        <h3>Name</h3>
        <span>&nbsp;:</span>
        <h3 className={style.cardItem}>{contact.name}</h3>
        <h3>Email</h3>
        <span>&nbsp;:</span>
        <h3 className={style.cardItem}> {contact.email}</h3>
      </div>
    </section>
    </>
  );
};

// --------------------------------------- Styles (Tailwind Classes) ----------------------------------------------

const style={
      
  cardContainer:"flex-auto p-4  bg-blue-100 border border-gray-400 transition-all ease-in-out hover:translate  hover:bg-sky-900 hover:text-white rounded-lg",
  card:"grid gap-2  grid-cols-5",
  cardItem:"font-bold break-words col-span-3",


}

export default Card;
