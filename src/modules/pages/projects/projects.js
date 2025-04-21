import { LightningElement } from 'lwc';
const SERVER_URL = "http://localhost:3002"

export default class projects extends LightningElement {
  projectCount = 1;

  // Handle card click event
  handleCardClick(event) {
    console.log('Card clicked! You can navigate to the project details page or do something else here.');
    window.location.href = this.loginUrl;
  }

  get loginUrl() {
    return `${SERVER_URL}/oauth2/login`
  }
}

