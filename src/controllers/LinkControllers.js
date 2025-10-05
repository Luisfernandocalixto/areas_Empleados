const { queryEmployWithDep } = require("../data/links.js");
const { client } = require("../database.js");

class LinkController {

    static async index(req, res) {
        try {
            const empleados = await client.execute(queryEmployWithDep);
            
            res.render('./vistas/inicio', { empleados: empleados.rows })
        } catch (error) {
            
            res.status(500).send('Error interno del servidor');
        }
    }
}

module.exports = {
    LinkController
};
