import $ from 'jquery';

function tenor(searchString) {
  $.ajax({
    url: 'https://api.tenor.com/v1/search?key=' + TENOR_API_KEY + '&limit=50&safesearch=strict&q=' + searchString,
    success: function(data) {
      $('body').css('background', 'no-repeat center/contain url(' + data.results[Math.floor((Math.random() * 50))].media[0].gif.url + ')');
    },
  })
}

$.ajax({
  url: 'https://connect.squareup.com/v1/' + SQUARE_LOCATION_ID + '/inventory',
  beforeSend: function(xhr) {
    xhr.setRequestHeader('Authorization', 'Bearer ' + SQUARE_PERSONAL_ACCESS_TOKEN);
  },
  success: function(data) {
    if (data[0].quantity_on_hand > 0) {
      tenor('thumbs up');
    } else {
      tenor('no');
    }
  },
  error: function() {
    tenor('error');
  },
});
