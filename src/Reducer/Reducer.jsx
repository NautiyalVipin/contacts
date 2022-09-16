
// Reducer for changing Global State
const Reducer =(state,action)=>{


switch (action.type) {
    //  Loading Contact list initially  
    case "getlist":
        return {...state,contactList:action.payload}
    // Toggle Loader for Adding and Editing Contact 
    case "toggleLoader":
        return {...state,loader:!state.loader}
    // Toggle Home Loader for for initial Data Loading
    case "toggleHomeLoader":
        return {...state,homeLoader:!state.homeLoader}
    // AddContact component becomes visible  
    case "addingContact":
        return {...state,addingContact:!state.addingContact}
    // Adding new contact to global state from API response   
    case "addContact":
        return {...state,contactList:state.contactList.concat(action.payload),loader:false}
    // Change handler for add contact items 
    case "addContactHandler":
        return {...state,addBody:{...state.addBody,[action.fieldname]:action.payload}}
    // Load all the details into carddetail item
    case "loadEdit":
            return {...state,editBody:action.payload}
    // Show all the contact card details
    case "showDetails":
            return {...state,showDetails:!state.showDetails,editingContact:false}
    // Make the details on contact card editable
    case "editingContact":
            return {...state,editingContact:!state.editingContact} 
    // Change handler for edit contact items 
    case "editContactHandler":
        return {...state,editBody:{...state.editBody,[action.fieldname]:action.payload}}
    // Updating  contact to global state from API response
    case "editContact":
        let list = state.contactList.map((item)=>{
            if(item.id===state.editBody.id){
                return state.editBody

            }
            return item
        })
        return {...state,contactList:list,editingContact:!state.editingContact,loader:false}
    // Delete Contact PopUP confirmation 
    case "deletingContact":
            return {...state,deletingContact:!state.deletingContact}
    // Deleting contact from global state
    case "deleteContact":
        let filteredlist = state.contactList.filter((item)=>item.id!==state.editBody.id)
        return {...state,contactList:filteredlist,showDetails:false,loader:false}
   

    default:
        break;
}


}

export default Reducer