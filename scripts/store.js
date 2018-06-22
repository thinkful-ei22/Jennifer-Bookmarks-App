'use strict';
/*global $ api store listeners*/
const store = (function(){

  const findById = function(id){
    return this.items.find(bookmark => bookmark.id === id);
  };
  const addBookmark = function(bookmark){
    bookmark.expanded=false;
    this.items.push(bookmark);
  }; 

  const toggleExpanded = function(id){
    let bookmark = this.findById(id);  
    bookmark.expanded=!bookmark.expanded;
  };

  const findAndUpdate = function(id, newData){
    let bookmark = this.findById(id);
    bookmark = Object.assign(bookmark, newData);
  };

  const findAndDelete = function(id){
    this.items = this.items.filter(bookmark =>bookmark.id !== id);
  };

  const toggleRatingFilter = function() {
    this.filterByRating= !this.filterByRating;
  };
  return {
    items:[],
    filterByRating: false,
    findById,
    addBookmark,
    toggleExpanded,
    findAndUpdate,
    findAndDelete,
    toggleRatingFilter,
  };
}());

//toggle hidden class
//collect form data when submit button is clicked
//jsonify the data
//POST to API

//render the list
//add it to the store
//generate HTML template
//render on the DOM

//expand an item
//toggle "expanded" class
//render list

//delete an item
//update the store
//render list

//edit an item
//fields become editable
//render list

// const toggleHiddenForm = function(){
//   //toggle the class "hidden on the form element"
// };

// const render = function(){
// //show all items that match the rating filter (default all items)
// };

