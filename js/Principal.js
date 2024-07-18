/*
PERSONAS-B

Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y
reporte al final la edad promedio y la edad mayor entre las mujeres.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18),
José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida

presenta el siguiente formato:
Edad promedio: 18.50
Edad mayor entre las mujeres: 19
*/

import Cl_Persona from "./Cl_Persona.js";
import Cl_Reporte from "./Cl_Reporte.js";

const reporte = new Cl_Reporte();
const Persona1 = new Cl_Persona('Luis', 15, 'M');
const Persona2 = new Cl_Persona('Ana', 19, 'F');
const Persona3 = new Cl_Persona('José', 21, 'M');
const Persona4 = new Cl_Persona('Carmen', 17, 'F');
const Persona5 = new Cl_Persona('Rosa', 18, 'F');
const Persona6 = new Cl_Persona('José', 22, 'M');
const Persona7 = new Cl_Persona('María', 17, 'F');
const Persona8 = new Cl_Persona('Luz', 19, 'F');
const Persona9 = new Cl_Persona('Rafael', 23, 'M');
const Persona10 = new Cl_Persona('Liz', 15, 'F');
const Persona11 = new Cl_Persona('Marcos', 20, 'M');
const Persona12 = new Cl_Persona('Leo', 16, 'M');

let salida = document.getElementById("salida");

reporte.procesarPersona(Persona1);
reporte.procesarPersona(Persona2);
reporte.procesarPersona(Persona3);
reporte.procesarPersona(Persona4);
reporte.procesarPersona(Persona5);
reporte.procesarPersona(Persona6);
reporte.procesarPersona(Persona7);
reporte.procesarPersona(Persona8);
reporte.procesarPersona(Persona9);
reporte.procesarPersona(Persona10);
reporte.procesarPersona(Persona11);
reporte.procesarPersona(Persona12);


salida.innerHTML=`
Edad promedio: ${reporte.promedioEdad()}
<br>Edad mayor entre las mujeres: ${reporte.EdadMayor()}
`