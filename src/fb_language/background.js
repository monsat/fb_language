var lsKey = 'fb_language';
var _defaults = {
    en_US: 1,
    ja_JP: 1
};
chrome.browserAction.onClicked.addListener(function(currentTab){
    chrome.tabs.create({
        url: 'https://www.facebook.com/settings?tab=account&section=language&view',
        selected: true
    }, function(newTab){
    });
});
chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        var languages = JSON.parse(localStorage.getItem(lsKey)) || _defaults;
        sendResponse(languages);
    }
);
