/* List of Students */
var studentList = [];

/* Test Students */
var testStudent1 = {
	name: 'Matthew',
	blockCounter: 0,
	scheduleBlockList: []
};

/* On load */
window.onload = populateSchedule;

function populateSchedule () {
	populateScheduleBlocks(testStudent1.scheduleBlockList);
	studentList.push(testStudent1);
	drawBlock(testStudent1);
}

function toggleSchedule(name) {

	var clickedName = name.replace(/\n|<.*?>/g,'');
	var counter = 0;

	console.log(clickedName + counter);

	while(document.getElementById(clickedName + counter) != null) {
		if (document.getElementById(clickedName + counter).style.visibility === 'hidden' )
			document.getElementById(clickedName + counter).style.visibility = "visible";
		if (document.getElementById(clickedName + counter).style.visibility === 'visble')
			document.getElementById(clickedName+ counter).style.visibility = "hidden";
		counter++;
	}
}

/* Test Draw Block Logic */
function drawBlock(student) {
		var el =  document.createElement("div")
		el.id = student.name + student.blockCounter;
		el.innerHTML = "<p>" + student.name + "<p>";
		document.getElementById("schedule-container").appendChild(el);

		var newEl = document.getElementById(student.name + student.blockCounter);
		student.blockCounter++;
		newEl.classList.add('block-hour');
		newEl.classList.add('block-box-blue');

		newEl.style.top = "62px";
		newEl.style.left = "70px";
		newEl.style.visibility = "hidden";
}

/* Populate Test Student */
function populateScheduleBlocks(scheduleBlockList) {
	var block = {};

	block['starttime'] = 1300;
	block['endtime'] = 1400;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Goldberg";
	block['day'] = "Monday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1230;
	block['endtime'] = 1300;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Killam";
	block['day'] = "Monday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 800;
	block['endtime'] = 1100;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Dunn";
	block['day'] = "Monday";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1400;
	block['endtime'] = 1600;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Mona Campbell";
	block['day'] = "Monday";

	scheduleBlockList.push(block);
}