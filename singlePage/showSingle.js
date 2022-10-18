import fetchSingle from './fetchSingle.js';
import displaySingle from './displaySingle.js';

const showSingle = async(url) => {
 const dataInfo = await fetchSingle(url);
 const display = await displaySingle(dataInfo);
};

export default showSingle;