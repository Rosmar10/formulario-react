import React from "react";

const Button = ({visible}) => {
    return(
        <div className="button">
            <button disabled={visible} className="btn btn-secondary">
                Enviar
            </button>
        </div>
    )
};
export default Button;