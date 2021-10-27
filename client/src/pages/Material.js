import React from 'react'

const Material = ({name,eventclick}) => {
    return (
        <div>
            {name}
            <div className="btn" onClick={() => {
                eventclick(name);
            }}>
                Zobrazit detail
            </div>
        </div>
    )
}

export default Material
