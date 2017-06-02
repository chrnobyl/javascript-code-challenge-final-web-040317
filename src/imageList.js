class ImageList {
  constructor(){
    this.images = []
  }

  addImages(imageURL, caption){
    let image = new Image(imageURL, caption)
    this.images.push(image)
  }

  renderList(){
    return this.images.map(function(i){
      return i.render()
    }).join('')
  }

  render(){
    return `<ul>${this.renderList()}</ul>`
  }
}
