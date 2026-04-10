// Your PAT (Personal Access Token) can be found in the Account's Security section
const PAT = "fc14093dbefa4c9cb3ea9a18a6d0cebe";
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = "clarifai";
const APP_ID = "main";
// Change these to whatever model and image URL you want to use
const MODEL_ID = "face-detection";

///////////////////////////////////////////////////////////////////////////////////
// YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
///////////////////////////////////////////////////////////////////////////////////
export default async function clarifaiRequest(url) {
  const IMAGE_URL = url;
  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  const clarifaiResponse = await fetch(
    "https://api.clarifai.com/v2/models/" + MODEL_ID + "/outputs",
    requestOptions,
  );
  const JSONResponse = await clarifaiResponse.json();
  return JSONResponse;
}
