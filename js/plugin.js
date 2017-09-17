$(document).ready(function(){
	"use strict"
	/*start header*/
	 if($(window).height() > 750){
$("header, .mobile, .web, .desktop,.team,.map,.contact").height($(window).height()/2);}
else{
	$("header, .mobile, .web, .desktop,.team,.map,.contact").height($(window).height());
}

    $(window).resize(function(){
		if($(window).height() > 750){
        $("header,.mobile , .web, .desktop, .team,.map,.contact").height($(window).height()/2);
		}
		else{
			$("header, .mobile, .web, .desktop,.team,.map,.contact").height($(window).height());
		}
		});
	/*end header*/
	
	/*smoth scroll*/
	 $(".nav li a").click(function(){
        
       $('html, body').animate(
        {
           scrollTop: $('#' + $(this).data('value')).offset().top

       },1000); 
        
    });
	 $(".arrow a").click(function(){
        
       $('html, body').animate(
        {
           scrollTop: $('#' + $(this).data('value')).offset().top

       },1000); 
        
    });
	
	
	
//slider
	$('.carousel').carousel()
	
	if ($(window).width() > 565) {
		
			$(".regular").slick({
			dots: true,
			infinite: true,
			slidesToShow:3,
			slidesToScroll: 1,
			autoplay:0,
			autoplaySpeed:3e3});
	}
	else if($(window).width() > 400){
		$(".regular").slick({
			dots: true,
			infinite: true,
			slidesToShow:2,
			slidesToScroll: 1,
			autoplay:0,
			autoplaySpeed:3e3});
	}
	else{
		$(".regular").slick({
			dots: true,
			infinite: true,
			slidesToShow:1,
			slidesToScroll: 1,
			autoplay:0,
			autoplaySpeed:3e3});
	}
//self invok
	/*(function autoRotate(){
       
           
           $('.arrow div').click(function(){
           if($(this).hasClass('nonClicked')){
			   $(this).removeClass('nonClicked').addClass('clicable');
               
               
               } else {
                    $(this).removeClass('clicable').addClass('nonClicked');
               }
      
        });
    }());*/
    
});