/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/**
* Author: [Aron Roberts](github.com/robotros)
*/
import axios from 'axios';
import qs from 'qs';

// API Endpoint URL
const oauthURL = 'https://id.twitch.tv/oauth2/';
const api = 'https://api.twitch.tv/helix/';

// Unique Client-ID obtained at https://twitch.tv
const client = '1qdqw5gt896kmm2mqngp3mepzxod1e';

// twitch Oauth Request
const authRequest = axios.create({
  baseURL: oauthURL,
  paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
  headers: {
    // 'client-id': client,
  },
});

// twitch API Request
const twitchRequest = axios.create({
  baseURL: api,
  paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
  headers: {
    // 'client-id': client,
  },
});


/*
* Returns OAuth Token
*/
export const getToken = () => {
  let request = {
    params: {
      client_id: client,
      redirect_uri: 'https://www.wmpq.org',
      response_type: 'token',
    },
  };
  return authRequest.get('authorize', request)
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.error('error occured connecting to Twitch OAuth');
      });
};


/*
* Checks if Token is Valid
*/
export const validateToken = (token) => {

  authRequest.defaults.headers.common['Authorization'] = 'Bearer '+token;

  let request = {
    params: {
    },
  };
  return authRequest.get('validate', request)
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.error('error occured connecting to Twitch OAuth');
      });
};



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
