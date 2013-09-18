var lsKey = 'fb_language';
var _defaults = {
    en_US: 1,
    ja_JP: 1
};
var $options = document.getElementsByName("langs");
var checkChecked = function() {
    languages = {};
    for (var i = 0; i < $options.length; i++) {
        languages[$options[i].value] = $options[i].checked ? 1 : 0;
    }
    save(languages);
}
var save = function(_languages) {
    return localStorage.setItem(lsKey, JSON.stringify(_languages));
}
var load = function() {
    return JSON.parse(localStorage.getItem(lsKey));
}
// ini
var savedLanguages = load() || _defaults;
for (var i = 0; i < $options.length; i++) {
    $options[i].addEventListener('change', function(e){
        checkChecked();
    });
    $options[i].checked = !!savedLanguages[$options[i].value];
}
save(savedLanguages);

