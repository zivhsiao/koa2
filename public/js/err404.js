function verticalAlignMiddle()
{
    var bodyHeight = $(window).height();
    var formHeight = $('.vamiddle').height();
    var marginTop = (bodyHeight / 2) - (formHeight / 2);
    if (marginTop > 0)
    {
        $('.vamiddle').css('margin-top', marginTop);
    }
}
$(document).ready(function()
{
    verticalAlignMiddle();
});
$(window).bind('resize', verticalAlignMiddle);