import ContactDetails from "./ContactDetails";
import { context } from "../App";
import { useContext } from "react";



// --------------------------------------- Style Component Functional Component -----------------------------


const EditContact =()=>{
      const { state, dispatch } = useContext(context); // Loading global State and dispatch using Context

      // Editing Contact using PUT method of fetch API
      const editContact = async () => {
            dispatch({type:"toggleLoader"})
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${state.editBody.id}`, {
              method: "PUT",
              body: JSON.stringify({
                ...state.editBody
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            });
            if(response.status===200){
                let data = await response.json();
                dispatch({type:"editContact",payload:data})
                state.notifyEdit();
            }
            else{
                alert("Contact Creation Failed");
            }
        
        
          };
        
        
      // Changing the editbody state  on input change 
      const editContactHandle = (event)=>{
            const {value,name} = event.target;
            dispatch({type:"editContactHandler",fieldname:name,payload:value})
            
          }

        return (<
        ><ContactDetails
         contact={state.editBody}
         contactHandle={editContactHandle}
         addContact={editContact}
         type={"Edit Contact"}
         formAction={"PUT"}
         isEditing={!state.editingContact}
        />
        </>)
  }

  export default EditContact