"use strict";
console.log("main.js");


let $ = require('jquery'),
	db = require('./db-interaction'),
	template = require('./dom-builder'),
	add = require('./add');

//Load the family data in the console
function loadFamilyToDom(){
	console.log("Need to load family members");
	db.getFamilyMembers()
	.then(function(familyData){
		console.log("Family Data", familyData);
		template.showFamily(familyData);
	});
}

loadFamilyToDom();


// Submit Button
$(document).on("click", "#submit", function(event){
	console.log("clicked add");
	let personObj = add.buildFamilyObj();
	console.log("What is this?", personObj);
	db.addFamilyMember(personObj)
	.then(function(){
		clearInput();
		db.getFamilyMembers()
		.then(function(data){
			template.showFamily(data);
		});
	});
});

//Clear input fields
function clearInput(){
	$("#name").val("");
	$("#age").val("");
	$("#gender").val("");
	$("#textarea1").val("");
	$("#textarea2").val("");
	$("#textarea3").val("");
	$("#textarea4").val("");
}

// Delete Button
$(document).on("click", ".delete-btn", function(event){
	console.log("clicked delete");
	let familyID = event.target.id;
	db.deleteFamilyMember(familyID)
	.then(function(){
		db.getFamilyMembers()
		.then(function(data){
			template.showFamily(data);
		});
	});
});
