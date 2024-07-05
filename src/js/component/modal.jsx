import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = ({uid}) => {

    const {store, actions} = useContext(Context)

    const handleClose = () => {
        actions.modalToggle()
    }

    const style ={
        'position': 'abolsute',
        'left': 50,
        'up': 50,
        'width': '50%',
        'zIndex': 99
    }

return (
    <div style={style} >
        <button onClick={actions.delete(store.selected)}>delete</button>
        <button onClick={handleClose}>cerrar</button>
    </div>
)

}