/* List of Students */
var studentList = [];

/* Test Students */
var testStudent1 = {
	name: 'Matthew Duggan',
	blockCounter: 0,
	scheduleBlockList: [],
	b00: 'B00617196'
};

/* On load */
window.onload = populateSchedule;

function populateSchedule () {
	populateScheduleBlocks(testStudent1.scheduleBlockList);
	studentList.push(testStudent1);
	drawBlocks(testStudent1);
}

function toggleSchedule(name) {
	var clickedName = name.replace(/\n|<.*?>/g,'');
	var reducedName = clickedName.replace(/\s/g, '');
	var counter = 0;

	while(document.getElementById(reducedName + counter) != null) {
		console.log("hit!" + counter);
		if (document.getElementById(reducedName + counter).style.opacity === '0')
			document.getElementById(reducedName + counter).style.opacity = "100";
		else
			document.getElementById(reducedName + counter).style.opacity = "0";
		counter++;
	}
}

/* Draw all schedule blocks from a student object */
function drawBlocks(student) {

	for (var i = 0; i < student.scheduleBlockList.length; i++) {
		var name = student.name.replace(/\s/g, '');
		var el =  document.createElement("div");
		el.id = name + student.b00 + student.blockCounter;
		document.getElementById("schedule-container").appendChild(el);

		var newEl = document.getElementById(name + student.b00 + student.blockCounter);
		student.blockCounter++;
		
		console.log(student.scheduleBlockList[i].day);
		console.log(student.scheduleBlockList[i].starttime)

		switch(student.scheduleBlockList[i].day) {
			case "Monday":
				newEl.classList.add('monday');
				break;
			case "Tuesday":
				newEl.classList.add('tuesday');
				break;
			case "Wednesday":
				newEl.classList.add('wednesday');
				break;
			case "Thursday":
				newEl.classList.add('thursday');
				break;
			case "Friday":
				newEl.classList.add('friday');
				break;
			default:
				console.log("Error, unable to properly draw block");
		}

		switch(student.scheduleBlockList[i].starttime) {
			case 800:
				newEl.classList.add('eight');
				break;
			case 830:
				newEl.classList.add('eightthirty');
				break;
			case 900:
				newEl.classList.add('nine');
				break;
			case 930:
				newEl.classList.add('ninethirty');
				break;
			case 1000:
				newEl.classList.add('ten');
				break;
			case 1030:
				newEl.classList.add('tenthirty');
				break;
			case 1100:
				newEl.classList.add('eleven');
				break;
			case 1130:
				newEl.classList.add('eleventhirty');
				break;
			case 1200:
				newEl.classList.add('twelve');
				break;
			case 1230:
				newEl.classList.add('twelvethirty');
				break;
			case 1300:
				newEl.classList.add('thirteen');
				break;
			case 1330:
				newEl.classList.add('thirteenthirty');
				break;
			case 1400:
				newEl.classList.add('fourteen');
				break;
			case 1430:
				newEl.classList.add('fourteenthirty');
				break;
			case 1500:
				newEl.classList.add('fifteen');
				break;
			case 1530:
				newEl.classList.add('fifteenthirty');
				break;
			case 1600:
				newEl.classList.add('sixteen');
				break;
			case 1630:
				newEl.classList.add('sixteenthirty');
				break;
			case 1700:
				newEl.classList.add('seventeen');
				break;
			case 1730:
				newEl.classList.add('seventeenthirty');
				break;
			case 1800:
				newEl.classList.add('eightteen');
				break;
			case 1830:
				newEl.classList.add('eightteenthirty');
				break;
			case 1900:
				newEl.classList.add('nineteen');
				break;
			case 1930:
				newEl.classList.add('nineteenthirty');
				break;
			case 2000:
				newEl.classList.add('twenty');
				break;
			case 2030:
				newEl.classList.add('twentythirty');
				break;
			case 2100:
				newEl.classList.add('twentyone');
				break;
			case 2130:
				newEl.classList.add('twentyonethirty');
				break;
			case 2200:
				newEl.classList.add('twentytwo');
				break;
			case 2230:
				newEl.classList.add('twentytwothirty');
				break;
			case 2300:
				newEl.classList.add('twentythree');
				break;
			case 2330:
				newEl.classList.add('twentythreethirty');
				break;
			default:
				console.log("Error, unable to properly draw block.")

		}

		newEl.classList.add('block-half-hour');
		newEl.classList.add('block-box-blue');
		
		newEl.style.opacity = "0";
	}
}

/* Populate Test Student */
function populateScheduleBlocks(scheduleBlockList) {
	var block = {};

	block['starttime'] = 830;
	block['endtime'] = 1130;
	block['name'] = "UI Design";
	block['id'] = "CSCI3169";
	block['location'] = "Killam";
	block['day'] = "Monday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1600;
	block['endtime'] = 1730;
	block['name'] = "Web Centric Computing";
	block['id'] = "CSCI3172";
	block['location'] = "Mona Campbell";
	block['day'] = "Monday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1000;
	block['endtime'] = 1130;
	block['name'] = "Networks";
	block['id'] = "CSCI4171";
	block['location'] = "Goldberg";
	block['day'] = "Tuesday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1430;
	block['endtime'] = 1600;
	block['name'] = "Economic Rise of China and India";
	block['id'] = "CHIN2290";
	block['location'] = "LSC";
	block['day'] = "Tuesday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1600;
	block['endtime'] = 1730;
	block['name'] = "Mobile Computing";
	block['id'] = "CSCI4176";
	block['location'] = "LSC";
	block['day'] = "Tuesday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 830;
	block['endtime'] = 1130;
	block['name'] = "Mobile Computing";
	block['id'] = "CSCI4176";
	block['location'] = "Goldberg";
	block['day'] = "Wednesday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 830;
	block['endtime'] = 1130;
	block['name'] = "Mobile Computing";
	block['id'] = "CSCI4176";
	block['location'] = "Goldberg";
	block['day'] = "Wednesday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1600;
	block['endtime'] = 1730;
	block['name'] = "UI Design";
	block['id'] = "CSCI3160";
	block['location'] = "LSC";
	block['day'] = "Wednesday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1000;
	block['endtime'] = 1130;
	block['name'] = "Networks";
	block['id'] = "CSCI4171";
	block['location'] = "Goldberg";
	block['day'] = "Thursday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1430;
	block['endtime'] = 1600;
	block['name'] = "Economic Rise of China and India";
	block['id'] = "CHIN2290";
	block['location'] = "LSC";
	block['day'] = "Thursday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1600;
	block['endtime'] = 1730;
	block['name'] = "Mobile Computing";
	block['id'] = "CSCI4176";
	block['location'] = "LSC";
	block['day'] = "Thursday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1030;
	block['endtime'] = 1130;
	block['name'] = "Web Centric Computing";
	block['id'] = "CSCI3172";
	block['location'] = "Goldberg";
	block['day'] = "Friday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1600;
	block['endtime'] = 1730;
	block['name'] = "Web Centric Computing";
	block['id'] = "CSCI3172";
	block['location'] = "Rowe";
	block['day'] = "Friday";

	scheduleBlockList.push(block);
}