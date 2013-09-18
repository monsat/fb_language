var $select = document.getElementById("new_language");
chrome.extension.sendRequest({}, function(languages) {
    for (var i = $select.childNodes.length - 1; i >= 0; i--) {
        var $option = $select.childNodes.item(i);
        var _language = $option.value;
        if (languages[_language] != undefined && !languages[_language]) {
            $select.removeChild($option);
        }
    }
});

