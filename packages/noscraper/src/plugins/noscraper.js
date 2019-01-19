const install = function (Vue, handler) {
  if(
    navigator.webdriver || // selenium chrome
    window.document.documentElement.getAttribute("webdriver") || // selenium firefox
    (window.callPhantom && window._phantom)  // phantomjs
    ) {
      console.log('2 -=-=-=-=install')

      if(window && window.location && handler) return handler()
      
      return window.location = 'https://google.com'
  }
}
const plugin = {
	install,
};

export default plugin;