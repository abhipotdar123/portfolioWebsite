import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./about.html";
class About extends LightningElement {
  constructor(...args) {
    super(...args);
    this.currentImageIndex = 0;
    this.currentTestimonialIndex = 0;
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
  nextTestimonial() {
    const testimonials = this.template.querySelectorAll('.testimonial');
    testimonials[this.currentTestimonialIndex].classList.remove('active');
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % testimonials.length;
    testimonials[this.currentTestimonialIndex].classList.add('active');
  }
  prevTestimonial() {
    const testimonials = this.template.querySelectorAll('.testimonial');
    testimonials[this.currentTestimonialIndex].classList.remove('active');
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    testimonials[this.currentTestimonialIndex].classList.add('active');
  }
  /*LWC compiler v2.50.0*/
}
_registerDecorators(About, {
  fields: ["currentImageIndex", "currentTestimonialIndex", "carouselInterval"]
});
export default _registerComponent(About, {
  tmpl: _tmpl,
  sel: ""
});