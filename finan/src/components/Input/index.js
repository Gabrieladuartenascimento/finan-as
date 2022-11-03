import React from "react";
import * as C from "./styles";

const Input = ({type, placehoLder, vaLue, onChange}) => {
    return(
        <C.Input
        value={vaLue}
        onChange={onChange}
        type={type}
        placehoLder={placehoLder}
        />
    );
};

export default Input;