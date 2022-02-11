$(function () {

    // Фильтр
    $('[data-filter]').on('click', function () {
        let filter = $(this).data('filter');
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        if (filter == 'all') {
            $('[data-cat]').parent().removeClass('hide');
        } else {
            $('[data-cat]').each(function () {
                let cat = $(this).data('cat');
                if (filter != cat) {
                    $(this).parent().addClass('hide');
                } else {
                    $(this).parent().removeClass('hide');
                }
            });
        }
    });

});