// JavaScript Document
function AbrirContenido(valor)
{
	// Obtendo la capa donde se muestran las respuestas del servidor
	var capa=document.getElementById('container');
	// Creo el objeto AJAX
	var ajax=ObjetoAjax();
	// Coloco el mensaje en la capa
	capa.innerHTML=document.getElementById('over').style.display='block';
	// Abro la conexión, envío cabeceras correspondientes al uso de POST y envío los datos con el método send del objeto AJAX
	ajax.open("GET",valor, true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send();
	
	ajax.onreadystatechange=function()
		{
			if (ajax.readyState==4)
			{
				// Respuesta recibida. Coloco el texto plano en la capa correspondiente
				capa.innerHTML=ajax.responseText;
				document.getElementById('over').style.display='none';
			}
		}     
}

// JavaScript Document
function AbrirContenidoMail(valor, nombre, email, consulta)
{
	// Obtendo la capa donde se muestran las respuestas del servidor
	var capa=document.getElementById('container');
	// Creo el objeto AJAX
	var ajax=ObjetoAjax();
	// Coloco el mensaje en la capa
	document.getElementById('mensaje2').style.display = 'block';
    document.getElementById('textoMensaje2').innerHTML = 'El e-mail fue enviado con éxito.';
	//capa.innerHTML= 
	// Abro la conexión, envío cabeceras correspondientes al uso de POST y envío los datos con el método send del objeto AJAX
	ajax.open("POST",valor, true);
	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	ajax.send("Valores="+nombre+"~"+email+"~"+consulta);
	
	ajax.onreadystatechange=function()
		{
			if (ajax.readyState==4)
			{
				// Respuesta recibida. Coloco el texto plano en la capa correspondiente
				capa.innerHTML=ajax.responseText;
			}
		}     
}

function ObjetoAjax()
{ 
	/* Crea el objeto AJAX. Esta funcion es generica para cualquier utilidad de este tipo, por
	lo que se puede copiar tal como esta aqui */
	var xmlhttp=false; 
	try 
	{ 
		// Creacion del objeto AJAX para navegadores no IE
		xmlhttp=new ActiveXObject("Msxml2.XMLHTTP"); 
	}
	catch(e)
	{ 
		try
		{ 
			// Creacion del objet AJAX para IE 
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
		} 
		catch(E) { xmlhttp=false; }
	}
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') { xmlhttp=new XMLHttpRequest(); } 

	return xmlhttp; 
}