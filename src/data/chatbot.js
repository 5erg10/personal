// filterTechs: filtra proyectos por tech name (parcial, case-insensitive)
// filterAreas: filtra proyectos por área
export const BOT_ANSWERS = [
  {
    keywords: ['react', 'reactjs', 'react.js'],
    reply: 'He trabajado con <b>ReactJS</b> desde 2016. Tengo proyectos como el test de viabilidad ReactJS, React Minecraft con ThreeJS, y este mismo portfolio está hecho en React + Vite. ¡Es mi framework favorito para frontend!',
    filterTechs: ['ReactJS'],
  },
  {
    keywords: ['angular', 'angularjs', 'angular.js'],
    reply: 'Empecé con <b>AngularJS</b> en 2014. Lo usé en proyectos como Lince (dashboard con D3JS), Clever Landing y el documental de RTVE sobre Xavier Cugat. Fue mi primer framework frontend serio.',
    filterTechs: ['AngularJS'],
  },
  {
    keywords: ['vue', 'vuejs', 'vue.js'],
    reply: 'Usé <b>VueJS</b> en el proyecto Labs Web (2019), una plataforma para gestionar el conocimiento del laboratorio de innovación. Tiene una curva de aprendizaje muy suave y es muy productivo.',
    filterTechs: ['Vue'],
  },
  {
    keywords: ['three', 'threejs', 'three.js', 'webgl', '3d'],
    reply: 'ThreeJS es una de mis grandes pasiones. Lo he usado desde 2014 en proyectos como GeoJson Map, VR Office, Sent Tree, Word2Vec, Hub Hotel y React Minecraft. También uso ThreeJS en la escena 3D de este mismo portfolio.',
    filterTechs: ['ThreeJS'],
  },
  {
    keywords: ['vr', 'realidad virtual', 'virtual reality', 'oculus', 'unity'],
    reply: 'He desarrollado varios proyectos de <b>VR</b>: VR Office con ThreeJS y WebVR, TatamiVR para Steam VIVE en Unity, y RoomTeraction con Oculus para testear interacciones con gestos manuales.',
    filterAreas: ['vr'],
  },
  {
    keywords: ['ar', 'realidad aumentada', 'augmented reality', 'arkit', 'arcore', 'flutter', 'vuforia'],
    reply: 'Tengo varios proyectos de <b>AR</b>: ArKit Tips, el prototipo para Kia en el salón del automóvil, ARCE Prototype con el Museo Reina Sofía, y LiveShop (AR para tiendas). He usado ARKit, ARCore, Vuforia y Flutter.',
    filterAreas: ['ar'],
  },
  {
    keywords: ['node', 'nodejs', 'backend', 'servidor', 'server'],
    reply: 'He usado <b>NodeJS</b> en proyectos como Hub Hotel (con SocketIO y MongoDB para tiempo real) y Quijote 2077 (chatbot conversacional). También tengo experiencia con Express y Firebase.',
    filterTechs: ['NodeJS'],
  },
  {
    keywords: ['ia', 'inteligencia artificial', 'nlp', 'chatbot', 'machine learning', 'llm', 'gpt'],
    reply: 'Tengo proyectos de <b>IA y NLP</b>: Sent Tree (análisis de sentimientos en tweets), Quijote 2077 (DialogFlow + Groq + Cerebra), y este chatbot que estás usando ahora mismo, con keyword matching local.',
    filterAreas: ['ia', 'chatbot'],
  },
  {
    keywords: ['portfolio', 'proyectos', 'projects', 'trabajos', 'trabajar'],
    reply: 'Tengo 18 proyectos en el portfolio que van desde 2014 hasta 2023, cubriendo frontend, 3D, VR, AR e IA. ¡Puedes explorarlos en la sección Portfolio de arriba! ¿Sobre qué tecnología quieres saber más?',
  },
  {
    keywords: ['contacto', 'contact', 'email', 'correo', 'contratar', 'hire'],
    reply: 'Puedes contactarme a través del formulario en la sección <b>Contact</b> o en LinkedIn. Estaré encantado de hablar sobre nuevos proyectos o colaboraciones.',
  },
  {
    keywords: ['hola', 'hello', 'hi', 'buenas', 'hey', 'saludos'],
    reply: '¡Hola! Soy el bot de Sergio. Puedo contarte sobre sus tecnologías y proyectos. Prueba preguntando por <b>ThreeJS</b>, <b>React</b>, <b>VR/AR</b>, o simplemente di <b>"portfolio"</b> para un resumen.',
  },
  {
    keywords: ['gracias', 'thanks', 'thank you', 'perfecto', 'genial', 'ok'],
    reply: '¡De nada! Si tienes más preguntas sobre el portfolio o las tecnologías de Sergio, aquí estoy.',
  },
  {
    keywords: ['css', 'tailwind', 'estilos', 'diseño', 'design', 'ui', 'ux'],
    reply: 'Este portfolio usa <b>Tailwind CSS v4</b>. En proyectos anteriores trabajé con CSS puro, GreenShock para animaciones, y distintos sistemas de diseño. El foco en UX también es clave en los proyectos de VR/AR.',
  },
]

export const HINTS = ['ThreeJS', 'ReactJS', 'VR / AR', 'Portfolio']
