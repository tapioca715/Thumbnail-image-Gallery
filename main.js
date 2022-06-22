$(function () {
    
    $('.img-thumb li').click(function () {
        var thisSrc = $(this).children().attr('src');
        // this 부모 li 중 사용자가 클릭한 li
        $('.main-image img').attr('src', thisSrc);
    });
});
