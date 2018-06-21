'use strict';


const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/jennifer';

  const createBookmark = function(title, callback){
    console.log('createBookmark needs to make a POST request to the API');
    const newBookmark = JSON.stringify({
      title,
    });
    $.ajax({
      'url': `${BASE_URL}/bookmarks`,
      'method':'POST',
      'constentType': 'application/json',
      'data':newBookmark,
      'success':callback
    });
  };
    
  const updateBookmark = function(id, updateData, callback){
    console.log('updateBookmark needs to make a PATCH request to the API');
    $.ajax({
      'url': `${BASE_URL}/bookmarks/${id}`,
      'method':'PATCH',
      'constentType': 'application/json',
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
    console.log('getBookmarks needs to make a GET request to the API and add data to store');
    return $.getJSON(`${BASE_URL}/bookmarks`, callback);
  };

  return {
    createBookmark,
    updateBookmark,
    deleteBookmark,
    getBookmarks
  };
}());
