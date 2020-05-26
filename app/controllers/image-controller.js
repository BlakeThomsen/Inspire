import store from "../store.js";
import imageService from "../services/image-service.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function drawImage() {
  console.log("THE IMAGE MAN SAYS:", store.State.image);
  let image = store.State.image;
  document.getElementById("image").innerHTML = image.imageTemplate;
}
export default class ImageController {
  constructor() {
    store.subscribe("image", drawImage);
    imageService.getImage();
  }
}
