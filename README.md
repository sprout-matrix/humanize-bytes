# humanize-data

Converts bytes to human readable data units, such as KB, MB, GB, TB, PB, EB, ZB, YB etc.

## Installation

```
npm install humanize-data
```

## Getting Started

It's very simple. Just import the npm package and pass the bytes to function, you'll get output.

```
var humanizeData = require('humanize-data');
humanizeData(7378668345); //=> "6.87 GB"
```


By default, it humanize the bytes by *1024* multiplier. If you want to use a different multiplier such as 1000, you can use following code:

```
var humanizeData = require('humanize-data');
humanizeData(7378668345, 1000); //=> "7.38 GB"
```


## Authors

* **Sprout Matrix** - *Enthusiast Developers* - [Website](https://www.sproutmatrix.com)

## License

This project is licensed under the MIT License.

## Acknowledgments

* The Awesome Language - JavaScript

