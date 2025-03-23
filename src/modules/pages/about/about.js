import { LightningElement } from 'lwc';

export default class About extends LightningElement {
    currentImageIndex = 0;
    currentTestimonialIndex = 0;
    carouselInterval;

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
}