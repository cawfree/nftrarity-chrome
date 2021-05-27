import '@babel/polyfill';

import {nftRarityDotNet} from 'nftrarityjs';

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const {collectionName, nftId} = request;
    nftRarityDotNet(collectionName, nftId)
      .then((rank) => sendResponse({rank, collectionName, nftId}))
      .catch(error => sendResponse({error}));
    return true;
  }
);
