/**
*  Copyright 2020 Sprout Matrix Private Limited
*  @author sprout-matrix
*  Converts bytes to human readable data units, such as KB, MB, GB, TB, PB, EB, ZB, YB etc.  
**/
function bytesToHumanReadableFormat(bytes, multiplier) {
	if(typeof bytes !== 'number')
		bytes = 1;

	if(!multiplier || typeof multiplier !== 'number')
		multiplier = 1024;

	bytes = Math.abs(bytes);

    var index = Math.floor(Math.log(bytes) / Math.log(1024)),
    units = ['Bytes', 'Kb', 'Mb', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(multiplier, index)).toFixed(2) * 1 + ' ' + units[index];
}

module.exports = bytesToHumanReadableFormat;
