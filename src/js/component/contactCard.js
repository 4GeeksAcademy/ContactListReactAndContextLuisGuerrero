import React, { useContext , useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactCard = ({ fullName, address, phone, email,id}) => {

    const {actions} = useContext(Context);

    const [contactToEdit,setContactToEdit] = useState(
        fullName,address,
    ) 

    const handleDelete = (id) => {
        actions.deleteContact(id);
    }

    return (

        <div className="container border d-flex gap-3 justify-content-center p-2">

            <div className="col-3">
                <img className="col-5 rounded-circle" 
                src="https://cdn.britannica.com/73/234573-050-8EE03E16/Cristiano-Ronaldo-ceremony-rename-airport-Santa-Cruz-Madeira-Portugal-March-29-2017.jpg"></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-between text-start" >
                <div >{fullName}</div>
                <div >{address}</div>
                <div >{phone}</div>
                <div >{email}</div>
            </div>
            <div className="col-1">
                
                <i className="fa-solid fa-pencil"></i>
                <Link to={`/edit-contact/` + id}>
                    Edit
                </Link>
            </div>
            <div className="col-1">
                <button onClick={()=> {handleDelete(id)}}>
                   X
                </button>
            </div>
        </div>
    )
}

export default ContactCard;