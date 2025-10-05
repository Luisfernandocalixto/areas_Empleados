
const queryEmployWithDep = `SELECT
    empleado_id AS id,
    empleados.nombre,
    empleados.apellidos,
    departamentos.departamento_id,
    departamentos.denominacion,
    departamentos.localizacion
FROM empleados
    LEFT JOIN departamentos ON empleados.empleado_id = departamentos.departamento_id;`;

module.exports = {
    queryEmployWithDep
};
