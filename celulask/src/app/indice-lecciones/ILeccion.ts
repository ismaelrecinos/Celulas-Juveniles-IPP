export interface ILeccion{
	numero:number,
    titulo:string,
    objetivo:string,
    introduccion:string,
    contenido: Array<string>,
    tareas: Array<string>
}