function showMessage() {
    const daySelect = document.getElementById('daySelect');
    const message = document.getElementById('message');
    const day = daySelect.value;

    switch (day) {
        case '1':
            message.textContent = "It's Monday! Start of a new week!";
            break;
        case '2':
            message.textContent = "It's Tuesday! Keep going!";
            break;
        case '3':
            message.textContent = "It's Wednesday! Midweek already!";
            break;
        case '4':
            message.textContent = "It's Thursday! Almost there!";
            break;
        case '5':
            message.textContent = "It's Friday! The weekend is near!";
            break;
        case '6':
            message.textContent = "It's Saturday! Enjoy your day!";
            break;
        case '7':
            message.textContent = "It's Sunday! Relax and recharge!";
            break;
        default:
            message.textContent = "Please select a day.";
    }
}
