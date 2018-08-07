;(function() {
  function wipmaniaGetIPAdressCountry(ipAddress,requestingDomain) {
    return new Promise(function (resolve) {
      fetch('http://api.wipmania.com/'+ipAddress+'?'+requestingDomain,{})
      .then(function (res) {
        resolve(res.text());
      })
      .catch(function (e) {
        resolve(e);
      });
    });
  }
  
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = wipmaniaGetIPAdressCountry;
  }
  else {
    if (typeof define === 'function' && define.amd) {
      define([], function() {
        return wipmaniaGetIPAdressCountry;
      });
    }
    else {
      window.wipmaniaGetIPAdressCountry = wipmaniaGetIPAdressCountry;
    }
  }
})();
