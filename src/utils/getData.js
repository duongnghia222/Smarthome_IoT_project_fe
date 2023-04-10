import axios from 'axios';
import { username,key } from "./env";

export default async function getData (feed_id){
    const url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed_id}/data?limit=7`;
    const options = {
        headers: {
          'X-AIO-Key': key,
        }
      };
    let res = await axios.get(url, options);
    return res.data.map(e=>e.value).reverse();
}