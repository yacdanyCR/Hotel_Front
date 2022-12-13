import React, { useContext, useState } from 'react'
import { AiOutlineForm } from "react-icons/ai";
import Swal from 'sweetalert2';
import { GuestContext } from '../../Context/GhuestContext';
import { updateCurrentGuest } from '../../services/guestServices/guestServices';
import './style.css'
export const ModalUpdate = ({ guest }) => {
    const { setGuest } = useContext(GuestContext);
    const [modal, setModal] = useState("");
    const [updateGuest, setupdateGuest] = useState({
        id: guest.id,
        name: guest.name,
        lastname: guest.lastname,
        phone: guest.phone,
        country: guest.country
    });

    const handleChange = (e) => {
        e.target.id === 'open' ? setModal("block") : setModal("none");
    }

    const handleGuestChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setupdateGuest((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(updateGuest)
        updateCurrentGuest(updateGuest, setGuest);
        setModal("none");
        Swal.fire('Information updated',
            'You clicked the button!',
            'success')
    }
    return (
        <>
            <div className="modal" style={{ display: modal }}>
                <div className="modal-content modal_update">
                    <div className="modal-header">
                        <span id='close' className="close" onClick={(e) => handleChange(e)}>&times;</span>
                    </div>
                    <div className="modal-body">
                        <div className="modal_account">
                            <div className="container">
                                <form onSubmit={handleSubmit} method='put'>
                                    <div className="modal_input">
                                        <input type="text" name='name' placeholder='Name' defaultValue={updateGuest.name} onChange={(e) => handleGuestChange(e)} />
                                    </div>
                                    <div className="modal_input">
                                        <input type="text" name='lastname' placeholder='lastname' defaultValue={updateGuest.lastname} onChange={(e) => handleGuestChange(e)} />
                                    </div>
                                    <div className="modal_input">
                                        <input type="number" name='phone' placeholder='Phone' defaultValue={updateGuest.phone} onChange={(e) => handleGuestChange(e)} />
                                    </div>
                                    <div className="modal_input">
                                        <select name="country" select={updateGuest.country} onChange={(e) => handleGuestChange(e)}>
                                            <option value="Costarican" defaultValue={"Costarican"}>Costarican</option>
                                            <option value="Mexican">Mexican</option>
                                            <option value="American">American</option>
                                            <option value="Argentinian">Argentinian</option>
                                        </select>
                                    </div>

                                    <button type='submit'>Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AiOutlineForm size={25} color={"blue"} className='open_modal' id="open" onClick={(e) => handleChange(e)} />
        </>
    )
}

export default ModalUpdate