"use strict";

let $ = require('jquery'),
	firebase = require('./fb-config');


function getFamilyMembers() {
	console.log(`${firebase.getFBsettings().databaseURL}/family.json`);
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/family.json`
		}).done(function(familyData){
			resolve(familyData);
		}).fail(function(error){
			reject(error);
		});
	});
}

function addFamilyMember(personObj) {
	console.log("add family member", personObj);
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/family.json`,
			type: 'POST',
			data: JSON.stringify(personObj),
			dataType: 'json'
		}).done(function(familyID){
			resolve(familyID);
		});
	});

}

function deleteFamilyMember(familyID) {
	return new Promise(function(resolve, reject){
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/family/${familyID}.json`,
			method: 'DELETE'
		}).done(function(){
			resolve();
		});
	});
}

module.exports = {getFamilyMembers, addFamilyMember, deleteFamilyMember};