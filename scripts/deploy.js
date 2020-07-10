const ghpages = require('gh-pages');
ghpages.publish('build', {history: false}, (data) => console.log(data));