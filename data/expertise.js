const expertise =  {
    projectsList:
    [
        {
            image: "images/lince.jpg",
            id: "lince",
            title: "Lince Prototipo",
            link: "https://5erg10.github.io/lince",
            description: "Obtiene los datos de diferentes fuentes (configurables) y muestra una panoramica del estado actual de las tecnologias más relevantes.",
            resume: "<p>Dashboard hecho con <b>AngularJS</b> y <b>D3JS</b> que refleja el estado actual y las tendencias en cuando a tecnologias de desarrollo de software.</p><br><p>Se obtienen datos de varias fuentes como stackOverflow o github para representar el crecimiento y evolución de tecnologias de desarrollo en diferentes áreas.</p><br><p> El objetivo final era crear una herramienta a la que cualquier desarrollador de la empresa pudiese recurrir para valorar qué tecnologias de desarrollo usar en los nuevo proyectos, cuáles estaban creciendo más, cuáles tenian mas apoyo de la comunidad, etc..</p>",
            techs: [{ tech: "AngularJS", complexity: "60"}],
            areas: ["front", "data-visualization"],
            media: {
                videos: [],
                images: ['lince_snapshot_1.png', 'lince_snapshot_2.png', 'lince_snapshot_3.png']
            },
            year: "2014"
        },{
            image: "images/clever.jpg",
            id: "clever",
            title: "Clever Landing",
            link: "https://5erg10.github.io/cleverLanding",
            description: "Landing de la plataforma de agentes inteligentes <b>CLEVER</b>",
            resume: "<p>Landing animada interactiva creada con <b>GreenShock</b> en la que se explica el funcionamiento de los agentes inteligentes BIKA, que busca organizar y facilitar el acceso al conocimiento generado en la empresa gracias a IA.</p>",
            techs: [{ tech: "AngularJS", complexity: "70"}, { tech: "GreenShock", complexity: "60"}],
            areas: ["front"],
            media: {
                videos: [],
                images: ['clever_snapshot_1.png', 'clever_snapshot_2.png', 'clever_snapshot_3.png']
            },
            year: "2015"
        },{
            image: "images/react.jpg",
            id: "react",
            title: "React JS",
            link: "https://5erg10.github.io/reactTest",
            description: "prototipo web de prueba desarrollado en <b>ReactJS</b>.",
            resume: "<p>Con proposito de analisis de rendimiento y viabilidad en producción de la tecnología <b>ReactJS</b>, se desarrollo esta plataforma Web que pone a prueba diversos casos de uso.</p>",
            techs: [{ tech: "ReactJS", complexity: "70"}],
            areas: ["front"],
            media: {
                videos: [],
                images: ['react_snapshot_1.png', 'react_snapshot_2.png', 'react_snapshot_3.png']
            },
            year: "2016"
        },{
            image: "images/geo.png",
            id: "geo",
            title: "GeoJson Map",
            link: "https://5erg10.github.io/threejs-geoJson",
            description: "Mapa generado automaticamente en 3D a partir ficheros GeoJson.",
            resume: "<p>A partir de ficheros GeoJson y diversos datos macroeconomicos extraidos de diferentes bases de datos públicas, se generan de manera automática mapas en 3D gracias a la tecnología <b>ThreeJs</b> que reflejan información geográfica del nivel de ingresos y edad media de poblaciones de diferentes países, datos sobre exportaciones e importaciones, etc.</p><br><p>En este interfaz se puede seleccionar diferentes tipos de mapas y se puede elegir que parámetros visualizar de manera dinámica.</p>",
            techs: [{ tech: "ThreeJS", complexity: "80"}],
            areas: ["front", "data-visualization", "3D"],
            media: {
                videos: [],
                images: ['geo_snapshot_1.png', 'geo_snapshot_2.png', 'geo_snapshot_3.png']
            },
            year: "2017"
        },{
            image: "images/vrLabs.png",
            id: "vrlabs",
            title: "VR Office",
            link: "https://5erg10.github.io/vrOffice",
            description: "Oficina virtual e interactiva en entorno <b>WebVR</b> con <b>ThreeJS</b> (Abre la WebApp desde un dispositivo movil para disfrutar de la experiencia inmersiva ;-)).",
            resume: "<p>Recreacion de una oficina en un entorno 3D inmersivo.</p><br><p>El objetivo con este prototipo era probar diferentes formas interaccion que fuesen cómodas e intuitivas para un usuario en un entorno de Realidad virtual, asi como probar la viabilidad de usar este tipo de entornos para el consumo de información.</p>",
            techs: [{ tech: "ThreeJS", complexity: "80"}],
            areas: ["front", "vr"],
            media: {
                videos: [],
                images: ['vrlabs_snapshot_1.png', 'vrlabs_snapshot_2.png', 'vrlabs_snapshot_3.png']
            },
            year: "2017"
        },{
            image: "images/sentTree.png",
            id: "sentree",
            title: "Sent Tree",
            link: "https://5erg10.github.io/sentTree/",
            description: "Una escena en 3D que cambia enfuncion del estado de ánimo del usuario",
            resume: "<p>Escena generada en <b>WebGl</b> que mediante <b>NLP</b> analiza los tweets del usuario y extrae el estado de ánimo general de sus mensajes para reflejarlo en las 4 estaciones del año.</p>",
            techs: [{ tech: "ThreeJS", complexity: "70"}],
            areas: ["front", "ia"],
            media: {
                videos: [],
                images: ['sent_snapshot_1.png', 'sent_snapshot_2.png', 'sent_snapshot_3.png']
            },
            year: "2014"
        },{
            image: "images/tatami.png",
            id: "tatami",
            title: "TatamiVR",
            link: "https://5erg10.github.io/tatamiVR/",
            description: "HomePage y documentacion Web sobre un proyecto de realidad virtual desarrollado para la plataforma VIVE en Unity.",
            resume: "<p>Con Tatami nos planteamos el reto de trasladar el uso cotidiano que se hace de un dispositivo móvil a un entorno de realidad virtual.</p><br><p>Creamos un entorno donde tienes a tu alrededor todas las aplicaciones y widgets instalados y para abrirlas solo tienes que coger el icono de la aplicación que desees y lanzarlo al suelo. Alli donde ese icono toque el suelo, se abre una habitacion que representa esa app.</p><br><p>De esta forma, puedes abrir, organizar, cerrar y navegar por cualquier de estas aplicaciones de una forma muy similar a como lo harias en tu teñefono móvil.</p>",
            techs: [{ tech: "Unity", complexity: "80"},{ tech: "SocketIO", complexity: "70"}],
            areas: ["front", "vr"],
            media: {
                videos: ['pF3h_gSsRic'],
                images: ['tatami_snapshot_1.png', 'tatami_snapshot_2.png', 'tatami_snapshot_3.png']
            },
            year: "2017"
        },{
            image: "images/arkit.jpg",
            id: "arkit",
            title: "ArKit Tips",
            link: "https://5erg10.github.io/ArKitDocu/",
            description: "Diferentes Tips para trabajar con ARKit de Apple.",
            resume: "<p>Web documental en la que recopila para compartir diferentes Tips para trabajar con el SDK de realidad aumentada de ARKit de Apple, extraídos de diferentes proyectos en los que estuvimos trabajando.</p>",
            techs: [{ tech: "ARKit", complexity: "60"},{ tech: "SocketIO", complexity: "80"}],
            areas: ["front", "ar"],
            year: "2014"
        },{
            image: "images/word2vec.png",
            id: "word2vec",
            title: "Word 2 Vec",
            link: "https://5erg10.github.io/word2Vec/#/scroll",
            description: "Se distributen palabras en un espacio tridimensional en función de su proximidad semántica.",
            resume: "<p>El objetivo de este prototipo era trabajar con librerias como Word2Vec, que es capaz de extraer la proximidad semántica entre diferentes parabras y agruparlas en grupos semánticos comúnes.</p><br><p>Esta libreria nos devuelve los datos de proximidad como vectores de 3 ejes, por lo que se podía trasladar esa información a un entorno 3D creado con <b>threeJs</b> y generar una nuve tridimensional de palabras.</p>",
            techs: [{ tech: "ThreeJS", complexity: "80"}],
            areas: ["front", "data-visualization"],
            media: {
                videos: [],
                images: ['word_snapshot_1.png', 'word_snapshot_2.png', 'word_snapshot_3.png']
            },
            year: "2016"
        },{
            image: "images/quijote2077.png",
            id: "quijote2077",
            title: "Quijote 2077",
            link: "https://quijote2077.herokuapp.com/",
            description: "Aventura gráfica conversacional inspirada en la de los años 80.",
            resume: "<p>El objetivo era poder trabajar y testear tecnologías como <b>dialogFlow</b> o <b>fireBase</b>.</p><br><p>Para ello ideé un videojuego de tipo conversacional en el que ir descifrando los diferentes enigmas y avanzar en el juego, al estilo de juegos de los años 80 como el prisionero del hielo.</p>",
            techs: [{ tech: "SocketIO", complexity: "70"},{ tech: "Dialogflow", complexity: "50"},{ tech: "Firebase", complexity: "50"},{ tech: "NodeJS", complexity: "70"}],
            areas: ["front", "ia", "chatbot"],
            media: {
                videos: [],
                images: ['quijote_snapshot_1.png', 'quijote_snapshot_2.png', 'quijote_snapshot_3.png']
            },
            year: "2019"
        },{
            image: "images/nextHotel.png",
            id: "hubHotel",
            title: "Hub Hotel",
            link: "https://5erg10.github.io/hubHotel/",
            description: "El usuario puede recorer diferentes oficinas y puede ver en tiempo real a otros usuarios y chatear con ellos.",
            resume: "<p>En la empresa se detecto una problemática. Muchos empleados que trabajan en diferentes sedes en ocasiones tiene que acudir a otras sedes para formaciones o gestiones, y les costaba orientarse o localizar la zona de la oficina a la que debía dirigirse por que nunca habian estado.</p><br><p>NextHub propone una solución y recurriendo a <b>ThreeJs</b>, se recrearon en 3D diferentes sedes de la empresa con las zonas de interes más importantes para que el usuario pueda seleccionar un avatar y una de esas sedes, y entrar para poder recorrerla y familiarizarse con todo lo que esa sede le puede ofrecer y donde se localiza cada zona.</p><br><p>Gracias, además, a un modúlo de <b>Socket.io</b> desplegado en Heroku, el usuario puede ver en tiempo real a otroa compañeros que también estén recorriendo esa misma sede y chatear con ellos.</p>",
            techs: [{ tech: "ThreeJS", complexity: "90"},{ tech: "SocketIO", complexity: "90"},{ tech: "MongoDB", complexity: "70"},{ tech: "Express", complexity: "70"},{ tech: "NodeJS", complexity: "70"}],
            areas: ["front", "3d"],
            media: {
                videos: ['IAwm9ZdqDw0'],
                images: ['hub_snapshot_1.png', 'hub_snapshot_2.png', 'hub_snapshot_3.png']
            },
            year: "2019"
        },{
            image: "images/cugat.png",
            id: "cugat",
            title: "RTVE Cugat",
            link: "https://lab.rtve.es/webdocs/xavier-cugat/#/",
            description: "Haz un viaje a traves de la vida del compositor Xavier Cugat.",
            resume: "<p>Web Documental interactivo creado en <b>AngularJs</b> con <b>GreenShock</b> para RTVE en el que poder profundizar en la vida y obra del compositor Xavier Cugat.</p>",
            techs: [{ tech: "AngularJS", complexity: "60"}, { tech: "GreenShock", complexity: "80"}],
            areas: ["front"],
            media: {
                videos: [],
                images: ['cugat_snapshot_1.png', 'cugat_snapshot_2.png', 'cugat_snapshot_3.png']
            },
            year: "2017"
        },{
            image: "images/labsweb.png",
            id: "labsweb",
            title: "Labs Web",
            link: "https://5erg10.github.io/labs-web/#/",
            description: "plataforma para consultar las tecnologías sobre las que se ha investigado en el departamento de innovación y tener una aproximación de su valía.",
            resume: "<p>Plataforma ideada para conservar, centralizar y compartir todo el conocimiento generado en el laboratorio de innovación.</p><br><p>Dispone por un lado de un interfaz de visualización y por otro de un dashboard en el que ir generando las información que se mostrará en el primero, hechos ambos en <b>VueJs</b>.</p><br><p>En el flujo final ideado, un miembro del equipo de innnovación, al terminar el análisis de una tecnología, recurria al dashboard para volcar la información y conclusiones obtenidas, y esta se veía reflejada automáticamente en el interfaz para que cualquier miembro de la empresa la pudiera consultar.</p><br><p>Para poder tener acceso al dashboard de gestión de datos en esta demo, se ha añadido un boton 'CREAR' en el insterfaz de visualización que en el entorno real no existe.</p>",
            techs: [{ tech: "Vuejs", complexity: "80"}],
            areas: ["front"],
            media: {
                videos: [],
                images: ['labs_snapshot_1.png', 'labs_snapshot_2.png', 'labs_snapshot_3.png']
            },
            year: "2019"
        },{
            image: "images/arkit15.png",
            id: "Kia ArKit",
            title: "Kia ARKit",
            description: "Crea un escenario en tiempo real con realidad aumentada.",
            resume: "<p>Prototipo elaborado en colaboración con Kia para el evento del salón del automovil.</p><br><p>En el Stand del evento se dispondría un dispositivo movil y un Set blanco con un modelo de coche de la marca Kia y a los visitabtes se les ofrecía el dispositivo movil para que pudiesen colocar al rededor del cocche elementos virtuales.</p><br><p>Se podian añadir a la escena elementos decorativos, escritura al aire, elementos ambientales como arboles y vegetación, etc Y podian publicarla para entrar en un concurso en el que se votaba el mejor escenario creado.</p>",
            techs: [{ tech: "ARKit", complexity: "80"}, {tech: "Unity", complexity: "70"}],
            areas: ["ar"],
            media: {
                videos: ['eaPh6DSewxQ'],
                images: ['plaint_snapshot_1.png', 'plaint_snapshot_2.png', 'plaint_snapshot_3.png']
            },
            year: "2019"
        },{
            image: "images/arce.png",
            id: "ARceProto",
            title: "ARCE Prototype",
            description: "Disfruta de esculturas virtuales por toda la ciudad.",
            resume: "<p>Prototipo elaborado en colaboración con el comisariado del museo reina sofia con el objetivo de poder dar visivilidad a esculturas que, por falta de espacio, se encuentran guardadas en almacenes.</p><br><p>La aplicación ofrece diferentes exposiciones en varias ciudades. Una vez que el usuario selecciona la ciudad y exposición que quiere ver, se le muestra un mapa con el itinerario a seguir y, una vez que llega a cada una de las zonas donde se ubican las esculturas, la aplicación pasa al modo cámara para que pueda observarlas desde cualquier ángulo gracias a la realidad aumentada.</p><br><p>Con este planteamiento, no solo se consigue dar visibilidad a obras infrautilizadas, si no que además favorecía el flujo turistico a zonas de la ciudad menos transitadas.</p>",
            techs: [{ tech: "ARCore", complexity: "80"}, {tech: "Unity", complexity: "70"}],
            areas: ["ar"],
            media: {
                videos: ['yY2PcBG52Ig'],
                images: ['arce_snapshot_1.png', 'arce_snapshot_2.png', 'arce_snapshot_3.png']
            },
            year: "2020"
        },{
            image: "images/roomTeraction.png",
            id: "RoomTeraction",
            title: "RoomTeraction",
            description: "Controla todo en tu casa con gestos manuales.",
            resume: "<p>En el departamento de innovación, el equipo de UX e interacciones necesitaban tener un entorno en el que hacer pruebas y ensayos, pero crear un entorno real en el que, por ejemplo, probar nuevos tipos de interacciones del usuario con un cajero automático, era inviable.</p><br><p>Gracias a la realidad virtual, con RoomTeraction podiamos crear cualquier entorno y, dentro de este, programar cualquier tipo de interacción que el equipo de UX quisiese testar.</p><br></p>En este caso concreto, el experimento consistía en recrear una casa en la que, mediante gestos manuales, se pudiesen controlar diferentes dispositivos. El sistema detecta hacia que dispositivo estas mirando y, en funcion de esto, cada gesto tiene una funcionalidad. De esta forma, si subes y bajas la mano mientras miras a la lampara regulas la intentsidad de la luz, pero si haces el mismo gesto mirando a la TV regulas el volumen del sonido.</p><br><p>Todos estos experimentos se configuraban y se ponian en marcha mediante una aplicación desarrollada para teléfonos móviles y tablet que también recogía datos de interacción del tester para sacar métricas y conclusiones.</p>",
            techs: [{ tech: "Oculus", complexity: "80"}, {tech: "Unity", complexity: "70"}],
            areas: ["vr"],
            media: {
                videos: ['nzLfmFkn9Kw'],
                images: ['roomt_snapshot_1.png', 'roomt_snapshot_2.png', 'roomt_snapshot_3.png']
            },
            year: "2020"
        },{
            image: "images/liveShop.png",
            id: "LiveShop",
            title: "LiveShop",
            description: "El usuario obtiene información adicional de sus articulos en tiempo real y, en la tienda, datos de hábitos de consumo.",
            resume: "<p>Este prototipo, orientado a tiendas de ropa en este caso, constaba de dos partes. Por un lado, tenemos una aplicación android/IOS y por otro un Dashboard Web.</p><br><p>La aplicación móvil ofrece la opción Live, un botón que abre la cámara y, utilizando la propia carteleria de la tienda como marcadores AR, muestra información adicional en realidad aumentada sobre los articulos que nos interesan, como puede ser tallas o colores disponibles.</p><br><p>El Dashboard Web esta destinado para su uso por los empleados de la propia tienda. En este, se muestra en tiempo real la actividad de los usuarios con la aplicación móvil. Así, nos muestra por cada usuario, en que zona de la tienda esta, que articulos ha consultado y que información especifica esta consultando sobre el artículo.</p><br><p>Este sistema ofrece dos ventajas. Por un lado el usuario puede saber al instante si el articulo que le interesa esta dispoble en la talla y color que el necesita. Por el otro, se libera a los empleados de la tienda de ese tipo de consultas y la tienda obtiene informacion sobre habitos de consumo de los usuarios, rutas más frecuentadas dentro de la tienda, productos más consultados, etc.</p>",
            techs: [{ tech: "Vuforia", complexity: "80"}, {tech: "Unity", complexity: "70"}],
            areas: ["ar", "front"],
            media: {
                videos: ['YMS2XdAFsP0'],
                images: ['liveshop_snapshot_1.png', 'liveshop_snapshot_2.png', 'liveshop_snapshot_3.png']
            },
            year: "2020"
        }
    ],
    getProjectById: function(id) {
        return this.projectsList.find(project => project.id === id);
    },
    getProjects: function() {
        return this.projectsList;
    },
    findProjectsByTech: function(techName) {
        return this.projectsList.filter(project => {
            const techlist = project.techs.reduce((acc, element) => {
                acc.push(element.tech.toLowerCase());
                return acc;
            }, []);
            return techlist.includes(techName.toLowerCase());
        });
    },
    giveTechExperience: function(techName) {
        const listOfProjects = this.findProjectsByTech(techName);
        const currentYear = new Date().getFullYear();
        const numofYearsWorkingWith = Math.min(...listOfProjects.reduce((acc, project) => { 
            acc.push(parseInt(project.year));
            return acc;
        }, []));
        return {
            numOfProjects: listOfProjects.length,
            years: currentYear - numofYearsWorkingWith
        }
    }
}