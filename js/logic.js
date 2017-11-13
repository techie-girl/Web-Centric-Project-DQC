/* List of Students */
var studentList = [];

/* Test Students */
var testStudent1 = {
	name: 'Matthew';
	scheduleBlockList = [];
}

/* Schedule Blocks for Students */
populateScheduleBlocks(testStudent1.scheduleBlockList);

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

	block['starttime'] = 1300;
	block['endtime'] = 1400;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Goldberg";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1300;
	block['endtime'] = 1400;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Goldberg";

	scheduleBlockList.push(block);

	block = {};

	block['starttime'] = 1300;
	block['endtime'] = 1400;
	block['name'] = "Cool Class 1";
	block['id'] = "COOL1234";
	block['location'] = "Goldberg";

	scheduleBlockList.push(block);
}