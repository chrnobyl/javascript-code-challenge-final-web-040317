$(document).ready(function(){
  const images = new ImageList

  function addPictureToPage(event){
    event.preventDefault()
    let imageURL = $('input[name=image_url]').val()
    let caption = $('input[name=caption]').val()
    images.addImages(imageURL, caption)
    $('#photo-list').html(images.render())
    $('input[name=image_url]').val('')
    $('input[name=caption]').val('')
  }

  $('#photo-form').on('submit', addPictureToPage)

})
