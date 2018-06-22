'use strict';
/*global $ api store listeners*/
//need to enclose in an IFFE

const listeners= (function(){

  const handleCreateClick = function(){ 
    $('#add-bookmark').on('click',event => {
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
      let rating = $('input[type="radio"]:checked').val();
      let desc = $('#description').val();
      api.createBookmark(title, URL, rating, desc, (newBookmark)=>{
        store.addBookmark(newBookmark);
        render();
        let form = $('#create-form');
        form.toggleClass('hidden');
      });
    });
  };

  const generateRatingHtml = function(rating){
    let output;
    switch(rating){
    case 5:
      output=
        ` 
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          `;
      break;
    case 4:
      output=
        ` 
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          `;
      break;
    case 3:
      output=
        ` 
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          `;
      break;
    case 2:
      output=
        ` 
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          `;
      break;
    case 1:
      output=
        ` 
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          `;
      break;
    }
    return output;
  };

  const generateBookmarkHtml= function(item){
    let title = item.title;
    let id=item.id;
    let description = item.desc;
    if(item.expanded === true){
      return `  
      <li class="list-item expanded" id=${id}>
        <div class="title">
          <h3>${title}</h3>
        </div>
        <div class="trash">
          <button type="submit" name="delete-bookmark" class="delete"><span class="fa fa-trash-o"></span></button>
        </div>
        <div class="ratings">
            ${generateRatingHtml(item.rating)}
        </div>
        <div>
          <p>${description}</p>
        </div>
        <div class="item-button-container">
          <button type="submit" name="visit-site" id="visit-site">Visit Site</button>
          <button type="submit" name="edit-bookmark" id="edit-bookmark"><span class="fa fa-pencil"></span><span> Edit</span></button>
        </div>
      </li>`;
    } 
    return `
    <li class="list-item" id=${id}>
        <div class="title">
            <h3>${title}</h3>
        </div>
        <div class="trash">
            <button type="submit" name="delete-bookmark" class="delete"><span class="fa fa-trash-o"></span></button>
        </div>
        <div class="ratings">
            ${generateRatingHtml(item.rating)}
        </div>
    </li>`;
  };

  const generateBookmarkList = function(items){
    items = store.items;
    const html = items.map((item)=>generateBookmarkHtml(item));
    return html.join('');
  };

  const render = function(){
    let items = store.items;
    let rating = parseInt($('select option:checked').val());
    if (store.filterByRating){
      items=store.items.filter(item => item.rating >= rating);
      const bookmarkString = generateBookmarkList(items);
      $('ul.bookmark-results').html(bookmarkString); 
    }
    else {
      const bookmarkString = generateBookmarkList(items);
      $('ul.bookmark-results').html(bookmarkString);
    }};

  const handleDeleteBookmark = function(){
    $('ul').on('click', '.delete', event => {
      const id = $(event.currentTarget).parent().parent().attr('id');
      console.log(id);
      // store.findAndDelete(id);
      api.deleteBookmark(id, ()=>{
        store.findAndDelete(id);
        render();
      });
    });
  };
  
  const handleExpand = function(){
    $('ul').on('click', '.title', event => {
      const id = $(event.currentTarget).parent().attr('id');
      const item = store.findById(id);
      store.findAndUpdate(id, {expanded: !item.expanded});
      render();
    });
  };

  const handleRatingFilter = function(){
    $('select').on('change', () =>{
      let ratingFilter = parseInt($('select option:checked').val());
      if(ratingFilter!==0){
        store.filterByRating=true;
        render();
      }
      render();
    });
  };
  
  const bindEventListeners = function(){
    handleCreateClick();
    handleNewBookmark();
    handleExpand();
    handleDeleteBookmark();
    handleRatingFilter();
  };
  return {
    render,
    bindEventListeners,   
  };

}());