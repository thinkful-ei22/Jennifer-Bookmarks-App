'use strict';
/*global $ api store listeners*/
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
        let form = $('#create-form');
        form.toggleClass('hidden');
      });
    });
  };

  const generateRatingHtml = function(item){
    if(item.rating===5){
      return `
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
        `;
    } 
    else if(item.rating===4){
      return `  
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star"></span>
           `;
    } 
    else if(item.rating===3){
      return `  
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star"></span>
               <span class="fa fa-star"></span>
           `;
    }
    else if(item.rating===2){
      return `  
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
               `;
    }
    else if(item.rating===1){
      return ` 
                   <span class="fa fa-star checked"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>
                   <span class="fa fa-star"></span>`;
    }
  };

  const generateBookmarkHtml= function(item){
    let title = item.title;
    let rating = generateRatingHtml(item);
    console.log(rating);
    if(item.expanded === true){
      return `  
        <li class="list-item expanded" id="${item.id}>
           <h3>${title}</h3>
           <div>
               ${rating}
           </div>
           <div>
               <p>${item.desc}</p>
           </div>
           <button type="submit" name="visit-site" id="">Visit Site</button>
           <button type="submit" name="edit-bookmark" id="">Edit</button>
           <button type="submit" name="delete-expanded-bookmark" id="">Delete</button>
       </li>`;
    } 
    return `
    <li class="list-item" id="${item.id}">
        <h3>${title}</h3>
        <div>
            ${rating}
        </div>
        <button type="submit" name="delete-bookmark" id="">Delete</button>
    </li>`;
  };

  const generateBookmarkList = function(){
    const items = store.items;
    const html = items.map((item)=>generateBookmarkHtml(item));
    return html.join('');
  };

  const render = function(){
    console.log('render ran');
    let items = store.items;
    //add some filters here regarding rating
    const bookmarkString = generateBookmarkList(items);
    console.log(bookmarkString);
    $('ul').html(bookmarkString);
  };
  // const handleDeleteBookmark = function(){
  //   console.log('handleDeleteBookmark needs to listen for a click on the delete button and run the function that will remove the item from the store');
  // };
  
  // const handleUpdateBookmark = function(){
  //   console.log('handleUpdateBookmark needs to listen for a click on the edit button, run a function that allows for editing and one that will update the store');
  // };
  //   const getItemIdFromElement = function (item) {
  //     return $(item).data('id');
  //   };

  const handleExpand = function(){
    $('ul').on('click', '.list-item', event => {
      const id = $(event.currentTarget).attr('id');
      const item = store.findById(id);
      console.log(item);
      store.findAndUpdate(id, {expanded: !item.expanded});
      render();
    });
  };
  
  const bindEventListeners = function(){
    handleCreateClick();
    handleNewBookmark();
    handleExpand();
  };
  return {
    render,
    bindEventListeners,   
  };

}());