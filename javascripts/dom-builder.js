"use strict";

let $ = require('jquery');

function showFamily(familyData) {
   console.log(familyData);
   let $famDisplay =
  $(`<div class="list-container box col s12">
      <ul class="family-list">
      </ul>
    </div>`);
  $('#list-family').html($famDisplay);
   for (let member in familyData) {
     let currentPerson = familyData[member];
     let familyList = `<li>Name: ${currentPerson.name}</li>
                      <li>Age: ${currentPerson.age}</li>
                      <li>Gender: ${currentPerson.gender}</li>
                      <li>Skills: ${currentPerson.skills}</li>
                      <a data-delete-id id="${member}" class="delete-btn waves-effect waves-light btn">delete</a>`;
    $('.family-list').append(familyList);
   }
 }

module.exports = {showFamily};