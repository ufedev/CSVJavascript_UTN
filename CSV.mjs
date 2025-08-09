import fs from "fs/promises"

export class CSV {


    static async crear_csv (nombre) {
        const date = new Date()
        const datename = date.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "numeric",
            day: "numeric",

        }).replaceAll("/", "_")
        try {
            await fs.readdir("./csv")
        }
        catch {
            await fs.mkdir("csv")
        }
        try {
            const data = await fs.readFile(`csv/datos_${nombre}_${datename}.csv`)

            if (data) {
                console.log("El archivo ya existe")

            }
        } catch {
            try {
                await fs.writeFile(`csv/datos_${nombre}_${datename}.csv`, "ID,Producto,Stock,Precio\n")
                console.log("Archivo creado")
            }
            catch (err) {
                console.log("Hubo un error al intentar crear el archivo")
                console.log(err)
            }
        }
    }
    static async #listar () {
        const csvs = await fs.readdir("./csv")
        csvs.forEach(function (valor, indice) {
            if (valor.endsWith(".csv")) {
                console.log(`${indice + 1}. ${valor}`)
            }
        })
        return csvs
    }
    static async listar_csv () {
        try {
            return await this.#listar()
        } catch {
            await fs.mkdir("csv")
            return await this.#listar()
        }
    }
    static async eliminar_csv (eleccion) {
        const csvs = await fs.readdir("./csv")
    }


    static async abrir (archivo_seleccion) {
        const lista = await fs.readdir("./csv")
        const archivo = lista[archivo_seleccion - 1]
        const file = new this()
        file.archivo = archivo
        return file
    }


    async guardar () {

    }
    async leer () {
        const datos = await fs.readFile(`./csv/${this.archivo}`, {
            encoding: "utf-8"
        })
        console.log(datos)
    }
    async modificar () {

    }



}