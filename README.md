# Trabajo práctico 06

## Proyecto de partida y cambios

Para realizar este trabajo partí del TP 05, que ya tenía funcionando la aplicación para reservar salas de estudio.

En este práctico tuve que separar el código que antes estaba concentrado en un archivo y repartirlo en varios archivos. La idea es que el proyecto quede más ordenado y que cada parte se encargue de una tarea diferente.

Esta parte me resultó bastante complicada, porque todavía me cuesta entender cómo se organiza un proyecto de esta manera. Desde los últimos prácticos los temas se me hicieron más difíciles y todavía estoy tratando de comprender para qué sirve cada archivo y cómo se relacionan entre sí.

Por eso, en este trabajo me enfoqué en seguir la estructura solicitada y tratar de entender los cambios realizados, sin agregar funcionalidades nuevas que no fueran necesarias.

## Instalación y ejecución

Para instalar las dependencias del proyecto se utiliza el siguiente comando:


npm install


Para iniciar la aplicación:


npm start


Una vez iniciado el servidor, se puede ingresar desde el navegador a:


http://localhost:3000


También se pueden ejecutar los comandos de formato y revisión del código:


npm run format
npm run check


## Configuración del entorno

La configuración permite definir algunos valores para iniciar el servidor, como el puerto y el entorno de ejecución.

El puerto indica por dónde se puede acceder a la aplicación. Si no se configura otro valor, se utiliza el puerto 3000.

Por otro lado, `NODE_ENV` permite elegir el formato de los registros que se muestran durante la ejecución.

Todavía necesito seguir practicando esta parte para comprender mejor cómo se leen estas variables y cómo afectan al funcionamiento del servidor.

## Mapa de módulos y dependencias

La principal diferencia con el TP 05 es que el código ya no está concentrado en un único archivo. Ahora se encuentra separado en distintas partes, siguiendo la estructura pedida para el TP 06.

Por lo que fui entendiendo, hay archivos que se ocupan de iniciar el servidor, otros de recibir las solicitudes y otros de trabajar con las reservas.

Todavía me cuesta distinguir con seguridad qué tarea corresponde a cada archivo y cómo se comunican entre ellos. Necesito seguir practicando esta parte para entender mejor la relación entre las rutas, los controladores y los servicios.

## Pipeline y contrato de rutas

El pipeline es el orden en el que la aplicación va procesando las solicitudes que llegan al servidor. Por ejemplo, una solicitud puede pasar por distintos componentes antes de llegar a la parte que responde.

Las rutas indican qué debe hacer la aplicación cuando se ingresa a una dirección o se envía un formulario. También es importante que la aplicación responda correctamente cuando los datos enviados no son válidos o cuando se intenta ingresar a una dirección que no existe.

Todavía no comprendo en profundidad todo el recorrido que hace una solicitud dentro de la aplicación, pero estoy empezando a reconocer las distintas partes que intervienen.

## Matriz antes/después

Antes de este práctico, gran parte del código estaba concentrado en el archivo principal. Esto hacía que distintas tareas estuvieran mezcladas en un mismo lugar.

Después de la reorganización, el código se encuentra dividido en varios archivos, de acuerdo con la estructura solicitada.

 Antes (TP 05)                                                        Después (TP 06)                                                     
    
 Gran parte del código estaba en un mismo archivo.                    El código está separado en distintos módulos.                       
 Las distintas tareas estaban más mezcladas.                          Se busca que cada archivo tenga una responsabilidad más específica. 
 Era necesario buscar distintas partes dentro del archivo principal.  La intención es poder encontrar cada tarea con mayor facilidad.     

El cambio principal fue la organización del código. Todavía necesito practicar para comprender bien las ventajas de esta forma de trabajar y poder explicar cada parte con más seguridad.

## Formato y análisis estático

El proyecto cuenta con comandos para ordenar el formato del código y revisar si cumple con las reglas de análisis configuradas.

Para aplicar el formato se utiliza:


npm run format


Para realizar la revisión se utiliza:


npm run check


Entiendo que estas herramientas ayudan a mantener el código más ordenado y a detectar algunos problemas, aunque no significan que la aplicación funcione correctamente en todos los casos.

Todavía necesito familiarizarme más con estas herramientas y aprender a interpretar los mensajes que muestran cuando encuentran algún problema.

## Persistencia temporal y límites

Las reservas se mantienen en memoria mientras el servidor está funcionando. Esto significa que, al reiniciarlo, las reservas agregadas durante la ejecución se pierden y se vuelven a cargar los datos iniciales.

No se incorporó una base de datos, ya que el objetivo del trabajo fue reorganizar el proyecto y no agregar un sistema de almacenamiento nuevo.


En general, este práctico me costó bastante, e incluso vengo teniendo dificultades desde el práctico 4. Puedo seguir algunas partes del código, pero todavía no tengo un dominio completo de la estructura modular ni de la relación entre sus componentes. Mi objetivo es seguir repasando el proyecto y practicar cada parte por separado para poder comprender mejor qué hace cada archivo y por qué se organiza de esa manera.

