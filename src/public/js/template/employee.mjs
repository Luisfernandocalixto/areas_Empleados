const tablePrincipal = ({ fragment }) => `
    <table class="table table-striped table-hover">
        <thead class="table-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Denominación</th>
                <th scope="col">Localización</th>
            </tr>
        </thead>
        <tbody class="principalTbody">
            ${fragment}
        </tbody>
    </table>
`;

const isTable = ({ data }) => {
    
    return (
        `
    <table class="table table-striped table-hover">
    <thead class="table-dark">
    <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Denominación</th>
                <th scope="col">Localización</th>
                </tr>
                </thead>
                <tbody class="principalTbody">
                ${data.map(item => {
                    
            return `
                <tr height="100px">
                <td>${item.id}</td>
                <td>${item.nombre}</td>
                    <td>${item.apellidos}</td>
                    <td>${item.denominacion}</td>
                    <td>${item.localizacion}</td>
                    </tr>                
                    `
        }).join('')
        }
</tbody>
</table>
`
    )
}

export { tablePrincipal, isTable };