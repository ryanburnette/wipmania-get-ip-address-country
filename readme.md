# #wipmaniaGetIPAdressCountry()

Get the country of origin for an IP address from [Wipmania's API](http://wipmania.com).

## Requirements

- Promise
- Fetch

## Usage

```javascript
wipmaniaGetIPAdressCountry('1.2.3.4','mysite.com')
.then(function (country) {
  console.log(country)
})
```
