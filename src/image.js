class Image {
  constructor(url, caption) {
    this.url = url
    this.caption = caption
  }

  render() {
    return `<li><img src=${this.url}><h1>${this.caption}</h1></li>`
  }
}
