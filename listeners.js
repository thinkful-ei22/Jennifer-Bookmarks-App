'use strict';
/*global $*/
//need to enclose in an IFFE

const listeners= (function(){

  const handleCreateClick = function(){ 
    $('#button-container').on('click','#add-bookmark',event => {
      event.preventDefault();
      let form = $('#create-form');
      form.toggleClass('hidden');
    });
  };

  const handleNewBookmark = function(){
    $('#create-form').on('click', '#submit-new', event=>{
      event.preventDefault();
      const title = $('#title').val();
      const URL = $('#url').val();
      api.createBookmark(title, URL, (newBookmark)=>{
        store.addBookmark(newBookmark);
        render();
      });
    });
  };

  const generateBookmarkHtml= function(bookmark){
    let title = 'test';
//     if(bookmark.expanded === true){
//       return `
//        <li class="list-item expanded">
//        <h3>${title}</h3>
//        <div>
//            <span class="fa fa-star checked"></span>
//            <span class="fa fa-star"></span>
//            <span class="fa fa-star"></span>
//            <span class="fa fa-star"></span>
//            <span class="fa fa-star"></span>
//        </div>
//        <div>
//            <p>Sample description...</p>
//        </div>
//        <button type="submit" name="visit-site" id="">Visit Site</button>
//        <button type="submit" name="edit-bookmark" id="">Edit</button>
//        <button type="submit" name="delete-expanded-bookmark" id="">Delete</button>
//    </li>`; 
//     }
    return `
    <li class="list-item">
        <h3>${title}</h3>
        <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </div>
        <button type="submit" name="delete-bookmark" id="">Delete</button>
    </li>`;
  };

  const generateBookmarkList = function(bookmarks){
    const items = bookmarks.map((item)=>generateBookmarkHtml(item));
    return items.join('');
  };

  const render = function(){
      console.log('render ran');
    let items = store.items;
    //add some filters here regarding rating
    const bookmarkString = generateBookmarkList(items);
    $('ul').html(bookmarkString);
  };
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
    handleNewBookmark();
    generateBookmarkHtml();
    generateBookmarkList();
  };
  return {
    render,
    bindEventListeners,   
  };

}());