import $ from 'jquery';

function giphy(searchString) {
  $.ajax({
    url: 'https://api.giphy.com/v1/gifs/translate?api_key=' + GIPHY_API_KEY
 + '&s=' + searchString,
    success: function(data) {
      $('body').css('background', 'no-repeat center/contain url(' + data.data.images.fixed_height_downsampled.url + ')');
      $('#spinner').css('display', 'none');
    },
  })
}

$.ajax({
  url: 'https://connect.squareup.com/v1/' + SQUARE_LOCATION_ID + '/inventory',
  beforeSend: function(xhr) {
    xhr.setRequestHeader('Authorization', 'Bearer ' + SQUARE_PERSONAL_ACCESS_TOKEN);
  },
  success: function(data) {
    // Loop through object returned from Square
    for (var i = 0; i < data.length; i++) {
      // Check if element is taco based on `variation_id```
      if (data[i].variation_id === 'FED397C3-6C0A-4F8D-ACAB-A00E7E37C6B8') {
        // Check if any tacos on hand
        if (data[i].quantity_on_hand > 0) {
          giphy('thumbs up');
        } else {
          giphy('no');
        }
      }
    }
  },
  error: function() {
    giphy('error');
  },
});
