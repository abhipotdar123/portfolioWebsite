import { LightningElement, track } from 'lwc';

export default class Home extends LightningElement {
    @track typingWords = '';
    words = ['Salesforce Developer', 'Trailhead Ranger', 'Blogger', 'Traveller'];
    currentWordIndex = 0;
    currentCharIndex = 0;
    typingSpeed = 150; // Speed in milliseconds
    isDeleting = false;

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
}