/* List of Students */
var studentList = [];

/* Test Students */
var testStudent1 = {
	name: 'Matthew',
	scheduleBlockList: []
};

/* Schedule Blocks for Students */
populateScheduleBlocks(testStudent1.scheduleBlockList);

console.log(testStudent1.name);
for (var i = 0; i < testStudent1.scheduleBlockList.length; i++) {
	console.log(testStudent1.scheduleBlockList[i].location);
}

/* Populate Test Student */
function populateScheduleBlocks(scheduleBlockList) {
	var block = {};

	block['starttime'] = 1300;
	block['endtime'] = 1400;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Goldberg";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1230;
	block['endtime'] = 1300;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Killam";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 800;
	block['endtime'] = 1100;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Dunn";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1400;
	block['endtime'] = 1600;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Mona Campbell";

	scheduleBlockList.push(block);
}