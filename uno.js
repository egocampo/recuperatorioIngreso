/*
Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var puestoIngresado;
	var sueldoIngresado;
	var continuar;
	var acumuladorSueldosProgramador=0;
	var contadorProgramadores=0;
	var acumuladorSueldosAnalista=0;
	var contadorAnalistas=0;
	var acumuladorSueldosQa=0;
	var contadorQa=0;
	var promedioProgramadores;
	var promedioAnalistas;
	var promedioQa;
	var flagSexoMayorSueldo=true;
	var sexoMayorSueldo;
	var sueldoSexoMayorSueldo;
	var flagFemeninoMayorSueldo=true;
	var sueldoFemeninoMayorSueldo;
	var nombreFemeninoMayorSueldo;
	var contadorProgramadoresNoBinariosEntre20y55k=0;

	do
	{
		nombreIngresado=prompt("Ingrese el nombre");
		while(!isNaN(nombreIngresado))
		{
			nombreIngresado=prompt("Dato no válido. Ingrese el nombre");
		}
		edadIngresada=parseInt(prompt("Ingrese la edad"));
		while(isNaN(edadIngresada) || edadIngresada<0 || edadIngresada>150)
		{
			edadIngresada=parseInt(prompt("Dato no válido. Ingrese la edad"));
		}
		sexoIngresado=prompt("Ingrese el sexo (masculino/femenino/no binario)");
		while(sexoIngresado!="masculino" && sexoIngresado!="femenino" && sexoIngresado!="no binario")
		{
			sexoIngresado=prompt("Dato no válido. Ingrese el sexo (masculino/femenino/no binario)");
		}
		puestoIngresado=prompt("Ingrese el puesto (programador/analista/qa)");
		while(puestoIngresado!="programador" && puestoIngresado!="analista" && puestoIngresado!="qa")
		{
			puestoIngresado=prompt("Dato no válido. Ingrese el puesto (programador/analista/qa)");
		}
		sueldoIngresado=parseInt(prompt("Ingrese el sueldo (entre 15.000 y 70.000)"));
		while(isNaN(sueldoIngresado) || sueldoIngresado<15000 || sueldoIngresado>70000)
		{
			sueldoIngresado=parseInt(prompt("Dato no válido. Ingrese el sueldo (entre 15.000 y 70.000)"));
		}
		continuar=confirm("¿Desea agregar otro empleado?");
		switch(puestoIngresado)
		{
			case "programador":
				acumuladorSueldosProgramador+=sueldoIngresado;
				contadorProgramadores++;
				if(sexoIngresado=="no binario" && sueldoIngresado>20000 && sueldoIngresado<55000)
				{
					contadorProgramadoresNoBinariosEntre20y55k++;
				}
				break;
			case "analista":
				acumuladorSueldosAnalista+=sueldoIngresado;
				contadorAnalistas++;
				break;
			case "qa":
				acumuladorSueldosQa+=sueldoIngresado;
				contadorQa++;
				break;
		}
		if(flagSexoMayorSueldo || sueldoIngresado>sueldoSexoMayorSueldo)
		{
			sueldoSexoMayorSueldo=sueldoIngresado;
			sexoMayorSueldo=sexoIngresado;
			flagSexoMayorSueldo=false;
		}
		if(sexoIngresado=="femenino" && (flagFemeninoMayorSueldo || sueldoIngresado>sueldoFemeninoMayorSueldo))
		{
			sueldoFemeninoMayorSueldo=sueldoIngresado;
			nombreFemeninoMayorSueldo=nombreIngresado;
			flagFemeninoMayorSueldo=false;
		}
	}while(continuar); // fin del bucle

	if(contadorProgramadores>0)
	{
		promedioProgramadores=acumuladorSueldosProgramador/contadorProgramadores;
	}
	if(contadorAnalistas>0)
	{
		promedioAnalistas=acumuladorSueldosAnalista/contadorAnalistas;
	}
	if(contadorQa>0)
	{
		promedioQa=acumuladorSueldosQa/contadorQa;
	}

	document.write("a) promedio de sueldos para cada puesto es: </BR>");
	if(contadorProgramadores>0)
	{
		document.write("* programadores: "+promedioProgramadores+"</BR>");
	}
	else
	{
		document.write("no se ingresaron programadores </BR>");
	}
	if(contadorAnalistas>0)
	{
		document.write("* analistas: "+promedioAnalistas+"</BR>");
	}
	else
	{
		document.write("* no se ingresaron analistas </BR>");
	}
	if(contadorQa>0)
	{
		document.write("* qa: "+promedioQa+"</BR>");
	}
	else
	{
		document.write("* no se ingresaron qa </BR>");
	}
	document.write("b) el sexo del que percibe el mayor sueldo: "+sexoMayorSueldo+"</BR>");
	if(!flagFemeninoMayorSueldo)
	{
		document.write("c) el nombre del empleado femenino con mas sueldo: "+nombreFemeninoMayorSueldo+"</BR>");
	}
	else
	{
		document.write("c) no se ingresaron femeninos </BR>");
	}
	if(contadorProgramadoresNoBinariosEntre20y55k>0)
	{
		document.write("d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000: "+contadorProgramadoresNoBinariosEntre20y55k+"</BR>");
	}
	else
	{
		document.write("d) no se ingresaron programadores no binarios </BR>");
	}
}