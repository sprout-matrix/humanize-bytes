function bytesToHumanReadableFormat(bytes, multiplier) {
	if(typeof bytes !== 'number')
		bytes = 1;

	if(!multiplier || typeof multiplier !== 'number')
		multiplier = 1024;

	bytes = Math.abs(bytes);

    var index = Math.floor(Math.log(bytes) / Math.log(1024)),
    units = ['Bytes', 'Kb', 'Mb', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    return (bytes / Math.pow(multiplier, i)).toFixed(2) * 1 + ' ' + units[index];
}

module.exports = bytesToHumanReadableFormat;