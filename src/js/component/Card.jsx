import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, uid, type }) => {
    type == 'people' ? type = 'characters' : ''
    const style = {
        backgroundImage: `url('https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg')`,
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',
        backdropPosition: 'center'
    }
    const blur = {
        backdropFilter: 'blur(1px) saturate(180%)',
        backgroundColor: 'rgba(17, 25, 40, 0.5)',
        padding: '0.5rem',
        borderRadius: '0.3rem',
        width: '100%'
    }
    return (
        <div className="card" style={{ minWidth: '20rem' }}>
            <div style={style} className="d-flex align-items-center ">
                <div style={blur} className="mx-auto">
                    <figure className="mt-5">

                        <img className="img-fluid rounded" src={`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`} alt={name} style={{ filter: 'drop-shadow(0 0 0.75rem white)' }} />
                        <div className="d-flex align-items-center justify-content-between">

                            <figcaption className="text-warning my-3 bg-secondary-tertiary">{name}</figcaption>
                            <Link className="btn btn-outline-warning" to={`/single/${type}/${uid}`}>
                                <span className=" bg-light-subtle">learn more</span>
                            </Link>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}