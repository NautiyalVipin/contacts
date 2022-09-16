import React, { useEffect, useReducer,createContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reducer from "./Reducer/Reducer";
import Card from "./Components/Card";
import AddContact from "./Components/AddContact"

// Contact items Layout
let createObject =  {
    id:3,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }


// Creating Context
const context = createContext();

/* ------------------------------------- Component Structure  ------------------------------------
                   
                       App--------Reducer
                 _________________|_______________
                /                                 \           
            AddContact                           Card
              /                                     \
      ContactDetails                             CardDetail
                                                      \
                                                  EditContact
                                                        \
                                                  ContactDetails     
             


*/




function App() {
 
  
  // Notifications for Adding, Editing and Deleting contacts
  const notifyAdd = () => toast("Contact Added Successfully");
  const notifyEdit = () => toast("Contact Edited Successfully");
  const notifyDelete = () => toast("Contact Deleted Successfully");

  // useReducer, Global state management
  const [state, dispatch] = useReducer(Reducer, {
    contactList:[],
    addingContact:false,
    addBody:{...createObject},
    editBody:{},
    editingContact:false,
    showDetails:false,
    deletingContact:false,
    loader:false,
    homeLoader:false,
    notifyAdd:notifyAdd,
    notifyEdit:notifyEdit,
    notifyDelete:notifyDelete,

  })
  
// Fetching users data during the first run
  useEffect(() => {
    dispatch({type:"toggleHomeLoader"})
    const API_URL = `https://jsonplaceholder.typicode.com/users`;
    const fetchData = async () => {
      const res = await fetch(API_URL);
      if (res.status === 200) {
        let data = await res.json();
        dispatch({type:"getlist",payload:data})
        dispatch({type:"toggleHomeLoader"})
      } else return res.status(404);
    };
    fetchData();
  }, []);

  return (
    // Context Provider Wrapper
    <context.Provider value={{state,dispatch}}>
      {/* Toast container for notifications */}
      <ToastContainer
      autoClose={2000}
      />
    <main className={style.container1}>
      <div className={style.container2}>
        {/* Navbar  */}
        <div className={style.navBar}>
          {/* Load AddContact Item  on click of add contact button */}
          {state.addingContact && <AddContact
          />
        }   
          <div
            className={style.navBarHeader}
            
          >My Contact List</div>
          {/* Add Contact Button */}
          <button className={style.navBarButton}
          onClick={()=>dispatch({type:"addingContact"})}>Add Contact</button>
        </div>
        {/* Mapping Contact Item component */}
        <div className={style.cardContainer}>
          {state.homeLoader ? (
            <div className={style.loader}>
              <ClipLoader color="black"></ClipLoader>
            </div>
          ) : (
            state.contactList?.map((e,index) => {
              return (
                <Card
                  key={index}
                  id={index+1}
                  item={e}
                />
              );
            })
          )}
        </div>
      </div>
      {/* Footer Component */}
      <footer className={style.footer}>
        
        &#169;codingProjects2022
      </footer>
    </main>
    </context.Provider>
  );
}

// ------------------------------------  Styles (Tailwind Classes)  ----------------------------------------------------- 


const style={
  container1:"text-center border-2 border-sky-800 bg-sky-800",
  container2:"bg-blue-200 border-3 border-gray-400 p-4 text-center font-mono relative rounded",
  navBar:"sticky top-0 border border-gray-400 px-10 left-0 right-0 bg-blue-100 flex justify-between rounded-xl",
  navBarHeader:"w-80 inline-block text-2xl font-bold rounded-xl m-2",
  navBarButton:"bg-sky-800 mr-10 m-2 px-1  text-white rounded",
  cardContainer:"grid lg:grid-cols-3 md:grid-cols-2 grid-flow-dense rounded gap-4 p-10",
  loader:"text-center w-[90vw]",
  footer:"text-2xl font-bold text-stone-800 font-mono rounded-xl p-2 m-2"

}


export default App;
export {context};
