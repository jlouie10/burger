// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $('#order-burger').on('submit', (event) => {
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
});
