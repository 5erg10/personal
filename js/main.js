
$(document).ready(function(){
});

	document.body.style.zoom="80%"

	var scaleIn = new Bounce();
	scaleIn
		.scale({
		  from: { x: 1, y: 1 },
		  to: { x: 1.2, y: 1.2 },
		  easing: "bounce",
		}).rotate({
		  from: 0,
		  to: 6,
		  easing: "bounce",
		});

	var scaleOut = new Bounce();
	scaleOut
		.scale({
		  from: { x: 1.2, y: 1.2 },
		  to: { x: 1, y: 1 },
		  easing: "bounce",
		}).rotate({
		  from: 6,
		  to: 0,
		  easing: "bounce",
		});

	var translateLeftIn = new Bounce();
	translateLeftIn
		.translate({
		    from: { x: -300, y: 0 },
		    to: { x: 10, y: 0 },
		    duration: 1500,
    		stiffness: 5
		  });	

	var translateLeftOut = new Bounce();
	translateLeftOut
		.translate({
		    from: { x: 10, y: 0 },
		    to: { x: -300, y: 0 },
		    duration: 1500,
    		stiffness: 5
		  });	

	var translateRightIn = new Bounce();
	translateRightIn
		.translate({
		    from: { x: 500, y: 0 },
		    to: { x: 0, y: 0 },
		    duration: 1500,
    		stiffness: 5
		  });	

	var translateRightOut = new Bounce();
	translateRightOut
		.translate({
		    from: { x: 0, y: 0 },
		    to: { x: 500, y: 0 },
		    duration: 1500,
    		stiffness: 5
		  });		

	$('#grid').masonry({
	  // options...
	  itemSelector: '.grid-item',
	  columnWidth: 200
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