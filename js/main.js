
$(document).ready(function(){
});
	var scaleIn = new Bounce();
	scaleIn
		.scale({
		  from: { x: 1.03, y: 1.03 },
		  to: { x: 1.2, y: 1.2 },
		  easing: "bounce",
		  stiffness: 1,
		  bounces: 0
		})
		/*.rotate({
		  from: 0,
		  to: 6,
		  easing: "bounce",
		});*/

	var scaleOut = new Bounce();
	scaleOut
		.scale({
		  from: { x: 1.2, y: 1.2 },
		  to: { x: 1.03, y: 1.03 },
		  easing: "bounce",
		  stiffness: 1,
		  bounces: 0
		})
		/*.rotate({
		  from: 6,
		  to: 0,
		  easing: "bounce",
		});*/

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

    /*new AnimOnScroll( document.getElementById( 'grid' ), {
		minDuration : 0.4,
		maxDuration : 0.7,
		viewportFactor : 0.2
	} );*/

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
