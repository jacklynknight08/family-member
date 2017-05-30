"use strict";
console.log("add.js");

let $ = require('jquery');

function buildFamilyObj(){
	let familyObj = {
		 name: $("#name").val(),
		 age: parseInt($("#age").val()),
		 gender: $("#gender").val(),
		 skills: [
		 	$("#textarea1").val(),
		 	$("#textarea2").val(),
		 	$("#textarea3").val(),
		 	$("#textarea4").val()
		 	]
	};
	console.log("buildFamilyObj");
	return familyObj;
}

module.exports = {buildFamilyObj};