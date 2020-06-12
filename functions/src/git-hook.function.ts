import * as functions from 'firebase-functions';

export const githook = functions.https.onRequest((request, response) => {
  console.log(request.body);
  response.send('success');
});
