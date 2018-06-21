'use strict';

const store = (function(){
  const items=[
    {
      title: 'Sample',
      rating: 5,
      expanded: false,
      id: 'randomid'  
    },
    {
      title: 'Sample 2',
      rating: 4,
      expanded: true,
      id: 'randomid2'  
    },
    {
      title: 'Sample 3',
      rating: 3,
      expanded: false,
      id: 'randomid3'  
    }
  ];

  const findById = function(id){
    return this.items.find(bookmark => bookmark.id === id);
  };
  const addBookmark = function(bookmark){
    this.items.push(bookmark);
  };

  const toggleExpanded = function(){
    this.items.expanded=!this.items.expanded;
  };

  const findAndUpdate = function(id, newData){
    let bookmark = this.findById(id);
    bookmark = Object.assign(bookmark, newData);
  };

  const findAndDelete = function(id){
    this.items = this.items.filter(bookmark =>bookmark.id !== id);
  };

  return {
    items,
    findById,
    addBookmark,
    toggleExpanded,
    findAndUpdate,
    findAndDelete
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

