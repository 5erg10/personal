const expertise =  {
    projectsList:
    [
        {
            image: "images/lince.jpg",
            id: "lince",
            title: "Lince Prototipo",
            link: "https://5erg10.github.io/lince",
            description: "Obtiene los datos de diferentes fuentes (configurables) y muestra una panoramica del estado actual de las tecnologias más relevantes.",
            resume: "<p>En este prototipo se desarrollo un Dashboard en el que reflejar el estado actual y las tendencias en cuando a tecnologias de desarrollo de software.</p><br><p>Se obtenian datos de varias fuentes como stackOverflow o gisthub para representar el crecimiento y evolución de tecnologias de desarrollo.</p><br><p> El objetivo final era crear una herramienta a la que cualquier desarrollador de la empresa pudiese recurrir para valorar que tecnologias de desarrollo usar en los nuevo proyectos.</p>",
            techs: [{ tech: "AngularJS", complexity: "60"}],
            areas: ["front", "data-visualization"],
            year: "2014"
        },{
            image: "images/clever.jpg",
            id: "clever",
            title: "Clever Landing",
            link: "https://5erg10.github.io/cleverLanding",
            description: "Landing de la plataforma de agentes inteligentes <b>CLEVER</b>",
            resume: "<p>Landing animada en la que se explica el funcionamiento de los agentes inteligentes BIKA.</p><br><p>Con animaciones creadas gracias a la librería GreenShock, se creo esta landing a modo de documental interactivo.</p>",
            techs: [{ tech: "AngularJS", complexity: "70"}, { tech: "GreenShock", complexity: "60"}],
            areas: ["front"],
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
            year: "2017"
        },{
            image: "images/vrLabs.png",
            id: "vrlabs",
            title: "VR Office",
            link: "https://5erg10.github.io/vrOffice",
            description: "Oficina virtual e interactiva en entorno WebVR con ThreeJS (Abre la WebApp desde un dispositivo movil para disfrutar de la experiencia inmersiva ;-)).",
            resume: "<p>Recreacion de una oficina en un entorno 3D inmersivo.</p><br><p>El objetivo con este prototipo era probar diferentes formas interaccion que fuesen comodas e intuitivas poara un usuario en un entorno de Realidad virtual asi como probar la viabilidad de usar este tipo de entornos para el consumo de información.</p>",
            techs: [{ tech: "ThreeJS", complexity: "80"}],
            areas: ["front", "vr"],
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
            year: "2014"
        },{
            image: "images/tatami.png",
            id: "tatami",
            title: "TatamiVR",
            link: "https://5erg10.github.io/tatamiVR/",
            description: "HomePage y documentacion Web sobre un proyecto de realidad virtual desarrollado para la plataforma VIVE en Unity.",
            resume: "<p>Con Tatami la idea recrear un entorno de realidad virtual pensado para sustiruir el telefono móvil.</p><br><p>Así, este entorno comenzaba en un escenario central donde tenias acceso a todas tus aplicaciones instaladas, diferentes widgets, etc. Para abrir aplicaciones solo tenias que cogerlas y lanzarlas al suelo, alli donde la espera de la aplicacion contacta con el suelo, aparecía una habitacion que representaba esa App y a la que se podia navegar.</p><br><p>Podias organizar a tu alrededor todas las aplicaciones abiertas en el lugar que quisieses, navegar de unas a otras, cerrarlas, etc.</p>",
            techs: [{ tech: "Unity", complexity: "80"},{ tech: "SocketIO", complexity: "70"}],
            areas: ["front", "vr"],
            year: "2017"
        },{
            image: "images/arkit.jpg",
            id: "arkit",
            title: "ArKit Tips",
            link: "https://5erg10.github.io/ArKitDocu/",
            description: "Diferentes Tips para trabajar con ARKit de Apple.",
            resume: "<p>Web documental en la que guardabamos para compartir diferentes Tips para trabajar con el SDK de realidad aumentada de ARKit de Apple aplicados en diferentes proyectos en los que estubimos trabajando con esta tecnología.</p>",
            techs: [{ tech: "ARKit", complexity: "60"},{ tech: "SocketIO", complexity: "80"}],
            areas: ["front", "ar"],
            year: "2014"
        },{
            image: "images/word2vec.png",
            id: "word2vec",
            title: "Word 2 Vec",
            link: "https://5erg10.github.io/word2Vec/#/scroll",
            description: "Se distributen palabras en un espacio tridimensional en función de su proximidad semántica.",
            resume: "<p>Gracias a librerias como Word2Vec, que era capaz de extraer la proximidad semántica entre diferentes parabras y agruparlas en grupos semánticos comúnes.</p><br><p>Esta libreria nos devolvia los datos de proximidad como vectores de 3 ejes, por lo que se podía trasladar esa información a un entorno 3D creado con <b>threeJs</b> y crear una nuve tridimensional de palabras.</p>",
            techs: [{ tech: "ThreeJS", complexity: "80"}],
            areas: ["front", "data-visualization"],
            year: "2016"
        },{
            image: "images/d3Vis.jpg",
            id: "d3Vis",
            title: "D3 Visualization",
            link: "https://5erg10.github.io/word2Vec/#/about",
            description: "Diferentes pruebas de visualización de datos realizado en AngularJS con D3JS.",
            resume: "<p>Diferentes pruebas de visualización de datos realizado en AngularJS con <b>D3JS</b>.</p>",
            techs: [{ tech: "AngularJS", complexity: "60"}],
            areas: ["front", "data-visualization"],
            year: "2015"
        },{
            image: "images/quijote2077.png",
            id: "quijote2077",
            title: "Quijote 2077",
            link: "https://quijote2077.herokuapp.com/",
            description: "Aventura gráfica conversacional inspirada en la de los años 80.",
            resume: "<p>El objetivo era poder trabajar y testear tecnologías como <b>dialogFlow</b> o <b>fireBase</b>.</p><br><p>Para ello ideé un videojuego de tipo conversacional en el que ir descifrando los diferentes enigmas y avanzar en el juego, al estilo de juegos de los años 80 como el prisionero del hielo.</p>",
            techs: [{ tech: "SocketIO", complexity: "70"},{ tech: "Dialogflow", complexity: "50"},{ tech: "Firebase", complexity: "50"},{ tech: "NodeJS", complexity: "70"}],
            areas: ["front", "ia", "chatbot"],
            year: "2019"
        },{
            image: "images/nextHotel.png",
            id: "hubHotel",
            title: "Hub Hotel",
            link: "https://5erg10.github.io/hubHotel/",
            description: "El usuario puede recorer diferentes oficinas y puede ver en tiempo real a otros usuarios y chatear con ellos.",
            resume: "<p>Recurriendo a <b>ThreeJs</b> se recrearon en 3D diferentes sedes de la empresa.</p><br><p>El usuario puede seleccionar un avatar y una de esas sedes, y entrar para poder recorrerla y averiguar todo lo que esa sede le puede ofrecer.</p><br><p>Gracias, además, a un modúlo de <b>Socket.io</b> desplegado en Heroku, el usuario puede ver en tiempo real a otroa compañeros que también estén recorriendo esa misma sede y chatear con ellos.</p>",
            techs: [{ tech: "ThreeJS", complexity: "90"},{ tech: "SocketIO", complexity: "90"},{ tech: "MongoDB", complexity: "70"},{ tech: "Express", complexity: "70"},{ tech: "NodeJS", complexity: "70"}],
            areas: ["front", "3d"],
            year: "2019"
        },{
            image: "images/cugat.png",
            id: "cugat",
            title: "RTVE Cugat",
            link: "https://lab.rtve.es/webdocs/xavier-cugat/#/",
            description: "Haz un viaje a traves de la vida del compositor Xavier Cugat.",
            resume: "<p>Web Documental interactivo creado en <b>AngularJs</b> y <b>GreenShock</b> para RTVE en el que poder profundizar en la vida y obra del compositor Xavier Cugat.</p>",
            techs: [{ tech: "AngularJS", complexity: "60"}, { tech: "GreenShock", complexity: "80"}],
            areas: ["front"],
            year: "2017"
        },{
            image: "images/labsweb.png",
            id: "labsweb",
            title: "Labs Web",
            link: "https://5erg10.github.io/labs-web/#/",
            description: "plataforma para consultar las tecnologías sobre las que se ha investigado en el departamento de innovación y tener una aproximación de su valía.",
            resume: "<p>Plataforma ideada para conservar, centralizar y compartir todo el conocimiento generado en el laboratorio de innovación.</p><br><p>Dispone de un interfaz de visualización y un dashboard en el que ir generando las fichas de información, hechos ambos en <b>VueJs</b>.</p><br><p>En el flujo final ideado, un miembro del equipo, al terminar el análisis de una tecnología, recurria al dashboard para volcar la información y conclusiones obtenidas, y esta se veía reflejada automáticamente en el interfaz para que cualquier miembro de la empresa la pudiera consultar.</p>",
            techs: [{ tech: "Vuejs", complexity: "80"}],
            areas: ["front"],
            year: "2019"
        },{
            image: "images/arkit15.png",
            id: "Kia ArKit",
            title: "Kia ARKit",
            description: "Crea un escenario en tiempo real con realidad aumentada.",
            resume: "<p>Prototipo elaborado en colaboración con Kia para el evento del salón del automovil.</p><br><p>En el Stand del evento se dispondría un dispositivo movil y un Set blanco con un modelo de coche de la marca Kia y a los visitabtes se les ofrecía el dispositivo movil para que pudiesen colocar al rededor del cocche elementos virtuales.</p><br><p>Se podian añadir a la escena elementos decorativos, escritura al aire, elementos ambientales como arboles y vegetación, etc Y podian publicarla para entrar en un concurso en el que se votaba el mejor escenario creado.</p>",
            techs: [{ tech: "ARKit", complexity: "80"}, {tech: "Unity", complexity: "70"}],
            areas: ["front"],
            media: {
                videos: [],
                images: ['plaint_snapshot_1.png', 'plaint_snapshot_2.png', 'plaint_snapshot_3.png']
            },
            year: "2019"
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