'use strict';
/*global $ api store listeners*/

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jennifer';

  const createBookmark = function(title, url, rating, desc, callback){
    const newBookmark = JSON.stringify({
      title,
      url,
      rating,
      desc,
    });
    $.ajax({
      'url': `${BASE_URL}/bookmarks`,
      'method':'POST',
      'contentType': 'application/json',
      'data':newBookmark,
      'success':callback
    });
  };
    
  const updateBookmark = function(id, updateData, callback){
    $.ajax({
      'url': `${BASE_URL}/bookmarks/${id}`,
      'method':'PATCH',
      'contentType': 'application/json',
      'data': JSON.stringify(updateData),
      'success':callback
    });
  };
    
  const deleteBookmark = function(id, callback){
    $.ajax({ 
      'url': `${BASE_URL}/bookmarks/${id}`,
      'method': 'DELETE',
      'contentType': 'application/json',
      'success': callback
    });
  };
    
  const getBookmarks = function(callback){
    $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  return {
    createBookmark,
    updateBookmark,
    deleteBookmark,
    getBookmarks
  };
}());
