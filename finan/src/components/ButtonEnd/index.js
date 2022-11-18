import React from "react";
import * as C from "./styles";

const ButtonEnd = ({Text, onClick, Type = "buttonend"}) => {
    return(
        <C.ButtonEnd type={Type} onClick={onClick}>
            {Text}
        </C.ButtonEnd>
        
    );
};

export default ButtonEnd;