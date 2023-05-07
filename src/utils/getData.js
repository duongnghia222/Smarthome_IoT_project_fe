import axios from 'axios';
const key = process.env.REACT_APP_KEY
const username = process.env.REACT_APP_NAME

export default async function getData (feed_id){
    const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data?limit=7`;
    const options = {
        headers: {
          'X-AIO-Key': key,
        }
      };
    let res = await axios.get(url, options);
    console.log("sent request ")
    return res.data.map(e=>e.value).reverse();
}