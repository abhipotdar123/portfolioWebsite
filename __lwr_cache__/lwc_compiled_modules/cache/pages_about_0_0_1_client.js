import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./about.html";
class About extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currentImageIndex = 0;
    this.carouselInterval = void 0;
  }
  connectedCallback() {
    this.startCarousel();
  }
  disconnectedCallback() {
    this.stopCarousel();
  }
  startCarousel() {
    this.carouselInterval = setInterval(() => {
      this.nextImage();
    }, 5000); // Change image every 5 seconds
  }
  stopCarousel() {
    clearInterval(this.carouselInterval);
  }
  nextImage() {
    const images = this.template.querySelectorAll('.carousel-image');
    const track = this.template.querySelector('.carousel-track');
    images[this.currentImageIndex].classList.remove('active');
    this.currentImageIndex = (this.currentImageIndex + 1) % images.length;
    images[this.currentImageIndex].classList.add('active');
    track.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;
  }
  prevImage() {
    const images = this.template.querySelectorAll('.carousel-image');
    const track = this.template.querySelector('.carousel-track');
    images[this.currentImageIndex].classList.remove('active');
    this.currentImageIndex = (this.currentImageIndex - 1 + images.length) % images.length;
    images[this.currentImageIndex].classList.add('active');
    track.style.transform = `translateX(-${this.currentImageIndex * 100}%)`;
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(About, {
  fields: ["currentImageIndex", "carouselInterval"]
});
const __lwc_component_class_internal = _registerComponent(About, {
  tmpl: _tmpl,
  sel: "-about",
  apiVersion: 63
});
export default __lwc_component_class_internal;