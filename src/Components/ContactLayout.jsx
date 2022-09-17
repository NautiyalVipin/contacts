
// ----------------------------------------------  ContactDetails Functional Component ---------------------------------------------

function ContactLayout(props) {
  
  const {
   contact,
    onSubmit,
    type,
    isEditing,
    formAction,
    changeHandle
  } = props;

  // All the properties in contact 
  const contactItem = [
    { item: "name", value: contact.name },
    { item: "email", value: contact.email },
    { item: "username", value: contact.username },
    { item: "phone", value: contact.phone },
    { item: "website", value: contact.website },
    { item: "suite", value: contact.address.suite },
    { item: "street", value: contact.address.street },
    { item: "city", value: contact.address.city },
  ];


  return (
    
    // Form for Editing and Adding Contact
    <form

      className={style.form}
      onSubmit={(e) =>
        {
            e.preventDefault();    
            onSubmit()
        } 
    }
      action={formAction} 
    >
      {/* form Items */}
            <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[0].item}>{contactItem[0].item}</label>
            <input className={style.formInput} type="text"  id={contactItem[0].item} name={contactItem[0].item} onChange={changeHandle} disabled={isEditing} value={contactItem[0].value} />
            </div> <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[1].item}>{contactItem[1].item}</label>
            <input className={style.formInput} type="email" id={contactItem[1].item} name={contactItem[1].item} onChange={changeHandle} disabled={isEditing} value={contactItem[1].value} />
            </div>
            <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[2].item}>{contactItem[2].item}</label>
            <input className={style.formInput} type="text" id={contactItem[2].item} name={contactItem[2].item} onChange={changeHandle} disabled={isEditing} value={contactItem[2].value} />
            </div>
            <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[3].item}>{contactItem[3].item}</label>
            <input className={style.formInput} type="text" id={contactItem[3].item} name={contactItem[3].item} onChange={changeHandle} disabled={isEditing} value={contactItem[3].value} />
            </div>
            <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[4].item}>{contactItem[4].item}</label>
            <input className={style.formInput} type="text" id={contactItem[4].item} name={contactItem[4].item} onChange={changeHandle} disabled={isEditing} value={contactItem[4].value} />
            </div>
            <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[5].item}>{contactItem[5].item}</label>
            <input className={style.formInput} type="text" id={contactItem[5].item} name={contactItem[5].item} onChange={changeHandle} disabled={isEditing} value={contactItem[5].value} />
            </div>
            <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[6].item}>{contactItem[6].item}</label>
            <input className={style.formInput} type="text" id={contactItem[6].item} name={contactItem[6].item} onChange={changeHandle} disabled={isEditing} value={contactItem[6].value} />
            </div>
            <div   className={style.formItem}>
            <label className={style.formLabel} htmlFor={contactItem[7].item}>{contactItem[7].item}</label>
            <input className={style.formInput} type="text" id={contactItem[7].item} name={contactItem[7].item} onChange={changeHandle} disabled={isEditing} value={contactItem[7].value} />
            </div>
            {/* Edit or Add Contact Button for the form */}
            {!isEditing && <button className={style.formBtn}>{type}</button>}
            </form>
  );
}

// --------------------------------------------  Styles (Tailwind Classes)  --------------------------------------

const style={

  form:"w-96 grid gap-5",
  formItem:"grid w-[36vw]  grid-cols-1 md:grid-cols-2 ",
  formLabel:"capitalize text-white",
  formInput:"rounded text-black",
  formBtn:"bg-sky-200 md:justify-self-center w-40  rounded "

}

export default ContactLayout;
