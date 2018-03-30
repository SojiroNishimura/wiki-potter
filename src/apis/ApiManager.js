const END_POINT = 'https://en.wikipedia.org/w/api.php';
const ACTION = 'action=query';
const FORMAT = 'format=json';
const PROP = 'prop=revisions';
const RVPROP = 'rvprop=content';
const REQUEST_URI = `${END_POINT}?${ACTION}&${FORMAT}&${PROP}&${RVPROP}`;

export async function fetchWiki(charaName) {
  if (!charaName) {
    console.warn('Invalid argument: ' + charaName);
    return;
  }

  const origin = 'origin=http://localhost:8000';
  const reqUri = `${REQUEST_URI}&titles=${encodeURIComponent(charaName)}&${origin}`;

  // FIX: Can't execute cors call maybe because of a issue related to hostname. Disabled temporaly.
  // fetch(reqUri, {
  //   method: 'GET',
  //   mode: 'cors',
  //   // headers: {
  //   //   'api-user-agent': 'http://localhost:8000; sjiro.shinon@gmail.com',
  //   // }
  // }).then(res => {
  //   if (res.ok) {
  //     return res.json();
  //   }
  // }).catch(err => {
  //   console.error(err);
  // });
};