if (window.location.href.startsWith('https://opensea.io/assets')) {
  // Unique ID for the className.
  // {[outerText: string]: 'Loading' | 'Rank' | 'Error' }
  const ranks = {};

  // Mouse listener for any move event on the current document.
  document.addEventListener('mousemove', function (e) {
    const {srcElement} = e;
    if (typeof srcElement === 'object') {
      const {classList} = srcElement;
      if (JSON.stringify(classList) === "{\"0\":\"AssetCardFooter--collection\"}") {
        const {parentElement} = srcElement;
        if (typeof parentElement === 'object') {
          const {outerText} = parentElement;
          if (typeof outerText === 'string' && outerText.length) {
            const [collectionName, longCollectionName] = outerText.split('\n');
            const nftId = longCollectionName.substring(longCollectionName.indexOf('#') + 1);
            const maybeResult = ranks[outerText];
            // Should we make the request?
            if (!maybeResult) {
              ranks[outerText] = 'Loading';
              chrome.runtime.sendMessage({collectionName, nftId}, function(response) {
                console.log('🏝️ 🐫', response, '🍌 🦍');
              });
            } else {
              // Prevent excessive requests!
            }
          }
        }
      }
    }
  }, false);
}
