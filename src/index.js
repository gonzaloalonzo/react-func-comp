import React from 'react';
import ReactDOM from 'react-dom';

function List() {
 return(
 <>
 <h1>Gonzalo Alonzo</h1>
 <p>Probando un Functional component para entender el funcionamiento de React</p>
 <ul>
     <li> Un Gato</li> 
     <li>Un Perro</li>
     <li>Un Conejo</li> 
   </ul>
  <h2> Para renderizar mas de un componente se necesita una etiqueta como contenedor que son las vacias!</h2>
  </>
 )
}

ReactDOM.render(
  <List /> 
  ,
  document.getElementById('root')
)