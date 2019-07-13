# **Es.Tattoos_404**

# **Práctica / Proyecto segunda evaluación.**

# Introducción

En la actualidad nos hemos acostumbrado al continuo uso de aplicaciones sociales, para conocer a nuevas personas, buscar trabajo, vivienda o grupos de actividades.

Un campo que todavía no se ha desarrollado es el mundo de los tatuajes, donde no existe ninguna aplicación que ponga en contacto usuarios (clientes), tatuadores y estudios e tatuajes.

Se pretende así desarrollar una herramienta que facilite la comunicación, gestión y coordinación de las diferentes partes, que se relacionan para realizar un tatuaje.

# Objetivos

El objetivo de este proyecto es proporcionar una aplicación web que se amolde a las necesidades de los estudios, tatuadores y clientes, facilitando la gestión de los elementos implicados en ella.

La aplicación contará con un sistema de gestión y validación de usuarios, diferenciándose entre usuario administrador, usuario cliente, usuario tatuador y usuario representante de un estudio.

Existirá un único usuario administrador, que será el encargado de gestionar las cuentas ya existentes, así como de comprobar la veracidad del usuario “representante de estudio” y los datos del estudio.

Todos los usuarios deberán tener un nombre de usuario y una contraseña que servirá para autenticarse en el sistema.

Los usuarios “cliente”, una vez autenticados en el sistema, podrán acceder a todas las funcionalidades de la herramienta, que quedan definidas a continuación:

- **Sección Perfil de Usuario.** Se podrán actualizar los datos propios del usuario, realizar búsquedas de tatuadores o estudios, enviar mensajes para solicitar citas para tatuarse y dispondrán de un calendario recordando le citas o eventos.

* **Sección Últimas noticias.** Se mostrarán ,nuevos eventos o nuevas disposiciones de tatuadores en estudios que no son los habituales.

Los usuarios “tatuadores”, una vez autenticados en el sistema, podrán acceder a todas las funcionalidades de la herramienta, que quedan definidas a continuación:

- **Sección Perfil de Tatuador**. Se podrán actualizar los datos propios del usuario, realizar búsquedas de clientes, tatuadores o estudios, enviar mensajes para solicitar estancias de trabajo en estudios y dispondrán de un calendario recordando le citas o eventos.

* **Sección Últimas noticias.** Se mostrarán ,nuevos eventos o nuevas disposiciones de tatuadores en estudios que no son los habituales.

Los usuarios “representante de estudio”, una vez autenticados en el sistema, podrán acceder a todas las funcionalidades de la herramienta, que quedan definidas a continuación:

- **Sección Perfil** **Estudio.** Se podrán actualizar los datos propios del usuario y del estudio, realizar búsquedas de clientes, tatuadores o estudios, enviar mensajes para ponerse en contacto con clientes y tatuadores, también dispondrán de un calendario recordando le citas o eventos.

Cualquier usuario logeado o usuario que no se haya dado de alta en la página podrá visitar las siguientes vistas:

- **Home.** Desde donde podrá acceder a login o registro, podrá ver los 8 tatuadores mejor valorados, los 8 estudios mejor valorados, la presentación de la página y un listado de las últimas noticias/eventos.

* **Vista Buscador.** Podrá realizar búsquedas y que estas se muestren en una nueva vista.

# Descripción técnica

El proyecto consiste en la realización de una aplicación web , que funcionará de forma autónoma en un servidor, o como aplicación móvil desde un dispositivo, basada en una arquitectura de tres capas.

La arquitectura de tres capas es un estilo de programación, cuyo objetivo primordial es la separación de la capa de presentación, la capa de negocio y la capa de datos. Se ha optado por esta arquitectura por las ventajas que ofrece esta descomposición en capas:

- Aplicaciones más robustas gracias al encapsulamiento, que permite aumentar la cohesión de los componentes del sistema.

- En caso de que sobrevenga algún cambio, sólo se modifica la capa involucrada sin tener que modificar el resto de capas.

- Mantenimiento y soporte más eficiente, pues es más sencillo cambiar un componente que modificar una aplicación monolítica.

- Mayor flexibilidad puesto que se pueden añadir nuevos módulos para dotar al sistema de nueva funcionalidades.

La **capa de presentación** se encarga de presentar el sistema al usuario, comunica la información y recoge las peticiones del usuario. Para la implementación de esta capa se empleará “Visual sSudio Code”.

En la **capa de negocio** es donde se reciben las peticiones del usuario y se envían las respuestas tras ser procesadas. Se comunica con la capa de presentación para recibir peticiones y mostrar resultados, y con la capa de datos, para almacenar o recuperar datos a través del sistema gestor de base de datos. Se ha escogido Java como lenguaje de programación debido a la experiencia previa de la que disponemos en el desarrollo de aplicaciones con esta tecnología.

La **capa de datos** es la encargada de acceder a los mismos. Está formada por un sistema gestor de base de datos, que se encarga del almacenamiento de datos y recibe solicitudes de recuperación o almacenamiento de los mismos desde la capa de negocio. Para la aplicación se usará el sistema gestor de base de datos Postgree SQL, pues satisface los requisitos de uso de la aplicación en el entorno de producción.

## Diccionarios

**[Diccionario de rutas](./DiccionarioRutas.md)**

# Requisitos

## Requisitos mínimos a entregar

- **Registro**. Un usuario puede darse de alta como cliente, tatuador o encargado de tienda.

- **Login**. Un usuario puede acceder como cliente, tatuador o encargado de tienda, dependiendo del rol que se asignó.

- **Vista Cliente**.

- **Vista Tatuador**

- **Vista Estudio**

- Realizar el proceso completo de **solicitar cita** para tatuarse en una tienda con un tatuador.

- Usuario cliente solicita una cita a una tienda →

→ La tienda asigna un tatuador y una fecha →

→ El día que se ha realizado el tatuaje, se registra: tatuador, boceto (en el caso de que lo haya) y la foto del tatuaje).

## Requisitos para la segunda iteración.

- **Vista Administrador** de la aplicación.

- Desarrollo de la **Vista Galería** para los usuarios Tatuadores y Estudio.

- Añadir Funcionalidad “**Valoraciones y Comentarios**”. Donde un cliente y tatuador podrá estimar de forma numérica diferentes aspectos de un estudio. Del mismo modo los clientes y los estudio podrá valorar el trabajo de los tatuadores.

## Requisitos para la tercera iteración.

- Calendario integrado en las diferentes vistas que hemos ido comentando anteriormente.

- Integrar **Google analitics.**

- Localizaciones de los estudios, mediante **Google Maps** o aplicación opensource con la misma finalidad.

- Calendario vinculado a **google calendar**.

- Generar código **QR** para la aplicación.

# Bibliografía

## Diseño

**Template**
http://modernwebtemplates.com/product/ink-arts-tattoo-salon-html-template/  
https://www.pinterest.es/pin/538532067938912579/

**Paleta**

**Material module**
https://stackoverflow.com/questions/45166844/how-to-import-angular-material-in-project

**JWT**
http://jasonwatmore.com/post/2018/11/16/angular-7-jwt-authentication-example-tutorial
