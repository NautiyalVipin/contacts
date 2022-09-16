import { useContext } from "react";
import EditContact from "./EditContact";
import { ClipLoader } from "react-spinners";
import { context } from "../App";


// ----------------------------------------- CardDetail Functional Component  ------------------------------------------

const CardDetail = () => {

    const { state, dispatch } = useContext(context); //Loading Global state and dispatch using Context API  

    //Deleting contact using DELETE method  
    const deleteContact = async () => {
        
                dispatch({type:"toggleLoader"})
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${state.editBody.id}`, {
                  method: "DELETE",
                 
                });
                if(response.status===200){
                    dispatch({type:"deleteContact"})
                    state.notifyDelete();
                }
                else{
                    alert("Contact Creation Failed");
                }
            
          };  
    
    return (
      <>
     {/* Showing all the card details */}
        <section className={style.detailContainer}>
        {state.deletingContact && <div className={style.deleteContainer}>
            <span className={style.deletePopup}>Please click on confirm to delete</span>
        {/* Delete Popup Button */}
        <button onClick={()=>{
            dispatch({type:"deletingContact"})
            deleteContact();

        }}
         className={style.deletePopupBtn}>Confirm</button>
        {/* Delete Popup Button */}
        <button onClick={()=>{
            dispatch({type:"deletingContact"})
        }}
         className={style.deletePopupBtn}>Cancel</button>
      </div>}
          <div className={style.editBtn}>
            {/* Edit Contact Button */}
            <i
              onClick={()=>dispatch({type:"editingContact"})}
              className="fa-solid fa-pen"
            ></i>
            {/* Delete Contact Button */}
            <i 
            onClick={()=>dispatch({type:"deletingContact"})}
            className="fa-solid fa-trash-can"></i>
          </div>
          {/* Close Contact Detail Button */}
          <button
            onClick={() => {
              dispatch({type:"showDetails"})
            }}
            className={style.closeDetailBtn}
          >
            X
          </button>
           {/* Loading Show details and Editing Contact section */}
          <EditContact/>
          {state.loader && <div className={style.loader}>
              <ClipLoader color="white"></ClipLoader>
            </div>}
        </section>
      </>
    );
  };
 
//------------------------------------------------- Styles  ---------------------------------------------------- 

const style={
  detailContainer:"fixed overflow-y-auto  top-14 left-[26%]  p-14 inset-x-9  w-[50vw] h-[84vh] border border-gray-800 z-10 bg-sky-900 rounded-3xl text-white",
  deleteContainer:"fixed top-45 bg-sky-600 p-5 rounded-lg  left-[30%] z-40 text-black",
  deletePopup:" bg-sky-200 p-2 rounded-lg",
  deletePopupBtn:"p-1 ml-2 bg-sky-900 border text-white rounded-lg border-white",
  editBtn:"flex gap-3 justify-start absolute left-0 top-0 m-4 p-1",
  closeDetailBtn:" rounded-full  bg-gray-200 w-16 text-black absolute right-0 top-0 m-4 p-1",
  loader:"text-center w-[40vw]"
}




export default CardDetail
