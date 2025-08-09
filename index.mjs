import { input } from "./utils.mjs"
import { CSV } from "./CSV.mjs"


while (true) {
    console.clear()
    console.log(`
        CSVJavascript
        1. Crear CSV
        2. Abrir CSV
        3. Eliminar CSV
        4. Salir
        `)

    const opcion = await input("Seleccione la seleccion que desea seleccionar: ")

    switch (opcion) {
        case "1":
            console.clear()
            console.log(`
                Ha ingresado en Crear CSV
                debe ingresar el nombre: `)
            const nombre = await input("..")
            await CSV.crear_csv(nombre)
            await input("Enter para continuar...")
            break
        case "2":
            console.clear()
            console.log("Lista de archivos disponibles:")
            await CSV.listar_csv()

            const seleccion = await input("Ingrese el numero de archivo que desea seleccionar: ")
            const archivo_abierto = await CSV.abrir(seleccion)
            archivo_abierto.leer()
            await input("")
            break


        case "4":
            process.exit(1)
        default:
            console.log("Opcion no encontrada")

    }
}