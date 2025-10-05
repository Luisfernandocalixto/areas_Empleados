export function getDataFilter({ dataByFilter }) {
    return dataByFilter.map(e => {
        return {
            id: e[0],
            nombre: e[1],
            apellidos: e[2],
            denominacion: e[3],
            localizacion: e[4],

        }
    });
}