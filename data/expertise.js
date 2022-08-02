//,odule "expertise-module"

export default {
    projectsList: [
        {
            image: "images/lince.jpg",
            title: "Lince Prototipo",
            link: "https://5erg10.github.io/lince",
            description: "Prototipo de visualización de datos en el que, obteniendo datos de diferentes fuentes (configurables), se puede obtener una panoramica del estado actual de las tecnologias de desarrollo de software.",
            techs: [{ tech: "angularjs", complexity: "60"}],
            areas: ["front", "data-visualization"],
            year: "2014"
        },{
            image: "images/clever.jpg",
            title: "Clever Landing",
            link: "https://5erg10.github.io/cleverLanding",
            description: "Landing de la plataforma de agentes inteligentes <b>CLEVER</b>",
            techs: [{ tech: "angularjs", complexity: "70"}, { tech: "greenshock", complexity: "60"}],
            areas: ["front"],
            year: "2015"
        },{
            image: "images/react.jpg",
            title: "React JS Test",
            link: "https://5erg10.github.io/reactTest",
            description: "prototipo web desarrollado en <b>ReactJS</b> con propositos de analisis de rendimiento y viabilidad en producción.",
            techs: [{ tech: "reactjs", complexity: "70"}],
            areas: ["front"],
            year: "2016"
        },{
            image: "images/geo.png",
            title: "GeoJson Map",
            link: "https://5erg10.github.io/threejs-geoJson",
            description: "Mapa generado automaticamente en 3D a partir de datos extraidos en formato GeoJson.",
            techs: [{ tech: "threejs", complexity: "80"}],
            areas: ["front", "data-visualization", "3D"],
            year: "2017"
        },{
            image: "images/vrLabs.png",
            title: "VR Office",
            link: "https://5erg10.github.io/vrOffice",
            description: "Prototipo de oficina virtual e interactiva en entorno WebVR con ThreeJS (Abre la WebApp desde un dispositivo movil para disfrutar de la experiencia inmersiva ;-) ).",
            techs: [{ tech: "threejs", complexity: "80"}],
            areas: ["front", "vr"],
            year: "2017"
        },{
            image: "images/sentTree.png",
            title: "Sent Tree",
            link: "https://5erg10.github.io/sentTree/",
            description: "Proyecto basado en una escena generada en <b>WebGl</b> que mediante <b>NLP</b> analiza los tweets del uruario para determinar el nivel de felicidad general y modificar la escena en cunsecuencia a la vez que extrae palabras clave para seleccionar una cancion en cuya letra esten contenidas estas palabras clave.",
            techs: [{ tech: "threejs", complexity: "70"}],
            areas: ["front", "ia"],
            year: "2014"
        },{
            image: "images/tatami.png",
            title: "TatamiVR",
            link: "https://5erg10.github.io/tatamiVR/",
            description: "HomePage y documentacion Web sobre un proyecto de realidad virtual desarrollado para la plataforma Steam de VIVE en Unity.",
            techs: [{ tech: "unity", complexity: "80"},{ tech: "socketio", complexity: "70"}],
            areas: ["front", "vr"],
            year: "2017"
        },{
            image: "images/arkit.jpg",
            title: "arKit",
            link: "https://5erg10.github.io/ArKitDocu/",
            description: "HomePage y Web documentación relacionada con varios proyectos realizados con el SDK de realidad aumentada de ARKit de Apple.",
            techs: [{ tech: "arkit", complexity: "60"},{ tech: "socketio", complexity: "80"}],
            areas: ["front", "ar"],
            year: "2014"
        },{
            image: "images/word2vec.png",
            title: "Word 2 Vec",
            link: "https://5erg10.github.io/word2Vec/#/scroll",
            description: "Prototipo desarrollado en Angular con three.js que distribuye automaticamente palabras en un espacio tridimensional en función de su proximidad semántica.",
            techs: [{ tech: "threejs", complexity: "80"}],
            areas: ["front", "data-visualization"],
            year: "2016"
        },{
            image: "images/d3Vis.jpg",
            title: "D3 Visualization",
            link: "https://5erg10.github.io/word2Vec/#/about",
            description: "Prototipo de visualización del estado del arte de las tecnologias y su madurez realizado en AngularJS con D3JS.",
            techs: [{ tech: "angularjs", complexity: "60"}],
            areas: ["front", "data-visualization"],
            year: "2015"
        },{
            image: "images/quijote2077.png",
            title: "Quijote 2077",
            link: "https://quijote2077.herokuapp.com/",
            description: "Proyecto de aventura gráfica conversacional con la que poder trabajar en tecnologias como dialogFlow o fireBase.",
            techs: [{ tech: "socketio", complexity: "70"},{ tech: "dialogflow", complexity: "50"},{ tech: "firebase", complexity: "50"},{ tech: "nodejs", complexity: "70"}],
            areas: ["front", "ia", "chatbot"],
            year: "2019"
        },{
            image: "images/nextHotel.png",
            title: "Hub Hotel",
            link: "https://5erg10.github.io/hubHotel/",
            description: "Prototipo que consiste en un entorno en 3d creado con ThreeJS que reproduce diferentes sedes del grupo. El usuario puede recorrerlas y, usando SocketIo, puede ver en tiempo real a otros usuarios que esten en esa misma sede y chatear con ellos.",
            techs: [{ tech: "threejs", complexity: "90"},{ tech: "socketio", complexity: "90"},{ tech: "mongodb", complexity: "70"},{ tech: "express", complexity: "70"},{ tech: "nodejs", complexity: "70"}],
            areas: ["front", "3d"],
            year: "2019"
        },{
            image: "images/cugat.png",
            title: "RTVE Xavier Cugat",
            link: "tve.es/webdocs/xavier-cugat/#/",
            description: "Documental interactivo centrado en la vida del compositor Xavier Cugat realizado para los labs de RTVE.",
            techs: [{ tech: "angularjs", complexity: "60"}, { tech: "greenshock", complexity: "80"}],
            areas: ["front"],
            year: "2017"
        }
    ],
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