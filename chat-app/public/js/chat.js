const socket = io();

// Elements
const $messageForm = document.querySelector('#message-form');
const $messageFormInput = document.querySelector('input');
const $messageFormButton = document.querySelector('button');
const $sendLocationButton = document.querySelector('.send-location');
const $messages = document.querySelector('#messages');

// Templates
const messageTemplate = document.querySelector('#message-template').innerHTML;
const messageLocationTemplate = document.querySelector('#location-message-template').innerHTML;

socket.on('message', (message) => {
  const html = Mustache.render(messageTemplate, {
    message,
  });
  $messages.insertAdjacentHTML('beforeend', html);
});

socket.on('locationMessage', (url) => {
  const html = Mustache.render(messageLocationTemplate, {
    url,
  });
  $messages.insertAdjacentHTML('beforeend', html);
});

// Send message event

$messageForm.addEventListener('submit', (e) => {
  e.preventDefault();

  $messageFormButton.setAttribute('disabled', 'disabled');

  const message = e.target.elements.message.value;

  socket.emit('sendMessage', message, (err) => {
    $messageFormButton.removeAttribute('disabled');
    $messageForm.reset();
    $messageFormInput.focus();

    if (err) {
      return console.log(err);
    }
    console.log('Message delivered');
  });
});

// Send location event

$sendLocationButton.addEventListener('click', () => {
  if (!navigator.geolocation) {
    return alert('Geolocation is not supported by your browser');
  }

  $sendLocationButton.setAttribute('disabled', 'disabled');

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      'sendLocation',
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        $sendLocationButton.removeAttribute('disabled');
        console.log('Location shared!');
      }
    );
  });
});
