/**
*  Copyright 2020 Sprout Matrix Private Limited
*  @author sprout-matrix
*  Converts bytes to human readable data units, such as KB, MB, GB, TB, PB, EB, ZB, YB etc.  
**/
function bytesToHumanReadableFormat(bytes, options = { multiplier: 1024 }) {
	if(typeof bytes !== 'number' || bytes === 0)
		return "0 Byte";

	if(typeof options.multiplier !== 'number')
		options['multiplier'] = 1024;

	bytes = Math.abs(bytes);

	var index = Math.floor(Math.log(bytes) / Math.log(options.multiplier)),
    	units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

	var value = (bytes / Math.pow(options.multiplier, index)).toFixed(2) * 1;
	var unit = units[index];

	if(unit === 'Bytes' && (value === 0 || value === 1)) {
		unit = unit.slice(0, -1);
	}

	if(unit === undefined) {
		return bytes.toString();
	}

    	return value + ' ' + unit;
}

module.exports = bytesToHumanReadableFormat;
