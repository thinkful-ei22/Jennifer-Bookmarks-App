'use strict';
/*global $ api store listeners*/
$(function(){
  listeners.bindEventListeners();
  api.getBookmarks(function(bookmarks){
    bookmarks.forEach(function(bookmark){
      store.addBookmark(bookmark);
    });
    listeners.render();
  });
});
