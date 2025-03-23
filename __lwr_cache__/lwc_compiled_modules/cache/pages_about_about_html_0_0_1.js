import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./about.css";

import _implicitScopedStylesheets from "./about.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="carousel-track${0}"${2}><img src="/public/assets/aboutMe/image1.jpg" alt="Image 1" class="carousel-image active${0}"${2}><img src="/public/assets/aboutMe/image2.jpg" alt="Image 2" class="carousel-image${0}"${2}><img src="/public/assets/aboutMe/image3.jpg" alt="Image 3" class="carousel-image${0}"${2}></div>`;
const $fragment2 = parseFragment`<div class="carousel-progress${0}"${2}></div>`;
const $fragment3 = parseFragment`<button class="carousel-button prev${0}"${2}>❮</button>`;
const $fragment4 = parseFragment`<button class="carousel-button next${0}"${2}>❯</button>`;
const $fragment5 = parseFragment`<div class="intro-right${0}"${2}><h1${3}>Who I am?</h1><p${3}>👋 Greetings! I&#x27;m <strong${3}>Abhinav Potdar</strong>, a Certified Salesforce Developer with a solid foundation built upon my Electrical Engineering background. For 5+ years, I&#x27;ve been dedicated to crafting and optimizing Salesforce solutions, leveraging Apex, Lightning Web Components (LWC), and seamless REST API integrations. I&#x27;m also deeply experienced in Workato automation, enabling businesses to streamline their processes and achieve peak efficiency.</p><p${3}>My passion lies in architecting CRM systems that not only meet but exceed business needs. As a lifelong learner, I&#x27;m always eager to explore the latest Salesforce technologies and push the boundaries of what&#x27;s possible. Outside of the digital realm, I&#x27;m an avid traveler, constantly seeking new experiences and immersing myself in different cultures.</p><a href="/contact" class="cta-button${0}"${2}>Get in Touch</a><div class="social-links${0}"${2}><a href="https://www.linkedin.com/in/abhinavpotdar1" target="_blank" class="social-icon${0}"${2}>LinkedIn</a><a href="https://github.com/abhipotdar123" target="_blank" class="social-icon${0}"${2}>GitHub</a><a href="/public/assets/resume.pdf" download class="social-icon${0}"${2}>Download Resume</a></div></div>`;
const $fragment6 = parseFragment`<section class="education-section fade-in${0}"${2}><h2${3}>Educational Background</h2><div class="education-grid${0}"${2}><div class="education-card${0}"${2}><div class="education-icon${0}"${2}>🎓</div><div class="education-content${0}"${2}><h3${3}>Bachelor of Engineering</h3><p class="institution${0}"${2}>SKN Sinhgad College of Engineering, Solapur University</p><p class="year${0}"${2}>2016</p></div></div><div class="education-card${0}"${2}><div class="education-icon${0}"${2}>📚</div><div class="education-content${0}"${2}><h3${3}>Diploma in Electrical Engineering</h3><p class="institution${0}"${2}>VD Deshmukh Polytechnic College, Latur</p><p class="year${0}"${2}>2013</p></div></div></div></section>`;
const $fragment7 = parseFragment`<section class="timeline-section fade-in${0}"${2}><h2${3}>Professional Timeline</h2><div class="timeline${0}"${2}><div class="timeline-item${0}"${2}><div class="timeline-icon${0}"${2}>💼</div><div class="timeline-content${0}"${2}><h3${3}>2022 - Present: Solution Engineer</h3><p${3}>Convera India Pvt Ltd</p></div></div><div class="timeline-item${0}"${2}><div class="timeline-icon${0}"${2}>💻</div><div class="timeline-content${0}"${2}><h3${3}>2019 - 2022: Salesforce Developer</h3><p${3}>Microdynamics Software Pvt Ltd</p></div></div></div></section>`;
const $fragment8 = parseFragment`<section class="skills-section fade-in${0}"${2}><h2${3}>Skills</h2><div class="skills-grid${0}"${2}><div class="skill-category${0}"${2}><h3${3}>Salesforce Development</h3><ul${3}><li${3}>⭐ Apex</li><li${3}>⭐ Triggers</li><li${3}>⭐ LWC</li><li${3}>⭐ Visualforce</li></ul></div><div class="skill-category${0}"${2}><h3${3}>Integrations</h3><ul${3}><li${3}>⭐ REST API</li><li${3}>⭐ Workato</li><li${3}>⭐ Streaming API</li></ul></div><div class="skill-category${0}"${2}><h3${3}>Automation &amp; Configurations</h3><ul${3}><li${3}>⭐ Flows</li><li${3}>⭐ Process Builder</li><li${3}>⭐ Approval Process</li></ul></div><div class="skill-category${0}"${2}><h3${3}>DevOps &amp; Tools</h3><ul${3}><li${3}>⭐ Gearset</li><li${3}>⭐ GitHub</li><li${3}>⭐ VS Code</li><li${3}>⭐ Postman</li></ul></div></div></section>`;
const $fragment9 = parseFragment`<h2${3}>What People Say</h2>`;
const $fragment10 = parseFragment`<div class="testimonial active${0}"${2}><p${3}>&quot;Abhinav is an exceptional Salesforce Developer with a deep understanding of CRM architecture. His ability to solve complex problems is unmatched!&quot;</p><h3${3}>- John Doe, CEO at Convera</h3></div>`;
const $fragment11 = parseFragment`<div class="testimonial${0}"${2}><p${3}>&quot;Working with Abhinav was a pleasure. He delivered high-quality solutions on time and exceeded our expectations.&quot;</p><h3${3}>- Jane Smith, Manager at Microdynamics</h3></div>`;
const $fragment12 = parseFragment`<button class="carousel-button prev${0}"${2}>❮</button>`;
const $fragment13 = parseFragment`<button class="carousel-button next${0}"${2}>❯</button>`;
const $fragment14 = parseFragment`<section class="contact-section fade-in${0}"${2}><h2${3}>Get in Touch</h2><form class="contact-form${0}"${2}><input type="text" placeholder="Your Name" required${3}><input type="email" placeholder="Your Email" required${3}><textarea placeholder="Your Message" rows="5" required${3}></textarea><button type="submit" class="cta-button${0}"${2}>Send Message</button></form></section>`;
const stc0 = {
  classMap: {
    "about-container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "intro-section": true,
    "fade-in": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "intro-left": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "carousel": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "testimonials-section": true,
    "fade-in": true
  },
  key: 20
};
const stc5 = {
  classMap: {
    "testimonials-carousel": true
  },
  key: 23
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7} = $ctx;
  return [api_element("div", stc0, [api_element("section", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_static_fragment($fragment1(), 5), api_static_fragment($fragment2(), 7), api_static_fragment($fragment3(), 9, {
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.prevImage))
    }
  }), api_static_fragment($fragment4(), 11, {
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.nextImage))
    }
  })])]), api_static_fragment($fragment5(), 13)]), api_static_fragment($fragment6(), 15), api_static_fragment($fragment7(), 17), api_static_fragment($fragment8(), 19), api_element("section", stc4, [api_static_fragment($fragment9(), 22), api_element("div", stc5, [api_static_fragment($fragment10(), 25), api_static_fragment($fragment11(), 27), api_static_fragment($fragment12(), 29, {
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.prevTestimonial))
    }
  }), api_static_fragment($fragment13(), 31, {
    on: {
      "click": _m7 || ($ctx._m7 = api_bind($cmp.nextTestimonial))
    }
  })])]), api_static_fragment($fragment14(), 33)])];
  /*LWC compiler v2.50.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "pages-about_about";
freezeTemplate(tmpl);
