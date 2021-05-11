async function leerJSON(url) {

  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch (err) {

    alert(err);
  }
}

function mostrar() {
  let titulo = document.getElementById("titulo");
  let url = "https://raw.githubusercontent.com/FelipeM09/EJERCICIO_ALUMNO/main/json/estudiantes.json";
  leerJSON(url).then(datos => {
    titulo.innerHTML = "<h1>" + datos.nombreMateria + "</h1>";
    drawTableEstudiantes(datos.estudiantes);
  })

}
function drawTableEstudiantes(estudiantes) {
  var data = new google.visualization.DataTable();
  data.addColumn("number", "CODIGO");
  data.addColumn("string", "NOMBRE");

  for (let i = 0; i > estudiantes[0].notas.length; i++) {
    data.addColumn("number", "NOTA (" + estudiantes[0].notas[i].id + ")");
  }

  data.addColumn("number", "PROMEDIO");
  data.addRows(llenarTabla(estudiantes));

  var table = new google.visualization.Table(document.getElementById('table_div'));

  table.draw(data, { showRowNumber: true, width: '100%', height: '100%' });
}


function llenarTabla(estudiantes) {
  let arreglo = [];

  for (let i = 0; i < estudiantes.length; i++) {
    let estudiante = estudiantes[i];
    let alumno = [];

    alumno.push(estudiante.codigo);
    alumno.push(estudiante.nombre);

    for (let j = 0; j < estudiantes[i].notas.length; j++) {
      alumno.push(estudiante.notas[j].valor);
    }
    alumno.push(calcularPromedio(estudiante.notas));
    arreglo.push(alumno);
  }
return arreglo;
}

function calcularPromedio(notas){
  let promedio = 0;
  for(let i=0;i < notas.length;i++){

    promedio+=nota[i].valor;
  }
  return (promedio/notas.length);
}


mostrar();
