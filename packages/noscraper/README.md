# noscraper
There is no silver bullet to prevent headless browser or selecnium browser to scrape your brwoser. This is a basic solution to detect `phantomjs`  and selenium base `chrome`, `firefox` browser and to handle what is going to happen. 


![image](https://user-images.githubusercontent.com/5538753/50579654-04c3f800-0e82-11e9-85d3-069cda225204.png)


## Install
```
$ npm install @lazy-copilot/noscraper

or 

$ yarn add @lazy-copilot/noscraper
```

## Usage
```js
import noscraperPlugin from '@lazy-copilot/noscraper'

const handler = () => window.location = 'https://yahoo.com'

Vue.use(noscraperPlugin, handler)
// initzially redirect to google.com, when handler s not given 
```