'use strict';
/*global $*/
//need to enclose in an IFFE

const listeners= (function(){
//   const generateCreateForm = function(){  
//     return `
//        ;
//   };

  const handleCreateClick = function(){ 
    $('#button-container').on('click','#add-bookmark',event => {
      event.preventDefault();
      let form = $('#create-form');
      form.toggleClass('hidden');
    });
  };

  // const handleNewBookmark = function(){
  //   $('#create-form').on('click', '#submit-new', event=>{
  //       event.preventDefault();
  //       const newTitle = $('#title').val();
  //       api.createBookmark(newTitle, (newBookmark)=>{
  //           store.addBookmark(newBookmark);
  //           render();
  //       });
  //   });
  // };
  // const handleDeleteBookmark = function(){
  //   console.log('handleDeleteBookmark needs to listen for a click on the delete button and run the function that will remove the item from the store');
  // };
  
  // const handleUpdateBookmark = function(){
  //   console.log('handleUpdateBookmark needs to listen for a click on the edit button, run a function that allows for editing and one that will update the store');
  // };
  
  // const handleExpand = function(){
  //   console.log('handleExpand needs to listen for a click on the item and run a function that toggles the expanded class');
  // };
const bindEventListeners = function(){
    handleCreateClick(),
}
  return {
    bindEventListeners,
  };

}());