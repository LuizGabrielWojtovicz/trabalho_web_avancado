import React from 'react';
import Title from './../components/Title/index';
import About from './../components/About/index';

function Sobre() {
    
    return (
        <div>  
            <Title
                title={"Sobre"}
                text={"Mais informações sobre a empresa"} /> 
                <About />             
        </div>
    )
}

export default Sobre;