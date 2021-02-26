import React from 'react';

export const Nutracing = () => {
    
    return(
        <table>
            <thead>
                <tr>
                    <th>Horario</th>
                    <th>Comida</th>
                    <th>Tipo</th>
                    <th>Cantidad</th>
                    <th>Unidad</th>
                    <th>Opciones</th>
                </tr> 
           </thead>
           <tbody>
                <tr>
                    <td rowSpan="2">09:00</td>
                    <td rowSpan="2">DESAYUNO</td>
                    <td rowSpan="2">LACTEO</td>
                    <td>120</td>
                    <td>gr</td>
                    <td>yogurt protein</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>tazón</td>
                    <td>leche descremada con algo</td>
                </tr>
                <tr>
                    <td rowSpan="2">11:00</td>
                    <td rowSpan="2">COLACION 1</td>
                    <td rowSpan="2">LACTEO</td>
                    <td>120</td>
                    <td>gr</td>
                    <td>yogurt protein</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>tazón</td>
                    <td>leche descremada con algo</td>
                </tr>
           </tbody>
        </table>
    )
}