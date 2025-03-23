import { registerDecorators as _registerDecorators, LightningElement, registerComponent as _registerComponent } from "lwc";
import _tmpl from "./home.html";
class Home extends LightningElement {
  constructor(...args) {
    super(...args);
    this.typingWords = '';
    this.words = ['Salesforce Developer', 'Trailhead Ranger', 'Blogger', 'Traveller'];
    this.currentWordIndex = 0;
    this.currentCharIndex = 0;
    this.typingSpeed = 150;
    // Speed in milliseconds
    this.isDeleting = false;
  }
  connectedCallback() {
    this.typeWords();
  }
  typeWords() {
    const currentWord = this.words[this.currentWordIndex];
    if (this.isDeleting) {
      this.typingWords = currentWord.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.typingWords = currentWord.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }
    if (!this.isDeleting && this.currentCharIndex === currentWord.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeWords(), 1000); // Pause before deleting
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length; // Move to the next word
      setTimeout(() => this.typeWords(), 500); // Pause before typing the next word
    } else {
      setTimeout(() => this.typeWords(), this.typingSpeed);
    }
  }
  /*LWC compiler v8.13.1*/
}
_registerDecorators(Home, {
  track: {
    typingWords: 1
  },
  fields: ["words", "currentWordIndex", "currentCharIndex", "typingSpeed", "isDeleting"]
});
const __lwc_component_class_internal = _registerComponent(Home, {
  tmpl: _tmpl,
  sel: "pages-home",
  apiVersion: 63
});
export default __lwc_component_class_internal;