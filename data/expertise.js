const expertise =  {
    projectsList:
    [
        {
            image: "images/lince.jpg",
            id: "lince",
            title: "Lince Prototipo",
            link: "https://5erg10.github.io/lince",
            description: "Obtiene los datos de diferentes fuentes (configurables) y muestra una panoramica del estado actual de las tecnologias más relevantes.",
            resume: "<p>En este prototipo se desarrollo un Dashboard en el que reflejar el estado actual y las tendencias en cuando a tecnologias de desarrollo de software. Se obtenian datos de varias fuentes como stackOverflow o gisthub para representar el crecimiento y evolución de tecnologias de desarrollo.</p><br><p> El objetivo final era crear una herramienta a la que cualquier desarrollador de la empresa pudiese recurrir para valorar que tecnologias de desarrollo usar en los nuevo proyectos.</p>",
            techs: [{ tech: "angularjs", complexity: "60"}],
            areas: ["front", "data-visualization"],
            year: "2014"
        },{
            image: "images/clever.jpg",
            id: "clever",
            title: "Clever Landing",
            link: "https://5erg10.github.io/cleverLanding",
            description: "Landing de la plataforma de agentes inteligentes <b>CLEVER</b>",
            resume: "<p>Landing animada en la que se explica el funcionamiento de los agentes inteligentes BIKA.</p><br><p>Con animaciones creadas gracias a la librería GreenShock, se creo esta landing a modo de documental interactivo.</p>",
            techs: [{ tech: "angularjs", complexity: "70"}, { tech: "greenshock", complexity: "60"}],
            areas: ["front"],
            year: "2015"
        },{
            image: "images/react.jpg",
            id: "react",
            title: "React JS Test",
            link: "https://5erg10.github.io/reactTest",
            description: "prototipo web de prueba desarrollado en <b>ReactJS</b>.",
            resume: "<p> con propositos de analisis de rendimiento y viabilidad en producción de la tecnología ReactJS, se desarrollo esta plataforma Web qu epone a prueba diversos casos de uso.</p>",
            techs: [{ tech: "reactjs", complexity: "70"}],
            areas: ["front"],
            year: "2016"
        },{
            image: "images/geo.png",
            id: "geo",
            title: "GeoJson Map",
            link: "https://5erg10.github.io/threejs-geoJson",
            description: "Mapa generado automaticamente en 3D a partir ficheros GeoJson.",
            resume: "<p>A partir de ficheros GeoJson y diversos datos macroeconomicos extraidos de diferentes bases de datos públicas, se generan de manera automatica mapas en 3D gracias a la tecnología <b>ThreeJs</b> que reflejan informacion geografica del nivel de ingresos y edad media de poblaciones de diferentes paises, datos sobre exportaciones e importaciones, etc.</p><br><p>En este interfaz se puede seleccionar diferentes tipos de mapas y se puede elegir que parámetros visualizar de manera dinámica.</p>",
            techs: [{ tech: "threejs", complexity: "80"}],
            areas: ["front", "data-visualization", "3D"],
            year: "2017"
        },{
            image: "images/vrLabs.png",
            id: "vrlabs",
            title: "VR Office",
            link: "https://5erg10.github.io/vrOffice",
            description: "Oficina virtual e interactiva en entorno WebVR con ThreeJS (Abre la WebApp desde un dispositivo movil para disfrutar de la experiencia inmersiva ;-) ).",
            resume: "",
            techs: [{ tech: "threejs", complexity: "80"}],
            areas: ["front", "vr"],
            year: "2017"
        },{
            image: "images/sentTree.png",
            id: "sentree",
            title: "Sent Tree",
            link: "https://5erg10.github.io/sentTree/",
            description: "Escena generada en <b>WebGl</b> que mediante <b>NLP</b> analiza los tweets del uruario y modifica la escena según 4 niveles de felicidad que reflejen sus tweets.",
            resume: "",
            techs: [{ tech: "threejs", complexity: "70"}],
            areas: ["front", "ia"],
            year: "2014"
        },{
            image: "images/tatami.png",
            id: "tatami",
            title: "TatamiVR",
            link: "https://5erg10.github.io/tatamiVR/",
            description: "HomePage y documentacion Web sobre un proyecto de realidad virtual desarrollado para la plataforma Steam de VIVE en Unity.",
            resume: "",
            techs: [{ tech: "unity", complexity: "80"},{ tech: "socketio", complexity: "70"}],
            areas: ["front", "vr"],
            year: "2017"
        },{
            image: "images/arkit.jpg",
            id: "arkit",
            title: "arKit",
            link: "https://5erg10.github.io/ArKitDocu/",
            description: "HomePage y Web documentación relacionada con varios proyectos realizados con el SDK de realidad aumentada de ARKit de Apple.",
            resume: "",
            techs: [{ tech: "arkit", complexity: "60"},{ tech: "socketio", complexity: "80"}],
            areas: ["front", "ar"],
            year: "2014"
        },{
            image: "images/word2vec.png",
            id: "word2vec",
            title: "Word 2 Vec",
            link: "https://5erg10.github.io/word2Vec/#/scroll",
            description: "Se distributen palabras en un espacio tridimensional en función de su proximidad semántica.",
            resume: "",
            techs: [{ tech: "threejs", complexity: "80"}],
            areas: ["front", "data-visualization"],
            year: "2016"
        },{
            image: "images/d3Vis.jpg",
            id: "d3Vis",
            title: "D3 Visualization",
            link: "https://5erg10.github.io/word2Vec/#/about",
            description: "Prototipo de visualización del estado del arte de las tecnologias y su madurez realizado en AngularJS con D3JS.",
            resume: "",
            techs: [{ tech: "angularjs", complexity: "60"}],
            areas: ["front", "data-visualization"],
            year: "2015"
        },{
            image: "images/quijote2077.png",
            id: "quijote2077",
            title: "Quijote 2077",
            link: "https://quijote2077.herokuapp.com/",
            description: "Proyecto de aventura gráfica conversacional con la que poder trabajar en tecnologias como dialogFlow o fireBase.",
            resume: "",
            techs: [{ tech: "socketio", complexity: "70"},{ tech: "dialogflow", complexity: "50"},{ tech: "firebase", complexity: "50"},{ tech: "nodejs", complexity: "70"}],
            areas: ["front", "ia", "chatbot"],
            year: "2019"
        },{
            image: "images/nextHotel.png",
            id: "hubHotel",
            title: "Hub Hotel",
            link: "https://5erg10.github.io/hubHotel/",
            description: "El usuario puede recorer diferentes oficinas y puede ver en tiempo real a otros usuarios y chatear con ellos.",
            resume: "",
            techs: [{ tech: "threejs", complexity: "90"},{ tech: "socketio", complexity: "90"},{ tech: "mongodb", complexity: "70"},{ tech: "express", complexity: "70"},{ tech: "nodejs", complexity: "70"}],
            areas: ["front", "3d"],
            year: "2019"
        },{
            image: "images/cugat.png",
            id: "cugat",
            title: "RTVE Xavier Cugat",
            link: "https://lab.rtve.es/webdocs/xavier-cugat/#/",
            description: "Documental interactivo centrado en la vida del compositor Xavier Cugat realizado para los labs de RTVE.",
            resume: "",
            techs: [{ tech: "angularjs", complexity: "60"}, { tech: "greenshock", complexity: "80"}],
            areas: ["front"],
            year: "2017"
        },{
            image: "images/labsweb.png",
            id: "labsweb",
            title: "Labs Web Dashboard",
            link: "https://5erg10.github.io/labs-web/#/",
            description: "plataforma para consultar las tecnologías sobre las que se ha investigado en el departamento de innovación y tener una aproximación de su valía.",
            resume: "",
            techs: [{ tech: "vuejs", complexity: "80"}],
            areas: ["front"],
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
                acc.push(element.tech);
                return acc;
            }, []);
            return techlist.includes(techName);
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