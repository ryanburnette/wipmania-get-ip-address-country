;(function() {
  function wipmaniaGetIPAdressCountry(ipAddress,requestingDomain) {
    return fetch('http://api.wipmania.com/'+ipAddress+'?'+requestingDomain,{})
    .then(function (res) {
      return res.text();
    })
    .catch(function (e) {
      return e;
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
