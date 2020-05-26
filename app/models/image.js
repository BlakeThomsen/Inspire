export default class Image {
  constructor(data) {
    this.image = data.url;
  }
  get imageTemplate() {
    return `<style>
    body {
      background-image: url(${this.image});
    }
    </style>`;
  }
}
