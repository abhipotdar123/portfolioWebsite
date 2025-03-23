import _implicitStylesheets from "./about.css";
import _implicitScopedStylesheets from "./about.scoped.css?scoped=true";
import {freezeTemplate, parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="about-container${0}"${2}><section class="intro-section fade-in${0}"${2}><div class="intro-left${0}"${2}><div class="carousel${0}"${2}><div class="carousel-track${0}"${2}><img src="/public/assets/aboutMe/image1.jpg" alt="Image 1" class="carousel-image active${0}"${2}><img src="/public/assets/aboutMe/image2.jpg" alt="Image 2" class="carousel-image${0}"${2}><img src="/public/assets/aboutMe/image3.jpg" alt="Image 3" class="carousel-image${0}"${2}></div><div class="carousel-progress${0}"${2}></div><button class="carousel-button prev${0}"${2}>❮</button><button class="carousel-button next${0}"${2}>❯</button></div></div><div class="intro-right${0}"${2}><h1${3}>Who I am</h1><p${3}>👋 Hello! I&#x27;m <strong${3}>Abhinav Potdar</strong>, an Electrical Engineer turned Certified Salesforce Developer with 5+ years of experience in designing, implementing, and optimizing Salesforce solutions. My expertise spans Apex, LWC, REST API integrations, Workato automation, and CRM architecture, helping businesses enhance efficiency and streamline processes.</p><p${3}>I thrive on solving complex problems, constantly learning new technologies, and pushing the boundaries of innovation in the Salesforce ecosystem. Beyond coding, I&#x27;m an avid traveler who loves exploring new places, cultures, and cuisines. When I&#x27;m not working or traveling, you&#x27;ll find me spending time with my furry friends—a true pet lover at heart.</p><a href="/contact" class="cta-button${0}"${2}>Get in Touch</a></div></section><section class="timeline-section fade-in${0}"${2}><h2${3}>Educational Timeline</h2><div class="timeline${0}"${2}><div class="timeline-item${0}"${2}><div class="timeline-icon${0}"${2}>🎓</div><div class="timeline-content${0}"${2}><h3${3}>2016: Bachelor of Engineering</h3><p${3}>SKN Sinhgad College of Engineering, Solapur University</p></div></div><div class="timeline-item${0}"${2}><div class="timeline-icon${0}"${2}>📚</div><div class="timeline-content${0}"${2}><h3${3}>2013: Diploma in Electrical Engineering</h3><p${3}>VD Deshmukh Polytechnic College, Latur</p></div></div></div></section><section class="timeline-section fade-in${0}"${2}><h2${3}>Professional Timeline</h2><div class="timeline${0}"${2}><div class="timeline-item${0}"${2}><div class="timeline-icon${0}"${2}>💼</div><div class="timeline-content${0}"${2}><h3${3}>2022 - Present: Solution Engineer</h3><p${3}>Convera India Pvt Ltd</p></div></div><div class="timeline-item${0}"${2}><div class="timeline-icon${0}"${2}>💻</div><div class="timeline-content${0}"${2}><h3${3}>2019 - 2022: Salesforce Developer</h3><p${3}>Microdynamics Software Pvt Ltd</p></div></div></div></section><section class="skills-section fade-in${0}"${2}><h2${3}>Skills</h2><div class="skills-grid${0}"${2}><div class="skill-category${0}"${2}><h3${3}>Salesforce Development</h3><ul${3}><li${3}>⭐ Apex</li><li${3}>⭐ Triggers</li><li${3}>⭐ LWC</li><li${3}>⭐ Visualforce</li></ul></div><div class="skill-category${0}"${2}><h3${3}>Integrations</h3><ul${3}><li${3}>⭐ REST API</li><li${3}>⭐ Workato</li><li${3}>⭐ Streaming API</li></ul></div><div class="skill-category${0}"${2}><h3${3}>Automation &amp; Configurations</h3><ul${3}><li${3}>⭐ Flows</li><li${3}>⭐ Process Builder</li><li${3}>⭐ Approval Process</li></ul></div><div class="skill-category${0}"${2}><h3${3}>DevOps &amp; Tools</h3><ul${3}><li${3}>⭐ Gearset</li><li${3}>⭐ GitHub</li><li${3}>⭐ VS Code</li><li${3}>⭐ Postman</li></ul></div></div></section></div>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, sp: api_static_part, st: api_static_fragment} = $api;
  const {_m0, _m1} = $ctx;
  return [api_static_fragment($fragment1, 1, [api_static_part(9, {
    on: _m0 || ($ctx._m0 = {
      "click": api_bind($cmp.prevImage)
    })
  }, null), api_static_part(11, {
    on: _m1 || ($ctx._m1 = {
      "click": api_bind($cmp.nextImage)
    })
  }, null)])];
  /*LWC compiler v8.13.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.stylesheetToken = "lwc-59lm7o5j5ms";
tmpl.legacyStylesheetToken = "undefined-about_about";
if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
freezeTemplate(tmpl);
