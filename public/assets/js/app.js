$(() => {
    $('#order-burger').on('submit', event => {
        event.preventDefault();

        let order = {
            burger_name: $('#burger').val().trim()
        };

        // Create burger using POST request
        $.post('/api/burgers', order)
            .then(() => {
                location.reload();
            });
    });

    $('.devour').on('click', function (event) {
        let id = $(this).data('id');
        let devourRequest = {
            devoured: 1
        };

        // Update burger state using PUT request
        $.ajax('/api/burgers/' + id, {
            type: 'PATCH',
            data: devourRequest
        }).then(() => {
            location.reload();
        });
    });
});