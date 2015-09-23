// JavaScript Document
function ValidarEmail()
{
	if(document.getElementById('Nombre').value == "")
		{
		document.getElementById('mensaje').style.display = 'block';
		document.getElementById('textoMensaje').innerHTML = 'Ingresa un nombre válido.';
		return;
		}
		
	var exr = /^[0-9a-z_\-\.]+@[0-9a-z\-\.]+\.[a-z]{2,4}$/i;
          
	if(exr.test(document.getElementById('email').value) == false)
		{
		 document.getElementById('mensaje').style.display = 'block';
    	 document.getElementById('textoMensaje').innerHTML = 'Ingresa un e-mail válido.';
		return;
		}
	
	if(document.getElementById('consulta').value == "")
		{
		document.getElementById('mensaje').style.display = 'block';
		document.getElementById('textoMensaje').innerHTML = 'Ingresa una consulta válida.';
		return;
		}
	
	AbrirContenidoMail('enviarMail.php', document.getElementById('Nombre').value, document.getElementById('email').value, document.getElementById('consulta').value);
}

function CerrarMensaje()
{
	document.getElementById('mensaje').style.display = 'none';
	document.getElementById('mensaje2').style.display = 'none';
}