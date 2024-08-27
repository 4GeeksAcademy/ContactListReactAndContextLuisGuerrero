import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useState} from "react";
import { Context } from "../store/appContext";

const FormularioNuevoContacto = () => {

    const { actions } = useContext(Context);

    const [newContact,setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        id: 0
    })

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setNewContact({
            ...newContact,
            [name]:value
        })
    }

    const handleSubmit = () => {
        actions.createContact(newContact);
        navigate("/")
    }

    return(
        <div className="container justify-content-center ">

            <h1 className="text-center mb-3">Add a new contact</h1>

            <div className="d-flex flex-column input-group mb-3 ">
                <strong><p className="mb-1">Full Name</p></strong>
                <input type="text" className="form-control w-100" placeholder="Full Name" name="name" 
                onChange={handleInputChange}
                value={newContact.name}
                />
            </div>

            <div className="d-flex flex-column input-group mb-3 ">
                <strong><p className="mb-1">Email</p></strong>
                <input type="text" className="form-control w-100" placeholder="Enter email" name="email"
                onChange={handleInputChange}
                value={newContact.email}
                />
            </div>

            <div className="d-flex flex-column input-group mb-3 ">
                <strong><p className="mb-1">Phone</p></strong>
                <input type="text" className="form-control w-100" placeholder="Enter phone" name="phone"
                onChange={handleInputChange}
                value={newContact.phone}
                />
            </div>

            <div className="d-flex flex-column input-group mb-3 ">
                <strong><p className="mb-1">Address</p></strong>
                <input type="text" className="form-control w-100" placeholder="Enter address" name="address"
                onChange={handleInputChange}
                value={newContact.address}
                />
            </div>

            <button className="btn btn-primary w-100" onClick={handleSubmit}>
                Save
            </button>

            <Link to="/">
				<p className="mb-0">or get back to contacts</p>
			</Link>
        </div>
    )
}


export default FormularioNuevoContacto;