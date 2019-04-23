/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/**
* Author: [Aron Roberts](github.com/robotros)
*/
import axios from 'axios';
import qs from 'qs';

// API Endpoint URL
const api = 'https://api.twitch.tv/helix/';

// Unique Client-ID obtained at https://twitch.tv
const client = '1qdqw5gt896kmm2mqngp3mepzxod1e';


const twitchRequest = axios.create({
  baseURL: api,
  paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
  headers: {
    'client-id': client,
  },
});


/*
* Returns channel information for a list of channels
*/
export const getChannels = (list) => {
  let query=[];
  list.forEach((name, i, arr) => {
    query.push(name.channel);
  });

  let request = {
    params: {
      login: query,
    },
  };
  return twitchRequest.get('users', request)
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.error('error occured connecting to twitchRequest');
      });
};


/*
* Returns Details of live streams from list
*/
export const getLive = (list) => {
  let query=[];
  list.forEach((channel, i, arr) => {
    query.push(channel.id);
  });

  let request = {
    params: {
      user_id: query,
    },
  };

  return twitchRequest.get('streams', request)
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.error('error occured connecting to twitchRequest');
      });
};
