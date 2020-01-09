# humanize-bytes

Converts bytes to human readable speed units, such as Kb, Mb, Gb, Tb etc.

## Getting Started

It's very simple. Just import the npm package and pass the bytes to function, you'll get output.

```
var humanizeBytes = require('humanize-bytes');
var totalData = humanizeBytes(7378668345);
console.log(totalData);
```

Output of above would be as following:

```
"6.87 GB"
```

By default, it humanize the bytes by 1024 multiplier. If you want to use a different multiplier such as 1000, you can use following code:

```
var humanizeBytes = require('humanize-bytes');
var totalData = humanizeBytes(7378668345, 1000);
console.log(totalData);
```

Output of above would be as following:

```
"7.38 GB"
```

## Authors

* **Sprout Matrix** - *Enthusiast Developers* - [Website](https://www.sproutmatrix.com)

## License

This project is licensed under the MIT License.

## Acknowledgments

* The Awesome Language - JavaScript

