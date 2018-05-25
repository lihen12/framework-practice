//pull component out into component.js
//create an about.js, pull definition of about-app into it
//rename script.js to index.js; only include definition of app and gators

Vue.component('app-header', {
  props: ['text'],
  template: '<header> <h1><img src="alligator-logo.png" alt="Alligator Logo">{{ text }}</h1> </header>'
})