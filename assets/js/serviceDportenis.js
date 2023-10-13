/* Api to get data from Dportenis WebService */
function CallApiRest()
{
    var requestoptions = {
        method: 'GET',
            redirect: 'follow'
    };

    fetch("http://localhost/evaluacion_desarrollador_servicio_4_1/", requestoptions)
    .then(response => response.json())
    .then(result => {
        if (result.codigo_respuesta == 0) {
            FilasRespuesta = "";

            var array = result.listaobjetos;
            array.forEach(element => {
                FilasRespuesta 	+= 	"<tr>" +
                                    "<td class = 'filas'>" + element.tipo + "</td>" +
                                    "<td class = 'filas'>" + element.tamanio + "</td>" +
                                    "<td class = 'filas'>" + element.color + "</td>" +
                                "</tr>";
            });
            document.querySelector("#filaRespuesta").innerHTML = FilasRespuesta;
        }
    })
}