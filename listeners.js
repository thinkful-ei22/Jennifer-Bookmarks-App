// 'use strict';

// //need to enclose in an IFFE

// const handleCreateClick = function(){
//   console.log('handleCreateClick needs to listen for a click on the create button and implement a function that creates HTML from the data provided');
//   $('.button-container').on('click','#add-bookmark',event =>{
//     event.preventDefault();
//     store.toggleHiddenForm();
//     render();
//   });
// };

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