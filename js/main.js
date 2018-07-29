document.body.style.zoom="80%";
	// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
	$( "#header" ).hide();
	$( ".homeTittle" ).css("font-size", "18px");
	$( ".grid-item" ).css("width", "400px");
}

else{
	$( "#deviceMenu" ).hide();
}	

var tecnologiaConsultada;

var scaleIn = new Bounce();
scaleIn
	.scale({
	  from: { x: 1.03, y: 1.03 },
	  to: { x: 1.2, y: 1.2 },
	  easing: "bounce",
	  stiffness: 1,
	  bounces: 0
	})
	.rotate({
	  from: 0,
	  to: 3,
	  easing: "bounce",
	  bounces: 0
	});

var scaleOut = new Bounce();
scaleOut
	.scale({
	  from: { x: 1.2, y: 1.2 },
	  to: { x: 1.03, y: 1.03 },
	  easing: "bounce",
	  stiffness: 1,
	  bounces: 0
	})
	.rotate({
	  from: 3,
	  to: 0,
	  easing: "bounce",
	  bounces: 0
	});

var translateLeftIn = new Bounce();
translateLeftIn
	.translate({
	    from: { x: -300, y: 0 },
	    to: { x: 10, y: 0 },
	    duration: 1500,
		stiffness: 5,
	  	bounces: 0
	  });	

var translateLeftOut = new Bounce();
translateLeftOut
	.translate({
	    from: { x: 10, y: 0 },
	    to: { x: -300, y: 0 },
	    duration: 1500,
		stiffness: 5,
	  	bounces: 0
	  });	

var translateRightIn = new Bounce();
translateRightIn
	.translate({
	    from: { x: 500, y: 0 },
	    to: { x: 0, y: 0 },
	    duration: 1500,
		stiffness: 5,
	  	bounces: 0
	  });	

var translateRightOut = new Bounce();
translateRightOut
	.translate({
	    from: { x: 0, y: 0 },
	    to: { x: 500, y: 0 },
	    duration: 1500,
		stiffness: 5,
	  	bounces: 0
	  });		

var $grid = $('.grid').imagesLoaded( function() {
	$grid.masonry({
	    itemSelector: '.grid-item',
		gutter: 10,
		columnWidth: 200
	});
});

$(".grid-item").mouseenter(function(){
     console.log($(this).children('div'));
     $(this).find('.gridElementOver').addClass( "gridElementOverActive" );
     scaleIn.applyTo($(this).find('img'));
     translateLeftIn.applyTo($(this).find('.glridElementOverText'));
     translateRightIn.applyTo($(this).find('.glridElementOverTextDesc'));
 });
$(".grid-item").mouseleave(function(){
     console.log($(this).children('div'));
     $(this).find('.gridElementOver').removeClass( "gridElementOverActive" );
     scaleOut.applyTo($(this).find('img'));
     translateLeftOut.applyTo($(this).find('.glridElementOverText'));
     translateRightOut.applyTo($(this).find('.glridElementOverTextDesc'));
 });

// -----  CONTACT FORM -----

function resizeInput() {
    $(this).attr('size', $(this).val().length);
}

$('input[type="text"], input[type="email"]')
    // event handler
    .keyup(resizeInput)
    // resize on page load
    .each(resizeInput);


//console.clear();
// Adapted from georgepapadakis.me/demo/expanding-textarea.html
(function(){
  
  var textareas = document.querySelectorAll('.expanding'),
      
      resize = function(t) {
        t.style.height = 'auto';
        t.style.overflow = 'hidden'; // Ensure scrollbar doesn't interfere with the true height of the text.
        t.style.height = (t.scrollHeight + t.offset ) + 'px';
        t.style.overflow = '';
      },
      
      attachResize = function(t) {
        if ( t ) {
          console.log('t.className',t.className);
          t.offset = !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width')));

          resize(t);

          if ( t.addEventListener ) {
            t.addEventListener('input', function() { resize(t); });
            t.addEventListener('mouseup', function() { resize(t); }); // set height after user resize
          }

          t['attachEvent'] && t.attachEvent('onkeyup', function() { resize(t); });
        }
      };
  
  // IE7 support
  if ( !document.querySelectorAll ) {
  
    function getElementsByClass(searchClass,node,tag) {
      var classElements = new Array();
      node = node || document;
      tag = tag || '*';
      var els = node.getElementsByTagName(tag);
      var elsLen = els.length;
      var pattern = new RegExp("(^|\\s)"+searchClass+"(\\s|$)");
      for (i = 0, j = 0; i < elsLen; i++) {
        if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
        }
      }
      return classElements;
    }
    
    textareas = getElementsByClass('expanding');
  }
  
  for (var i = 0; i < textareas.length; i++ ) {
    attachResize(textareas[i]);
  }
  
})();

var scopesGm =
  'https://www.googleapis.com/auth/gmail.readonly '+
  'https://www.googleapis.com/auth/gmail.send';

var clientIDGm = "703997343375-haevo6eg6ftu0t0qd71cvrnq7s0vmtp7.apps.googleusercontent.com";

var clientSecretGm = "zCg0Z7fzQwH5iPznHoPawAB3";

function composeTidy()
{
  /*$('#compose-modal').modal('hide');

  $('#compose-to').val('');
  $('#compose-subject').val('');
  $('#compose-message').val('');

  $('#send-button').removeClass('disabled');*/
}

/*function sendMessage(headers_obj, message, callback)
{
  var email = '';

  for(var header in headers_obj)
    email += header += ": "+headers_obj[header]+"\r\n";

  email += "\r\n" + message;

  var sendRequest = gapi.client.gmail.users.messages.send({
    'userId': '703997343375-haevo6eg6ftu0t0qd71cvrnq7s0vmtp7.apps.googleusercontent.com',
    'resource': {
      'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
    }
  });

  return sendRequest.execute(callback);
}

$(".formButton").on("click", function(event){
	console.log("boton clickado", event);
	sendMessage(
	    {
	      'To': "laramona@gmailto.com",
	      'Subject': "soy sexy"
	    },
	    "aque soy sexy ah?",
	    composeTidy
    )
})

$("#contact-form").submit(function(event){
	console.log(event);
});*/

//----------- Chat logic ----------

$(".messages").animate({ scrollTop: $(document).height() }, "fast");

$("#profile-img").click(function() {
	$("#status-options").toggleClass("active");
});

$(".expand-button").click(function() {
  $("#profile").toggleClass("expanded");
	$("#contacts").toggleClass("expanded");
});

$("#status-options ul li").click(function() {
	$("#profile-img").removeClass();
	$("#status-online").removeClass("active");
	$("#status-away").removeClass("active");
	$("#status-busy").removeClass("active");
	$("#status-offline").removeClass("active");
	$(this).addClass("active");
	
	if($("#status-online").hasClass("active")) {
		$("#profile-img").addClass("online");
	} else if ($("#status-away").hasClass("active")) {
		$("#profile-img").addClass("away");
	} else if ($("#status-busy").hasClass("active")) {
		$("#profile-img").addClass("busy");
	} else if ($("#status-offline").hasClass("active")) {
		$("#profile-img").addClass("offline");
	} else {
		$("#profile-img").removeClass();
	};
	
	$("#status-options").removeClass("active");
});

function getMoment(hour){
	var currentMoment = "";
	if ( hour > 4 && hour < 15 ) currentMoment = "Buenos dias";
	else if ( hour >= 15 && hour < 20 ) currentMoment = "Buenas tardes";
	else currentMoment = "Buenas noches";

	return currentMoment;
}

function answerMessage(){

	$('<li class="replies"><img src="images/serImg.png" alt="" /><p>' + ".  .  ." + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.contact.active .preview').html('<span>You: </span>' + ". . .");
	$(".messages").animate({ scrollTop: $(document).height() }, "fast");
	
}

function newMessage() {
	message = $(".message-input input").val();
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

function languageProcessing(textToProcess){
	$.ajax({
		  url: 'https://api.wit.ai/message',
		  data: {
		    'q': textToProcess,
		    'access_token' : 'IZFJGGKXCYK7ZZMHWV35WRW2777JWWLH'
		  },
		  dataType: 'jsonp',
		  method: 'GET',
		  success: function(response) {
		  	console.log("response: ", response);
		  	console.log(new Date().getHours())
		  	if( response.entities.intent ) { 
		  		console.log("intencion: ",response.entities.intent[0].value);
		  		if(response.entities.tec_type) tecnologiaConsultada = response.entities.tec_type[0].value;
			  	switch(response.entities.intent[0].value) {
			  		case 'saludo':
				   			$(".messages ul li:last-child p").html(getMoment(new Date().getHours()) + ", ¿tienes una pregunta para mi?");
				        break;  
				    case 'experiencia':
								if(tecnologiaConsultada)$(".messages ul li:last-child p").html("Seria interesante hablarte de mi experiencia en "+tecnologiaConsultada+", pero todavia estoy pensando en la mejor forma de responderte. Seguire trabajando en ello.");
								break;    
						case 'proyectos':
								if(tecnologiaConsultada)$(".messages ul li:last-child p").html("Seria interesante hablarte de mi experiencia en "+tecnologiaConsultada+", pero todavia estoy pensando en la mejor forma de responderte. Seguire trabajando en ello.");
								break;  
				    case 'opciones':
								$(".messages ul li:last-child p").html("Puedes preguntarme por la experiencia que tiene Sergio en una tecnologia concreto o por los proyectos en los que ha trabajado usando esta misma, y yo te respondere como buenamente pueda :-).");
								break;  
				    case 'despedida':
								$(".messages ul li:last-child p").html("¿nos vemos pronto?");
								break;
				    default:
				    	 	$(".messages ul li:last-child p").html("Todavia me estoy entrenando y hay algunas cosas que aún no entiendo, pero gracias a ti iré mejorando!! ;-)");	        
			  	}
			}
		  	else if( response._text.toLowerCase() == "hola" || response._text.toLowerCase() == "hola sergio" ) $(".messages ul li:last-child p").html(getMoment(new Date().getHours()) + ", ¿tienes una pregunta para mi?");
			else $(".messages ul li:last-child p").html("Todavia me estoy entrenando y hay algunas cosas que aún no entiendo, pero gracias a ti iré mejorando!! ;-)");
		}
	});
}

$('.submit').click(function() {
  newMessage();
});

$(window).on('keydown', function(e) {
  if (e.which == 13) {
    newMessage();
    return false;
  }
});
