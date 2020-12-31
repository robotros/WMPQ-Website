/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/**
* Author: [Aron Roberts](github.com/robotros)
*/
import axios from 'axios';
import qs from 'qs';
import env from 'react-dotenv';

// API Endpoint URL
const oauthURL = 'https://id.twitch.tv/oauth2/';
const api = 'https://api.twitch.tv/helix/';

// Unique Client-ID obtained at https://twitch.tv
const client = env.REACT_APP_TWITCH_CLIENT;
const secret = env.REACT_APP_TWITCH_SECRET;

// twitch Oauth Request
const authRequest = axios.create({
  baseURL: oauthURL,
});

// twitch API Request
const twitchRequest = axios.create({
  baseURL: api,
  paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
  headers: {
    'client-id': client,
  },
});

/*
* Returns OAuth Token
*/
export const getToken = () => {
  let request = {
    params: {
      client_id: client,
      client_secret: secret,
      grant_type: 'client_credentials',
    },
  };
  return authRequest.post('token', qs.stringify(request.params))
      .then((response)=>{
        return response.data;
      }).catch((error)=>{
        console.error('Error connecting to Twitch OAuth \n' + error);
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
        return error;
      });
};

/*
* Returns channel information for a list of channels
*/
export const getChannels = (list, token) => {
  twitchRequest.defaults.headers.common['Authorization'] = 'Bearer '+token;
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
