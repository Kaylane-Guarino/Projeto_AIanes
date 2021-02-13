$(document).ready(function(){
    var num = 150;
                
    $(window).bind('scroll', function(){
        if($(window).scrollTop()>num){
            $('.containerMenu').addClass('fixed');
            $('#menu > li').addClass('tc-white');
            $('#trocaFigure').attr('src','imagens/logomarca2.png');
            $('.link').addClass('color');
            $('.itemSubmenu').addClass('colorSubmenu');
        }
        else{
            $('.containerMenu').removeClass('fixed');
            $('#menu > li').removeClass('tc-white');
            $('#trocaFigure').attr('src','imagens/logomarca.png');
            $('.link').removeClass('color');
            $('.itemSubmenu').removeClass('colorSubmenu');
        }
    });

    

});

