/**
*  Copyright 2020 Sprout Matrix Private Limited
*  @author sprout-matrix
*  Converts bytes to human readable data units, such as KB, MB, GB, TB, PB, EB, ZB, YB etc.  
**/
function bytesToHumanReadableFormat(bytes, options = { multiplier: 1024 }) {
	if(typeof bytes !== 'number')
		bytes = 1;

	if(typeof options.multiplier !== 'number')
		options['multiplier'] = 1024;

	bytes = Math.abs(bytes);

    var index = Math.floor(Math.log(bytes) / Math.log(options.multiplier)),
    units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(options.multiplier, index)).toFixed(2) * 1 + ' ' + units[index];
}

module.exports = bytesToHumanReadableFormat;
