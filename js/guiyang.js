(function(href,location) {
  if(/guiyang\./.test(href)) {
    $('.content>h1')[0].className += ' guiyang'
    document.cookie="region="+location;
  }
})(window.location.href,'guiyang')
// })('guiyang.')