const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción por la tarea por hacer'
};

const completado = {
  default: true,
  alias: 'c',
  desc: 'Marca como completado o pendiente una tarea'
};

const argv = require('yargs')
  .command('crear', 'Crear un elemento por hacer', { descripcion })
  .command('actualizar', 'Actualiza el estado actual de una tarea!', {
    descripcion,
    completado
  })
  .command('borrar', 'Borra un registro seleccionado', { descripcion })
  .help()
  .argv;

module.exports = {
  argv
}
