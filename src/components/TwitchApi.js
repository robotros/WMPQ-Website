// API Endpoint URL
const api = 'https://api.twitch.tv/helix/';

// Unique Client-ID obtained at https://twitch.tv
const client = '1qdqw5gt896kmm2mqngp3mepzxod1e';
const request = {
  method: 'GET',
  headers: {
    'Client-ID': client,
  },
};

/*
* Returns channel information for a list of channels
*/
export const getChannels = (list) => {
  let query='';
  list.forEach((name, i, arr) => {
    (i == 0) ? query = query + name :
      query = query + '&login='+name;
  });
  fetch(`${api}users?login=${query}`, request)
      .then((res) => res.json());
};

/*
* Returns Details of live streams from list
*/
export const getLive = (list) => {
  let query='';
  list.forEach((channel, i, arr) => {
    (i == 0) ? query = query + channel.id :
      query = query + '&user_id=' + channel.id;
  });
  fetch(`${api}streams?user_id=${query}`, request)
      .then((res) => res.json());
};
