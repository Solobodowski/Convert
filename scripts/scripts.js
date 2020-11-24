$(document).ready(function(){

    if ($(window).width() > 850)
    {
        getTallestHeaderHeight('.products__itemTitle');
        getTallestHeaderHeight('.products__itemSubtitle');
    }

    function getTallestHeaderHeight(itemElement) {
         let max = 0;
        $(itemElement).each(function(){
            if ($(this).innerHeight() > max)
                max = $(this).innerHeight();
        })
        $(itemElement).css('min-height', max);
     

    }
});