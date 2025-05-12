//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const args = process.argv.slice(2);
const alarms = args.map(Number).filter((num) => !isNaN(num) && num > 0);
if (alarms.length === 0) {
	console.log("Please provide valid time in seconds.");
}
alarms.forEach((alarm) => {
	setTimeout(() => {
		process.stdout.write("\x07");
		console.log(`Timer for ${alarm} seconds.`);
	}, alarm * 1000);
});

//Example usage:
// node timer1.js 10 3 5 15 9

process.stdout.write("\x07");

