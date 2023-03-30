import React from 'react';
import Title from './../components/Title/index';
import Plans from './../components/Plans/index';
 
function Planos(){
    return (
        <div>
            <Title
                title={"Planos"}
                text={"Veja abaixo os planos disponíveis:"} />
             <Plans />        
        </div>
    )   
}
 
export default Planos;