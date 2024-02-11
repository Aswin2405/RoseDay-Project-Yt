const sendRoseButton = document.getElementById('send-rose');
const shareMessageButton = document.getElementById('share-message');

sendRoseButton.addEventListener('click', () => {
    const roseImage = document.querySelector('.rose-image img');
    roseImage.classList.add('animated-rose');
    setTimeout(() => {
        roseImage.classList.remove('animated-rose');
    }, 1000);
    alert("You sent a virtual rose!");
});

shareMessageButton.addEventListener('click', () => {
    if (navigator.share) {
        navigator.share({
            title: 'Happy Rose Day!',
            text: 'Let love bloom like a beautiful rose. May this day bring joy, happiness, and romance into your life.',
            url: window.location.href
        }).then(() => {
            console.log('Message shared successfully');
        }).catch((error) => {
            console.error('Error sharing message:', error);
        });
    } else {
        alert("This message is ready to be shared!");
    }
});