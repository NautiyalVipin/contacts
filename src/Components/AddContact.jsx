import ContactLayout from "./ContactLayout";
import { context } from "../App";
import { useContext } from "react";
import { ClipLoader } from "react-spinners";



// -------------------------------------------- Add Contact functional Component -------------------------------------------

const AddContact =()=>{

     
  const { state, dispatch } = useContext(context); // Loading global State and dispatch using Context

// Adding contact using POST method of fetch API called inside contactDetails component
      const addContact = async () => {
      dispatch({type:"toggleLoader"})
   
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
          ...state.addBody
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if(response.status===201){
         
      let data = await response.json();
          dispatch({type:"addContact",payload:data})
          dispatch({type:"addingContact"})
          state.notifyAdd();
         
           
      }
      else{
          alert("Contact Creation Failed");
      }
  
    };

// Changing the Add Body state on input change 
    const addContactHandle =(event)=>{
      const {value,name} = event.target;
      dispatch({type:"addContactHandler",fieldname:name,payload:value})
  
}

          return (<div
        className={style.detailContainer}
        > 
          <button
            onClick={() => {
              dispatch({type:"addingContact"})
            }}
            className={style.closeDetailBtn}
          >
            X
          </button>
            <ContactLayout
        changeHandle={addContactHandle}
        onSubmit={addContact}
        contact={state.addBody}
        type={"Add Contact"}
        formAction={"POST"}
        />
        {state.loader && <div className={style.loader}>
        <ClipLoader color="white"></ClipLoader>
      </div>}
      
        </div>)
  }

  // -----------------------------------------------   Styles (Tailwind Classes)  -----------------------------------------------

const style={
  addContainer:"fixed rounded top-[12%] md:left-[28vw] lg:left-[32vw] border-black border-2   p-10 justify-center  grid   bg-sky-800",
  loader:"text-center",
  detailContainer:"fixed overflow-y-auto  top-14 left-[26%]  p-14 inset-x-9  w-[50vw] h-[84vh] border border-gray-800 z-10 bg-sky-900 rounded-3xl text-white",
  closeDetailBtn:" rounded-full  bg-gray-200 w-16 text-black absolute right-0 top-0 m-4 p-1"
}

  export default AddContact