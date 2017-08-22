import $ from 'jquery';

function giphy(searchString) {
  $.ajax({
    url: 'https://api.giphy.com/v1/gifs/translate?api_key=' + GIPHY_API_KEY
 + '&s=' + searchString,
    success: function(data) {
      $('main').css('background-image', 'url(' + data.data.images.fixed_height.url + ')');
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
      giphy('thumbs up');
      $('#answer').text('Yes');
    } else {
      giphy('no');
      $('#answer').text('No');
    }
  },
  error: function() {
    giphy('error');
  },
});
