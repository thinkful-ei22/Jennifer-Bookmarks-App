'use strict';
/*global $*/

const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jennifer';

  const createBookmark = function(title, url, callback){
    const newBookmark = JSON.stringify({
      title,
      url,
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
    console.log('updateBookmark needs to make a PATCH request to the API');
    $.ajax({
      'url': `${BASE_URL}/bookmarks/${id}`,
      'method':'PATCH',
      'contentType': 'application/json',
      'data': JSON.stringify(updateData),
      'success':callback
    });
  };
    
  const deleteBookmark = function(id, callback){
    console.log('deleteBookmark needs to make a DELETE request to the API');
    $.ajax({ 
      'url': `${BASE_URL}/bookmarks/${id}`,
      'method': 'DELETE',
      'contentType': 'application/json',
      'success': callback
    });
  };
    
  const getBookmarks = function(callback){
    return $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  return {
    createBookmark,
    updateBookmark,
    deleteBookmark,
    getBookmarks
  };
}());
