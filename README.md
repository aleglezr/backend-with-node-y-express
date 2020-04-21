# DESARROLLO DEL BACKEND

## INTRODUCCIÓN.

Cuando se crea una página web se divide el trabajo en dos principales partes, el
"Backend" y el "Frontend".

### Frontend:

Es el que se encarga de la parte visual e interactiva del sitio.

### Backend:

Es el que se encarga del manejo, procesamiento y despliegue de
información. Es todo lo que sucede detrás para que una plataforma funcione bien,
en muchas ocasiones, esta rama del desarrollo web también se encarga de la
configuración y administración tanto como de la BD como del servidor donde se
ejecuta la aplicación.

### Tecnologías en el Frontend.

En el Frontend se usan tecnologías como HTML, Javascript y CSS.
Estas tecnologías permiten crear aplicaciones web, interfaces gráficas,
animaciones y más.

### Tecnologías usadas en el Backend.

En el backend se usa un lenguaje de programación para programar un servidor web,
usualmente con la existencia de una librería que permita la comunicación vía
protócolo HTTP con el cliente, usualmente el navegador, algunos de los
principales lenguajes de programación son utilizados son: Javascript, Ruby, PHP,
Python, C#. Java entre otros.
Además, también se hace uso de un motor de BD en los que se almacena la
información de manera que se pueda consultar esa misma información, algunos de
los principales motores de BD son: PostgreSQL,MySQL, MongoDB, etc.*


## -------------------------------- HTTP -----------------------------

### ¿Como funciona un servidor web?

El concepto de servidor web puede utilizarse para referirse a la computadora
donde se coloca nuestro código, o bien, al código mismo que responde a las
peticiones que vienen del navegador, es decir, tanto el hardware como el
software que se necesita para envíar una página web.
El cliente, por otro lado, es una referencia al programa o dispositivo usado
para acceder a una página web, normalmente un navegador como Chrome, Firefox,
Edge, etc. El "Cliente" y el "Servidor" se comunican usando un protócolo de
nombre HTTP.

Una aplicación servidor web contiene un servidor HTTP, es decir, una manera en
que pueda responder a las peticiones usando este protócolo que vienen de algún
cliente (normalmente un navegador).

Un "Servidor web", cuando se habla de la parte del hardware, se trata de una
computadora que contiene una aplicación "web-servidor" que precisamente pueda
responder al protócolo HTTP. Esta computadora esta especializada para recibir
estas peticiones a tráves de puertos de la red, el protócolo HTTP utiliza el
puerto 80 y el 443 para conectar un cliente con un servidor web.


### ¿Qué es NodeJs y Express?

NodeJs es un ambiente de ejecución o un "Runtime Enviroment" del lenguaje
Javascript, además de permitirnos ejecutar el programa, un ambiente de
desarrollo provee al programa de objetos, APIS y librerías correspondientes a
cada entorno. En Javascript se pueden destacar 2 ambientes de ejecución el
navegador y el servidor.


### Verbos HTTP (Métodos HTTP).

Hay distintos tipos de peticiones que podemos hacer hacia el servidor mismo.
Una parte de la petición que se envía hacía el servidor corresponde al método
HTTP o verbo HTTP como tambén se conoce.

Comúnmente este método puede ser GET o POST, que son los verbos más populares,
de hecho, quizá los identifiques si antes has trabajado con formularios HTML.

Estos verbos indican que acción queremos realizar sobre el servidor y son:
GET, POST, PUT, PATCH, DELETE, HEAD, CONNECT, TRACE & OPTIONS. Cada uno indican
una acción diferente a la que el servidor debe responder.

### Diferencias entre GET & POST.

la primera diferencia visible entre GET & POST esta en los parámetros que
se reciben de la petición,mientras que los datos que se envian con GET son
enviados como parámetros de la consulta y son parte de la direccion web que
colocas,los parámetros POST son enviados como parte del cuerpo de la petición
y no son visibles en la dirección web.

Para poder leer la información del cuerpo de la peticion tenemos que emplear
el proceso Parse,esto no es nada mas que analizar la información,ya que el
cuerpo de la petición puede traer datos en diferentes tipos de estructura
incluyendo archivos de texto,json, y muchos mas de modo que debe existir un
proceso que analice y luego los entregue de una manera más sencilla y uniforme.

Aunque muchos frameworks web hacen este proceso sin que nosotros tengamos que
hacer nada, Express no lo hace a menos que lo configuremos para que así sea.
Como tál el código de la librería de Express no contiene un analizador de cuerpo
de la petición, pero el mismo equipo de Express ofrece uno con el nombre
BodyParser. Para usar BodyParser debemos instalarlo  con NPM, para ello debemos
escribir el siguiente comando: npm i body-parser.

### Direcciones web

Una dirección web para hacer una solicitud  con HTTP puede verse de alguna de las
siguientes maneras:

- localhost:3000
- google.com
- mipagina.com/recursos

Todas son direcciones validas y cada una tiene elementos distintos, la que
aparece al principio, justo antes de los dos puntos, en el primer ejemplo, y
en el casi de google.com se trata del nombre del dominio.


### Enviar HTML

Como desarrollador backend vas a pensar en tu servidor como en un proveedor de
recursos, estos recursos pueden ser imagenes,PDFS, Scripts de código, archivos
CSS y más.El principal recurso que se envía desde un servidor es un archivo o
documento HTML.

Para enviar un documento HTML podemos aprovechar el método sendFile que tiene el
objeto de la respuesta identificado aquí por res. Para que sendFile sepa en
donde encontrar encontrar el archivo hay 2 alternativas, por un lado podríamos
pasar una ruta absoluta es decir, cada carpeta desde la raíz de nuestro disco
duro hasta la carpeta de nuestro proyecto, por otro lado podemos especificar vía
un JSON de opciones la ruta absoluta hacía la carpeta del proyecto.
NodeJs provee una variable __dirname que contiene la ruta absoluta hacia nuestro
proyecto.


### Servir archivos estáticos.

Cuando nuestro servidor envía archivos como CSS, imagenes, documentos decimos
que es un servidor de archivos estáticos, esto porque en el 99% de los casos
estos archivos no se modifican cuando son solicitados por algún cliente cuando
reciben un mensaje HTTP. Un archivo CSS se modifica cuando el programador los
desarrolla, pero una vez que el cliente los solicita, este ya no se modifica,sin
importar el número de veces que se solicite el archivo, siempre se envía el
mismo, a eso nos referimos con los "Archivos Estáticos".

Esta funcionalidad para enviar archivos estáticos tiene su complejidad, ya que
cada archivo debe ser enviado acompañado de una serie de encabezados que le
digan al cliente que tipo de archivos esta recibiendo, además estos archivos
suelen ir con una indicación para que sean almacenados por el cliente y asi en
caso de volver a ser requeridos no haya necesidad de enviarlos desde el servidor.

Normalmente los frameworks web incluyen un módulo para archivos estáticos que
permite especificar una carpeta en la que todos los archivos incluidos deberan
poder ser servidos por el servidor web.

Es importante que en tu proyecto exista una separación entre los archivos
estáticos del código y el código del proyecto. Una vez que hayas especificado
una carpeta como contenedora de archivos estáticos, todos los archivos incluidos
ahí podrán descargarse, por ello es muy importante que separes tu código de los
archivos estáticos.

Algunos nombres populares para la carpeta de archivos estaticos son: assets,
static, public entre otros. Hemos utilizado bastante el método use, si te
preguntas para que sirve, puesbásicamente lo que hace es insertar un nuevo
middleware en el stack de middlewares del framework.


### Motores de vistas

Los documentos HTML son de principal interes para ti como desarrollador del
servidor web, porque generalmente la información de un documento HTML es
dinámica. Cuando decimos que un documento es dinámico significa que es probable
que cambia cada que tenemos una petición web por dicho curso. Notmalmente para
construir un documento HTML se consideran datos almacenados en una BD, si
el usuario inicio sesión o no, datos enviados en una petición y mucho más.
En el backend usamos lo que normalmente nosotros conocemos como motores de
vistas para generar estos documentos de manera dinámica.
Existe una amplia variedad de motores de vista y están disponibles para nuestro
entorno con JS, cada lenguaje de programación y framework web acostumbra a
manejar su propio motor de vista o  una variedad de ellos, por ejemplo en
lavarel y PHP se usa blade, con NodeJs podemos usar PUG JS etc.
El trabajo de estos motores de vistas es por un lado permitirnos enviar datos de
nuestro código del servidor a los documentos HTML a los cuales precisamente
llamamos "Vistas" y por otro lado, agregar sentencias y operaciones a la vista
para que podamos usar ciclos, condiciones y más dentro de los archivos de las
mismas vistas.

Crearemos un pequeño ejemplo para ello, con la ayuda de NPM instalaremos un
motor de vista HTML para ello ejecutaremos el siguiente comando: npm i ejs.


### Tipos de cache.

De acuerdo con la Mozilla Developer Network, en general podemos identificar dos
tipos de cache, los locales y los compartidos. Prácticamente todos los usuarios
tienen un caché local que viene incluido por defecto con su navegador, este
puede servir para que las páginas que visitamos carguen más rápido o bien para
que podemos ver un sitio incluso cuando no tengamos internet.

Este es un buen ejemplo de un caché local, lo que lo diferencía de un caché
compartido es que este caché sólo sirve para un usuario, aquél que accede al
sitio web vía dicha computadora. Por otro lado, un caché compartido puede estar
compartido entre múltiples usuarios, existen servicios que ofrecen la
posibilidad de funcionar como intermediarios entre los usuarios y el servidor,un
buen ejemplo de ello es Cloudflare.

Los cachés compartido son bastante interesantes porque pueden ofrecer beneficios
de performance y velocidad incluso a usuarios que visitan por primera vez
nuestro sitio web. Algunos de estos servicios replican las copias que se han
generado en múltiples ubicaciones del mundo, acercándolas más a los usuarios que
eventualmente requerirán estas copias.


### ¿Qué son las cookies y las sesiones?

Una de las características del protocolo Http es que es stateless, es decir, no
conserva un estado para ninguna petición que recibe.

Esto significa que el servidor no tiene memoria, es una persona que saludas,
te presentas, le dices tu nombre y lo olvidará para la siguiente vez que lo
saludes.El servidor no recuerda nada entre peticiones, por lo que no sabe si esa
petición ya vino, qué usuario es, cuáles son su datos, etc.

Por otro lado, nosotros usamos un internet que siempre sabe quiénes somos, sabe
qué publicaciones debe mostrarnos en facebook, qué cuenta de correo estamos
usando y mucho más. La pregunta es, si el protocolo http es stateless, cómo
saben todas las páginas que yo estoy usando su sitio, la respuesta es con
cookies y sesiones.

Las cookies y sesiones son mecanismos a través de los cuales podemos identificar
una petición, con estas estrategias podemos almacenar información de nuestros
usuarios que pueda ayudarnos como los productos que ha agregado a un carrito de
compras, sus preferencias, si inició sesión o no, y mucho más.

Las cookies son datos que se almacenan en tu navegador, y son enviados al
servidor en cada petición que haces del cliente al servidor mismo.
Esto significaría, por ejemplo, que cada que llegas con el servidor sin memoria
te presentes y le digas toda la información que posiblemente requería de ti.

Las cookies tienen varias limitaciones, por un lado la cantidad de información
que puedes almacenar en cookies está limitada por el navegador, por otro lado,
el usuario es libre de alterar las cookies como él prefiera, alterando así el
funcionamiento de tu aplicación. Por último, si algo sale mal con las cookies,
no está en tu control arreglarlo, tendrías que pedirle a tus usuarios que ellos
mismos arreglen el problema, a final de cuentas, los datos están en su
computadora.

Las sesiones por otro lado, guardan la información en el servidor y no en el
cliente, y lo que se envía entre cada petición es un identificador de sesión
para cada usuario, a través del cuál puedes obtener los datos que guardaste en
el servidor. Esto significaría, por ejemplo, que cuando llegues con el servidor
sin memoria le entregues una identificación tuya y él busque entre sus datos
toda la información que necesitas saber, en lugar de que tú tengas que decirle
todo.

La ventaja de las sesiones es que se almacenan en tu servidor, por lo que puedes
guardar mucha más información que en las cookies, además, puedes usar uno de
múltiples almacenes para sesiones, desde guardarlas en archivos, usar la memoria
RAM, hasta guardar las sesiones en una base de datos especial para este tipo de
información.

Además, las sesiones no pueden modificarse desde el cliente, ya que aunque el
identificador de una sesión es guardado en una cookie, modificarlo significa que
la información del usuario y el usuario ya no están conectados, y esto por sí
mismo no presenta un riesgo de seguridad. Por otro lado, almacenar información
sensible como el ID del usuario en una cookie puede prestarse a que se modifique
y entonces sí exponga a tu servidor a una brecha de seguridad.

Por otro lado, es común que las aplicaciones web encripten las cookies para que
estas no puedan ser leídas o modificadas en texto plano, para eso también hay
distintas implementaciones con algoritmos de encriptación.

En general, la regla es, no almacenes información sensible o de importancia para
tu aplicación en cookies, usa sesiones. Para todo lo demás, usa cookies.
"# backend-with-node-y-express" 
