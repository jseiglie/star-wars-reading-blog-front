import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ name, uid, type }) => {
    type == 'people' ? type = 'characters' : ''
    const [style, setStyle] = useState({
        backgroundImage: !error ? `url('https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg')` : 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png',
        backgroundSize: 'cover',

        backgroundRepeat: 'no-repeat',
        backdropPosition: 'center'
    })
    const blur = {
        backdropFilter: 'blur(1px) saturate(180%)',
        backgroundColor: 'rgba(17, 25, 40, 0.5)',
        padding: '0.5rem',
        borderRadius: '0.3rem',
        width: '100%'
    }
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            setStyle({ ...style, ['backgroundImage']: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png' })
            setUrl(error ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png' : `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`)
        }
        setError(false)
    }, [error, style])

    const [url, setUrl] = useState(`https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`)
    const handleImgError = async () => {
        setError(prev => prev = true)
        setStyle({ ...style, ['backgroundImage']: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png' })
        setUrl(error ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png' : `https://starwars-visualguide.com/assets/img/${type}/${uid}.jpg`)
        console.log(style);
    }

    return (
        <div className="card" style={{ minWidth: '20rem' }}>
            <div style={style} className="d-flex align-items-center ">
                <div style={blur} className="mx-auto">
                    <figure className="mt-5">
                        <img className="img-fluid rounded" src={url} onError={handleImgError} />
                        <div className="d-flex align-items-center justify-content-between">
                            <figcaption className="text-warning my-3 bg-secondary-tertiary">{name}</figcaption>
                            <Link className='btn btn-primary' to={`/details/${type}/${uid}/${name.replace(/[\\ ]/g, '-')}`}>
                                <span className=" bg-light-subtle">learn more</span>
                            </Link>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}