export function toggleSearchForm(){
    $('.icon-container-search').click(function(){
        $('.search-form').css('display','flex')
    })
    $('.search-form-close').click(function(){
        $('.search-form').css('display','none')
    })

}
