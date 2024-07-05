import React, { useContext, useEffect } from "react";
import { Modal } from "../component/modal.jsx";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";


export const Details = () => {

    const { store, actions } = useContext(Context)
    const params = useParams()
    console.log(params) // devuelve objeto con la propiedad que se puse en layout con los dos puntos despues del slash
    const { uid, type } = useParams() // desescrtucturar el objeto

    useEffect(() => {
        //        actions.getDetails(params.uid, params.type) //si se dejo el params como objeto
        actions.getDetails(uid, type) // si se desestructuró el params
    }, [])



    return (
        <>
            <h1 className="text-white">vista nueva para {store.details?.properties?.name}!</h1>
        </>
    )
}