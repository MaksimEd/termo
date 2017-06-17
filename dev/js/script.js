$(document).ready(function () {

	"use strict";
	$(window).scroll(function(){
	    if ($(window).scrollTop() > 0) {
	        $('.navbar-default').addClass('fixed');
	    }
	    else {
	        $('.navbar-default').removeClass('fixed')
	    }
	});
	$('.main__advantages_btn').click(function(){
		$(this).next().fadeToggle('slow');
		$(this).hide();
	});
	$(".menu").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.our-panels-look__color_view').click(function(){
		$(this).parent().find('.active').removeClass('active');
		$(this).addClass('active');
	});


/* калькулятор №1*/
	$('#comparison-thermopanels .calc input[type=text]').on('keyup', function(){
		ct_price();
	});

	$('#comparison-thermopanels .calc select').change(function(){
		var option = $(this).find('option:selected').val();
		$(this).parents().find('[id^=icon-ct-]').fadeOut(0);
		$(this).parents().find('[id=icon-ct-'+option+']').fadeIn(0);
		ct_price();
	});	
	$('#comparison-thermopanels').find('[id^=icon-ct-]').fadeOut(0);
	$('#comparison-thermopanels').find('[id=icon-ct-1]').fadeIn(0);

	function ct_price(){
		var n = 0, c = 0, b = 0, a = 0, S = 0, price = [], price_dop = 0, price_i = 0 ;
		n = $('#comparison-thermopanels .calc select').find('option:selected').val();
		c = $('input[name=length-premise]').val();	b = $('input[name=width-premise]').val(); a = $('input[name=height-premise]').val();
		S = 2*a*b+2*a*c;
		price[0] = 0;
		if(n == 1){ price[1] = 1116; price[2] = 920; price[3] = 1800; $('#res__title_red_text').text('кирпчом'); }
		else if(n == 2){ price[1] = 450; price[2] = 1110; price[3] = 450; $('#res__title_red_text').text('фасадной штукатуркой'); }
		else if(n == 3){ price[1] = 200; price[2] = 950; price[3] = 350; $('#res__title_red_text').text('сайдингом'); }
		else if(n == 4){ price[1] = 800; price[2] = 2100; price[3] = 360; $('#res__title_red_text').text('сэндвич - панелью'); }
		else if(n == 5){ price[1] = 1950; price[2] = 500; price[3] = 0; $('#res__title_red_text').text('термопанелими на основе полеэстерола (ЭППС)'); }
			
		$('#res__li_p_1').text(price[1]+' руб.'); 
		$('#res__li_p_2').text(price[2]+' руб.'); 
		$('#res__li_p_3').text(price[3]+' руб.');  

		for (var i = 1; i <= 3; i++) {
			price[0] = price[0] + price[i];
		}
		$('.res__title_green').text(S*(1950+500)+' руб.');	
		$('.res__title_red').text(S*price[0]+' руб.');	
		$('#price_econom').text((S*price[0])-S*(1950+500)+ ' руб.');
	}
/*----------------------------------------------*/

/* калькулятор №2*/

	
	$('.calculate-cost-cladding__block-2').find('label').each(function(){
		var bg= $(this).data('bg-url');
		$(this).css('background-image', 'url('+bg+')');
	});

	$('.calculate-cost-cladding__block-2 .panel-group input').click(function(){//когда нажимает на выбор термопанелей
		var name = $(this).attr('name');
		var bg_url = $(this).next().data('bg-url');
		if(name == 'calc-cost1'){
			$('#calc-cost-ground').css('background-image', 'url('+bg_url+')');
		}
		if(name == 'calc-cost2'){
			$('#calc-cost-first-floor').css('background-image', 'url('+bg_url+')');
			$('#calc-cost-first-floor1').css('background-image', 'url('+bg_url+')');
		}
		if(name == 'calc-cost3'){
			$('#calc-cost-second-floor').css('background-image', 'url('+bg_url+')');
		}
		if(name == 'calc-cost4'){
			$('#calc-cost-decoration').css('background-image', 'url('+bg_url+')');
			$('#calc-cost-decoration1').css('background-image', 'url('+bg_url+')');
			$('#calc-cost-decoration2').css('background-image', 'url('+bg_url+')');
			$('#calc-cost-decoration3').css('background-image', 'url('+bg_url+')');
		}
		if(name == 'calc-cost5'){
			$('#calc-cost-chimney').css('background-image', 'url('+bg_url+')');
		}
	});

	$('.calculate-cost-cladding__block-2 .panel-group input[name=area1]').on('keyup', function(){
		var area = 0,  price = 1950, area_s = '';
		$('.calculate-cost-cladding__block-2 .panel-group input[name=area1]').each(function(i){
			area = area + Number($(this).val());
			switch(i){
				case 0: 	
					area_s = area_s + 'Площадь цокольного этажа: '+Number($(this).val())+';';
					break;
				case 1:
					area_s = area_s + ' Площадь первого этажа: '+Number($(this).val())+';';
					break;
				case 2: 	
					area_s = area_s + ' Площадь второго этажа: '+Number($(this).val())+';';
					break;
				case 3: 
					area_s = area_s + ' Площадь декора: '+Number($(this).val())+';';
					break;
				case 4: 
					area_s = area_s + ' Площадь дымохода: '+Number($(this).val())+';';
					break;
			}
			$('.calculate-cost-cladding__block-2 input[name=area]').val(area_s);
		});	
		$('#price-calc-cost').text(price*area+' руб.');
	});


	$('#calculate-cost-cladding select').change(function(){
		var data_option = $(this).find('option:selected').data('option');

		$(this).parents(".panel-body").find('div[data-option]').fadeOut(0);
		$(this).parents(".panel-body").find('div[data-option='+data_option+']').fadeIn(0);
	});	
	$('#calculate-cost-cladding').find('div[data-option]').fadeOut(0);
	$('#calculate-cost-cladding').find('div[data-option=1]').fadeIn(0);



	$('#colorpicker').farbtastic('#roof-color');
	$('body').on('click', '.farbtastic, .farbtastic *', function() {
		changeRoofColor();
	});
	function changeRoofColor() {
		var color = $('#roof-color').val();
		$('#calc-cost-roof').css("background-color", color);
	}
/*-------------------------------------------------*/

	$('#houses-thermo-panels-slider').slick({
		arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-prev'></button>",
        nextArrow:"<button type='button' class='slick-next pull-next'></button>",
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    arrows: false
		  }
		}]
	});

	$('#thermopanels-certified-slider').slick({
		arrows: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
		  breakpoint: 1225,
		  settings: {
		    slidesToShow: 3
		  }
		},
		{
		  breakpoint: 1024,
		  settings: {
		    arrows: false,
		    slidesToShow: 2
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    arrows: false,
		    slidesToShow: 1
		  }
		}]
	});

	$('.houses-thermo-panels-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.houses-thermo-panels-slider-nav'
	});

	$('.houses-thermo-panels-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,		
		focusOnSelect: true,
		asNavFor: '.houses-thermo-panels-slider-for',
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 2
		  }
		},
		{
		  breakpoint: 1023,
		  settings: {
		    slidesToShow: 3
		  }
		}
		]
	});


	$('#our-production-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '#our-production-slider-nav'
	});

	$('#our-production-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,		
		arrows: false,
		focusOnSelect: true,
		asNavFor: '#our-production-slider-for',
		responsive: [
		{
		  breakpoint: 480,
		  settings: {
		    arrows: false,
		    slidesToShow: 1,
		  }
		}]
	});

	$('.styler').styler();
    $(document).on("focus", "[name=phone]", function() {
        $(this).mask("+7(999)999-99-99");	
    });

		var map;
		var mapCoordinates = new google.maps.LatLng(55.6966234,37.5478578);

		var markers = [ 'г. Москва, Университетский пр-т, д.9, оф.100',55.6966234,37.5478578];
		var image = new google.maps.MarkerImage( 'img/metka.png', new google.maps.Size(23,32),
		  new google.maps.Point(0,0),
		  new google.maps.Point(23,32)
		);
		  

		function addMarker()
		{		
			   new google.maps.Marker({
							title: markers[0],
							position: new google.maps.LatLng(markers[1],markers[2]),
							raiseOnDrag: false,
							icon: image,
							map: map,
							draggable: false
							});
 
		}
			
		function initialize()
		{
			var mapOptions = {
				zoom: 16,
				scrollwheel: false,
				center: mapCoordinates,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
			};
			map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
			
			addMarker();  
			
			
			// Centered on resize
			google.maps.event.addDomListener(window, 'resize', function() {
			
			// Drop to start zoom/pos
			  map.setCenter(mapCoordinates);
			  map.setZoom(11);
			});
		}
		
				
		google.maps.event.addDomListener(window, 'load', initialize);
		

  $('#Modal-form').on('show.bs.modal', function (target1) {
      var button = target1.relatedTarget;
      var title = $(button).attr("data-title");
      var submit = $(button).attr("data-submit");
      var target = $(button).attr("data-targets");
      $('#Modal-form input').css('border', '1px solid #a7a4a1');
      $('#Modal-form .modal-title').text(title);
      $('#Modal-form [class=btn]').text(submit);
      $('#Modal-form input[name=valToSend]').val(title);
      $('#Modal-form input[name=target]').val(target);
  });

	$("form").submit(function() {
		var formthis = this;
		var phone = $(this).find('input[name=phone]').val();
		$(this).find('[requireds]').each(function(){//проверка, что бы были заполнены поля
		  if($.trim($(this).val()) == '' && $(this).attr('type') != 'hidden' || phone == 'Телефон' || phone == '+7(___)___-__-__')
		  {
		    $(this).css('border','1px solid red');
		    $(this).next().css('display','block')
		    return 0;
		  }
		});
		$.ajax({
		  type: "POST",
		  url: "submit.php",
		  data: $(this).serialize(),
		  success: function(data) {
		    switch(data) {
		      case '1': 
		        //$(formthis).find('.btn').html('Сообщение отправлено!'); 

		       	//var target = $(formthis).find('input[name=target]').val();
				//yaCounter44665213.reachGoal('targetAll');
				//yaCounter44665213.reachGoal('target' + target);
				//ga('send', 'event','button','click','target' + target);

				$(formthis).find('input[type="text"]').each(function(){ $(this).val(""); $(this).css('border','1px solid #d5dbe3'); });
				$(formthis).find('input[type="tel"]').each(function(){ $(this).val(""); $(this).css('border','1px solid #d5dbe3'); });
		      	$(formthis).trigger("reset"); 
		      	$('#Modal-form-header').modal('hide');   
		      	$('#Modal-form').modal('hide');   
		      	setTimeout(function(){ $('#Modal-form-thanks').modal('show'); }, 500);   
		      break;
		      case '2': 
		        $(formthis).find('.btn').html('Заполните все поля!');
		      break;
		      case '3': 
		        $(formthis).find('.btn').html('Ошибка при отправке!');
		      break;
		      default: 
		        $(formthis).find('.btn').html('Ошибка!');
		      break;
		    }
		  },
		  error: function() {
		    alert('Ошибка');
		  }
		});  
		return false;
	});
	

});