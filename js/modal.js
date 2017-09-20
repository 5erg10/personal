// ------  MODAL CONTROLLER -------
angular.module('plunker', ['ui.bootstrap']);

var ModalCtrl = function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
	$scope.open2 = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent2.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
  $scope.open3 = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent3.html',
      controller: ModalInstanceCtrl,
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
};
var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
//-----------CAROUSEL CONTROLLER ------------------
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
}
//----------	LOADING GIF	--------------------
$('#abrir1').click(function(){
	setTimeout(function(){
		$('.contentmio2').addClass("del");
	},8000);
});
$('#abrir2').click(function(){
	setTimeout(function(){
		$('.contentmio').addClass("del");
	},8000);
});
//-------CONTROLADORES APTITUDES------->
	$('#cargarap').click(function() {
					var javascript = document.querySelector('.javascript');
					new EasyPieChart(javascript, {
						animate: ({ duration: 5000, enabled: true }),
						scaleLength: 0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#6E6E6E',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var html5 = document.querySelector('.html5');
					new EasyPieChart(html5, {
						animate: ({ duration: 4000, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#848484',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var css = document.querySelector('.css');
					new EasyPieChart(css, {
						animate: ({ duration: 3500, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#585858',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var php = document.querySelector('.php');
					new EasyPieChart(php, {
						animate: ({ duration: 5000, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#2E2E2E',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var Mysql = document.querySelector('.Mysql');
					new EasyPieChart(Mysql, {
						animate: ({ duration: 4000, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#424242',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var wordpress = document.querySelector('.wordpress');
					new EasyPieChart(wordpress, {
						animate: ({ duration: 6000, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#2E2E2E',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var joomla = document.querySelector('.joomla');
					new EasyPieChart(joomla, {
						animate: ({ duration: 5000, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#585858',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var magento = document.querySelector('.magento');
					new EasyPieChart(magento, {
						animate: ({ duration: 6500, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#6E6E6E',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var prestashop = document.querySelector('.prestashop');
					new EasyPieChart(prestashop, {
						animate: ({ duration: 5000, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#848484',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
					var seo = document.querySelector('.seo');
					new EasyPieChart(seo, {
						animate: ({ duration: 5500, enabled: true }),
						scaleLength:0,
						lineCap: 'plane',
						size:150,
						lineWidth: 25,
						barColor:'#424242',
						onStep: function(from, to, percent) {
							this.el.children[0].innerHTML = Math.round(percent);
						}
					});
				})			
//------------------   FORMULARIO ENVIO -----------------		
$(document).ready(function(){
				$("#myForm").submit(function(e){
							e.preventDefault();
							var t=$(this).attr("action");
							var n=$(this).serialize();
							$.ajax({
								type:"POST",
								url:t,
								data:n,
								beforeSend:mostrarLoader,
								success:mostrarRespuesta
								});
						});
			})
				
function mostrarLoader(){
			$("#loader_gif").fadeIn("slow");
			};

function mostrarRespuesta(){
			$("#dialog").dialog({
							width:200,
							height:75,
							show:"scale",
							hide:"scale",
							resizable:"false",
							position:"center"
						});
					$("#loader_gif").fadeOut("slow");
					setTimeout('$("#dialog").dialog("close");',2000);
					$("#nombre").val(" ");
					$("#email").val(" ");
					$("#consulta").val(" ");
					$("#empresa").val(" ")
			}
//-----------	FIN FORMULARIO ENVIO	-------------
//---------MENU PROYECTOS -------------------	
$(function() {
				var $menu				= $('#ei_menu > ul'),
					$menuItems			= $menu.children('li'),
					$menuItemsImgWrapper= $menuItems.children('a'),
					$menuItemsPreview	= $menuItemsImgWrapper.children('.ei_preview'),
					totalMenuItems		= $menuItems.length,
				
					ExpandingMenu 	= (function(){
						/*
							@current
							set it to the index of the element you want to be opened by default,
							or -1 if you want the menu to be closed initially
						 */
						var current				= -1,
						/*
							@anim
							if we want the default opened item to animate initialy set this to true
						 */
						anim				= true,
						/*
							checks if the current value is valid -
							between 0 and the number of items
						 */
						validCurrent		= function() {
							return (current >= 0 && current < totalMenuItems);
						},
						init				= function() {
								/* show default item if current is set to a valid index */
							if(validCurrent())
								configureMenu();

							initEventsHandler();
						},
						configureMenu		= function() {
								/* get the item for the current */
							var $item	= $menuItems.eq(current);
								/* if anim is true slide out the item */
							if(anim)
								slideOutItem($item, true, 900, 'easeInQuint');
							else{
									/* if not just show it */
								$item.css({width : '600px'})
								.find('.ei_image')
								.css({left:'0px', opacity:1});

									/* decrease the opacity of the others */
									$menuItems.not($item)
											  .children('.ei_preview')
											  .css({opacity:0.2});
							}
						},
						initEventsHandler	= function() {
								/*
								when we click an item the following can happen:
								1) The item is already opened - close it!
								2) The item is closed - open it! (if another one is opened, close it!)
								*/
							$menuItemsImgWrapper.bind('click.ExpandingMenu', function(e) {
								var $this 	= $(this).parent(),
								idx		= $this.index();

								if(current === idx) {
									slideOutItem($menuItems.eq(current), false, 1500, 'easeOutQuint', true);
									current = -1;
								}
								else{
									if(validCurrent() && current !== idx)
											slideOutItem($menuItems.eq(current), false, 250, 'jswing');

									current	= idx;
										slideOutItem($this, true, 250, 'jswing');
								}
								return false;
							});
						},
							/* if you want to trigger the action to open a specific item */
							openItem			= function(idx) {
								$menuItemsImgWrapper.eq(idx).click();
							},
							/*
							opens or closes an item
							note that "mLeave" is just true when all the items close,
							in which case we want that all of them get opacity 1 again.
							"dir" tells us if we are opening or closing an item (true | false)
							*/
						slideOutItem		= function($item, dir, speed, easing, mLeave) {
							var $ei_image	= $item.find('.ei_image'),

							itemParam	= (dir) ? {width : '710px'} : {width : '110px'},
							imageParam	= (dir) ? {left : '0px'} : {left : '110px'};

								/*
								if opening, we animate the opacity of all the elements to 0.1.
								this is to give focus on the opened item..
								*/
							if(dir)
							/*
									alternative:
									$menuItemsPreview.not($menuItemsPreview.eq(current))
													 .stop()
													 .animate({opacity:0.1}, 500);
							 */
								$menuItemsPreview.stop()
							.animate({opacity:0.1}, 1000);
							else if(mLeave)
								$menuItemsPreview.stop()
							.animate({opacity:1}, 1500);

								/* the <li> expands or collapses */
							$item.stop().animate(itemParam, speed, easing);
								/* the image (color) slides in or out */
							$ei_image.stop().animate(imageParam, speed, easing, function() {
									/*
									if opening, we animate the opacity to 1,
									otherwise we reset it.
									*/
								if(dir)
									$ei_image.animate({opacity:1}, 2000);
								else
									$ei_image.css('opacity', 0.2);
							});
						};

						return {
							init 		: init,
							openItem	: openItem
						};
					})();
					
				/*
				call the init method of ExpandingMenu
				*/
				ExpandingMenu.init();
			
				/*
				if later on you want to open / close a specific item you could do it like so:
				ExpandingMenu.openItem(3); // toggles item 3 (zero-based indexing)
				*/
			});
			
//-------------------------		FIN MENU PROYECTOS 	-------------------------------------//			
			
$("#abrirmodal").click(function(){
  $("#modal").removeClass("modalmask");
  $("#modal").addClass("modalmaskv");
  $("#contenido").removeClass("modalbox");
  $("#contenido").addClass("modalboxv");
  
});
$("#abrirmodal2").click(function(){
  $("#modal2").removeClass("modalmask");
  $("#modal2").addClass("modalmaskv");
  $("#contenido2").removeClass("modalbox");
  $("#contenido2").addClass("modalboxv");
  
});
$("#abrirmodal3").click(function(){
  $("#modal3").removeClass("modalmask");
  $("#modal3").addClass("modalmaskv");
  $("#contenido3").removeClass("modalbox");
  $("#contenido3").addClass("modalboxv");
  
});
$("#cerrar").click(function(){
  $("#modal").removeClass("modalmaskv");
  $("#modal").addClass("modalmask");
  $("#contenido").removeClass("modalboxv");
  $("#contenido").addClass("modalbox");
  
});
$("#cerrar2").click(function(){
  $("#modal2").removeClass("modalmaskv");
  $("#modal2").addClass("modalmask");
  $("#contenido2").removeClass("modalboxv");
  $("#contenido2").addClass("modalbox");
  
});
$("#cerrar3").click(function(){
  $("#modal3").removeClass("modalmaskv");
  $("#modal3").addClass("modalmask");
  $("#contenido3").removeClass("modalboxv");
  $("#contenido3").addClass("modalbox");
  
});
	