function selectButton(buttonIndex) {
    var buttons = document.querySelectorAll('.button-grp button');

    buttons.forEach(function (button, index) {
        if (index + 1 === buttonIndex) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}