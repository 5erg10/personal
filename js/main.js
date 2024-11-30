

import { expertise } from "../data/expertise.js";
import process from "../data/cred.js";
import { initRender } from "../js/scene.js";

let conversationStatus = 'none';
let tecnologiaConsultada = '';
let moreInfoInitialPosition = { left: 0, top: 0};
const isDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// -----  EXPERTISE PROYECTS -----

$( document ).ready(function() {
	emailjs.init(process.env.EMAIL_JS_USER);
	christmasMode();
	isDevice ? showSlideshow() : initRender();
	const projectsData = expertise.getProjects();
	projectsData.map( (project, index) => {
		$(`#grid`).append(`
			<div class="grid-item">
				<img class="resizeImage" src="${project.image}" alt="${project.title}"/>
				<div class="gridElementOver">
					<div class="glridElementWorkInProgressLabel">` + (project.inProgress ? 'Work in progress' : '') + `</div>
					<div class="glridElementOverText">${project.title}</div>
					<div class="glridElementOverTextDesc">${project.description}</div>
					<div class="gridLinks">` + 
						( project.link ? `<a href="${project.link}" target="_blanck">·Prototipo</a>` : '' ) + 
						`<a id="${project.id}" onClick="openMoreInfo('${project.id}')">+info</a>
					</div>
				</div>
			</div>
		`);
	});

	setTimeout(() => {
		$('.grid').masonry({
			// options
			itemSelector: '.grid-item',
			gutter: 10,
			fitWidth: true,
			columnWidth: 350
		});
	}, 500)
});

const getOffset = ( element ) => {
	let xposition = 0;
	let yposition = 0;
	while( element && !isNaN( element.offsetLeft ) && !isNaN( element.offsetTop ) ) {
		xposition += element.offsetLeft - element.scrollLeft + 3;
		yposition += element.offsetTop - element.scrollTop + 1;
		element = element.offsetParent;
	}
	return { top: yposition, left: xposition };
}

const christmasMode = () => {
	const d = new Date();
	const currentDate = { day: d.getDate(), month: d.getMonth() + 1 }
	if (currentDate.month === 12 && currentDate.day >= 22 || currentDate.month === 1 && currentDate.day <= 6) {
		$.getScript("https://app.embed.im/snow.js");
	}
}

const showSlideshow = () => {
	$( ".homeTittle" ).css("font-size", "18px");
	$(".cb-slideshow").css('display', 'block');
}

// -----  CONTACT FORM -----

const showEmailConfirmLabel = () => {
	$("#emailConfirmButton").addClass('show-label');
	setTimeout(() => {
		$("#emailConfirmButton").removeClass('show-label');
	}, 10000);
};

const showEmailErrorLabel = () => {
	$("#emailErrorButton").addClass('show-label');
	setTimeout(() => {
		$("#emailErrorButton").removeClass('show-label');
	}, 10000);
};

const showFormLoadingCover = () => {
	$("#loadingCover").addClass('display-form-cover');
	setTimeout(() => {
		$("#loadingCover").addClass('show-form-cover');
	}, 100);
};

const hideFormLoadingCover = () => {
	$("#loadingCover").removeClass('show-form-cover');
	setTimeout(() => {
		$("#loadingCover").removeClass('display-form-cover');
	}, 300);
};

const templateParams = (data) => {
	return {
		from_name: data.find(name => name.name === 'from_name').value,
		to_name: "sergio",
		message: data.find(name => name.name === 'message').value,
		reply_to: data.find(name => name.name === 'reply_to').value,
	}
};

const sendEmail = (userData) => {
	showFormLoadingCover();
	emailjs.send('personal_email_service', 'template_csiuckg', userData)
	.then(function(response) {
		document.getElementById('contact-form').reset();
		showEmailConfirmLabel();
		hideFormLoadingCover();
	}, function(error) {
		showEmailErrorLabel();
		hideFormLoadingCover();
	});
};

$(".formButton").on("click", function(event){
	sendEmail(templateParams($("form").serializeArray()));
})

//----------- Chat logic ----------

$(".messages").animate({ scrollTop: $(document).height() }, "fast");

function getMoment(hour){
	let currentMoment = "";
	if ( hour > 4 && hour < 15 ) currentMoment = "Buenos dias";
	else if ( hour >= 15 && hour < 20 ) currentMoment = "Buenas tardes";
	else currentMoment = "Buenas noches";

	return currentMoment;
}

const answerMessage = () => {

	$('<li class="replies"><img src="images/serImg.png" alt="" /><p>' + ".  .  ." + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + ". . .");
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
	
}

const newMessage = () => {
	const message = $(".message-input input").val();
	if($.trim(message) == '') {
		return false;
	}
	$('<li class="sent"><img src="images/anonimous.png" alt="" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + message);
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
	answerMessage();
	languageProcessing(message);
};

const getAfirmativeResponse = (lastTech) => {
	return {
		experiencia: `Estoy trabajando en la mejor forma de contarte los proyectos en los que Sergio ha trabajado relacionados con ${lastTech}. De momento, te puedo recomendar que pinches <a href="#portfolio"><b>aquí</b></a> para navegar a la sección de proyectos.`,
		saludo: '¿Que quieres preguntar?',
		none: '¿si que?'
	}[conversationStatus];
	conversationStatus = 'none';
}

const getNegativeResponse = () => {
	return {
		experiencia: `Una pena, algunos de ellos son muy interesantes`,
		saludo: 'Una pena, tenia cosas interesantes que contar',
		none: '¿no que?'
	}[conversationStatus];
	conversationStatus = 'none';
}

const languageProcessing = (textToProcess) => {
	let experiencia;
	const q = encodeURIComponent(textToProcess);
	const uri = process.env.API_URL + q;
	const auth = process.env.API_KEY;
	fetch(uri, {headers: {Authorization: auth}})
	.then(res => res.json())
	.then(response => {
		const intent = response.entities?.['intent:intents']?.[0]?.value || 'default';
		console.log(intent)
		if (response.entities?.['tect_type:tect_type']) {
			tecnologiaConsultada = response.entities['tect_type:tect_type'][0].value;
			experiencia = expertise.giveTechExperience(tecnologiaConsultada.toLowerCase());
		}
		const responseOptions = {
			saludo: getMoment(new Date().getHours()) + ", ¿tienes una pregunta para mi?",
			experiencia: `Sergio ha trabajado en ${experiencia?.numOfProjects} proyectos de ${tecnologiaConsultada} en los últimos ${experiencia?.years} años. ¿Quieres saber cuales son esos proyectos?.`,
			proyectos: `Estoy trabajando en la mejor forma de contarte los proyectos en los que Sergio ha trabajado relacionados con ${tecnologiaConsultada}. De momento, te puedo recomendar que pinches <a href="#portfolio"><b>aquí</b></a> para navegar a la sección de proyectos.`,
			opciones: "Puedes preguntarme por la experiencia que tiene Sergio en una tecnologia concreto o por los proyectos en los que ha trabajado usando esta misma, y yo te respondere como buenamente pueda :-).",
			despedida: "¿nos vemos pronto?",
			afirmacion: getAfirmativeResponse(tecnologiaConsultada),
			negacion: getNegativeResponse(tecnologiaConsultada),
			default: "Todavia me estoy entrenando y hay algunas cosas que aún no entiendo, pero gracias a ti iré mejorando!! ;-)"
		};

		$(".messages ul li:last-child p").html(responseOptions[intent]);
		conversationStatus = ['experiencia', 'saludo'].includes(intent) ? intent : 'none';
	});
}

$("#chatButton").on("click", function(e){
	newMessage()
})

$("#chatButton").on("click", function(e){
	newMessage()
})

$(window).on('keydown', function(e) {
	if (e.which == 13) {
		newMessage();
		return false;
	}
});

window.openMoreInfo = ( projectId ) => {
	moreInfoInitialPosition = getOffset( document.getElementById(projectId) );
	const projectData = expertise.getProjectById(projectId);
	const techsListLength = projectData.techs?.length - 1;
	$('body').append(`
		<div id="moreInfoBox" style="top: ${moreInfoInitialPosition.top}px; left: ${moreInfoInitialPosition.left}px;" class="moreInfoBox" onCLick="closeMoreInfo(event)">
			<div class="moreInfoFile">
				<div class="moreInfoHeader">
					<div class="techsListBox">
						<div>Techs: </div>
						<div class="techLists"></div>
					</div>
					<a id="moreInfoBoxCloseButton" onClick="closeMoreInfo(event)">X</a>
				</div>
				<div class="moreInfotitleBox">
					<div class="moreInfotitle">${projectData.title} (${projectData.year})</div>
				</div>
				<div class="moreInfoContent">
					<div class="moreInfoContentResume">${projectData.resume}</div>
					<div class="moreInfoContentVideo"></div>
					<div class="moreInfoContentImages"></div>
				</div>
			</div>
		</div>
	`);

	projectData.techs?.map((tech, i) => {
		$('.techLists').append(`<div class="techListElement">${tech.tech}${i < techsListLength ? ' ·' : ''}</div>`)
	});

	projectData.media?.images?.map(image => {
		$('.moreInfoContentImages').append(`<img alt="${image}" src="images/projects/${image}"/>`)
	});

	projectData.media?.videos?.map(videoId => {
		$('.moreInfoContentVideo').append(`<iframe allowfullscreen class="moreInfoVideo" src="https://www.youtube.com/embed/${videoId}"></iframe>`)
	});

	setTimeout(() => {
		$('.moreInfoBox').addClass('moreInfoBoxExpand');
	}, 50)
}

window.closeMoreInfo = (ev) => {
	ev.stopPropagation();
	if(ev?.target?.id) {
		$('.moreInfoBox').removeClass('moreInfoBoxExpand');
		setTimeout(() => {
			$('.moreInfoBox').remove();
		}, 50);
		moreInfoInitialPosition = { left: 0, top: 0 };
	}
}


