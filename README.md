# humanize-data

**Converts bytes to human readable format: *7338 → 7.17 KB***

## Installation

```
npm install humanize-data
```

## Example

```
var humanizeData = require('humanize-data');
humanizeData(7378668345); //=> "6.87 GB"
```

#### Additional Config

By default, it humanize the bytes by *1024* multiplier. If you want to use a different multiplier such as 1000, you can use following code:

```
var humanizeData = require('humanize-data');
humanizeData(7378668345, { multiplier: 1000 }); //=> "7.38 GB"
```


## Authors

* **Sprout Matrix** - *Enthusiast Developers* - [Website](https://www.sproutmatrix.com)

## License

This project is licensed under the MIT License.

## Acknowledgments

* JavaScript - The Awesome Language

