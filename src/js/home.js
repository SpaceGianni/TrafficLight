import React, { useState } from 'react';

import '../styles/index.css';

export function Semaforo() {
    const [color, setColor] = useState("verde");
    return (
        <div className="semaforo">
            <div onClick={() => setColor("rojo")}
                className={"luz rojo" + (color === "rojo" ? " brillo" : "")}></div>
            <div onClick={() => setColor("amarillo")}
                className={"luz amarillo" + (color === "amarillo" ? " brillo" : "")}></div>
            <div onClick={() => setColor("verde")}
                className={"luz verde" + (color === "verde" ? " brillo" : "")}></div>

        </div>
    )

}