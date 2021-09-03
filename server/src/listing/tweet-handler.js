// const {check, validationResult} = require('express-validator');

const Twit = require('twit');


const T = new Twit({
	consumer_key: 'xSoh7h82sAb74UI6Lb4gkja6I',
	consumer_secret: 'EmLMsB6C9aFFR0k4XgK8IE4Wl2k7bnWVg5O4amd3lAeZomAbV7',
	access_token: '1169715885566808064-rnJssabiuUsYhZmgoWt9VKHG6rQZJV',
	access_token_secret: 'CpJKY1aKsiIISMzWH3um1qqd6M5NIi1pcWfZS0C9cEEGH',
	bearer_token: 'AAAAAAAAAAAAAAAAAAAAALnDSgEAAAAAsD8%2FybHUt3Jaz%2FcOTMrpzjhuje8%3D02Iunj5UJwPKTDAHWsk4nQpd5EyKzVlv7oojXxRa7fxImpxURT',
	timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
	strictSSL: true, // optional - requires SSL certificates to be valid.
  });

module.exports = async (req, res) => {

	let items;
	const {query} = req;

	const url = "https://api.twitter.com/1.1/search/tweets.json";

	T.get(url, { q: query.qs, count: 20 }, (err, data, response) => {
		items = data;
		res.status(200).send(items);
	}).catch(e => {
		console.log('error', e);
		res.status(400).send({e})
	});

};
