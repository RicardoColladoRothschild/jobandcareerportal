# Job and Career Portal

Este proyecto, un Job and Career Portal, es una colaboración entre Carmen Mata y Ricardo Collado. Aquí está la guía de cómo estructuraremos el desarrollo:

## Tecnologías Utilizadas
### Backend

    Lenguaje: TypeScript
    Framework: Node.js, Expressjs
    Base de Datos: MongoDB
    Docker: Para gestionar los servicios en una arquitectura de microservicios

### Frontend

    Framework: React.js con TypeScript

## Base de Datos

Utilizaremos MongoDB como nuestra base de datos.


## Diseño
Paleta de Colores
**[PENDIENTE COLOCAR]**


## Diseño de Usuarios - Empleado

    Los usuarios podrán crear y subir su currículum en formato PDF.
    Podrán ver ofertas de trabajo como tarjetas en su página principal.
    Los usuarios podrán aplicar a un número determinado de ofertas de trabajo.
    Habrá plantillas de CV disponibles, con acceso limitado dependiendo del tipo de cuenta.

## Diseño de Usuario - Empleador

    Los empleadores podrán ver currículums según las ofertas de trabajo publicadas.
    Podrán filtrar candidatos utilizando palabras clave.
    En la página principal, se mostrarán tarjetas de empleados con su nombre y especialidad.
    Los empleadores podrán descartar candidatos no deseados.
    Podrán publicar nuevas ofertas de trabajo y administrarlas.

## Backend - Arquitectura

El backend estará estructurado en una arquitectura de microservicios, utilizando TypeScript y MongoDB.
Servicios
```
    Servicio de Empleador: Manejará la creación, edición y visualización de datos de empresas.

    Servicio de Postulante: Creará y gestionará datos de los postulantes, incluyendo sus habilidades y estado de búsqueda.

    Servicio de Oferta Laboral: Se encargará de las ofertas de trabajo, incluyendo su creación, gestión y filtrado.
```
## API Gateway

    Un API Gateway recibirá solicitudes, verificará su autenticidad y las dirigirá al servicio correspondiente.

## Validación de Rutas

    Se utilizará ZOD para validar las rutas de forma precisa y evitar errores.
-> packages > types > model > joboffers.ts
```ts

const schema = z.object({
    route:z.literal('/joboffers/jobofferid/:id/compannyid/:compannyid'),
    routeParams:z.object({
            id: z
            .string()
            .refine((id)=> isValidId(id)),
            version: z
            .string()
            .optional()
            .refine((id)=> !id || isValidId(id))
    })
});

const validateVersionMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    const {params} = req;

        try{
            schema.parse({
                route:req.route.path,
                routeParams:{
                    id:params.id,
                    version:params.version || undefined
                }
            })
            next();
        }catch(error){
            console.log(error)
            res.status(400).json({ error: "ha habido un error"});

        }
}
```

## Puerta de Entrada Principal (API Gateway)

    Se creará un archivo que actúe como servidor principal para dirigir las solicitudes entrantes a los servicios correspondientes.

Este README proporciona una visión general del proyecto y su estructura técnica. Se actualizará a medida que avance el desarrollo