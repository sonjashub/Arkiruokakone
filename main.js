let ruoka = [" wokki", " makaronilaatikko", " salaatti", " burgeri", " kanakastike", " torillat", " tortillavuoka", " lohikeitto", " uunilohi", " lihapullat", " nakkikastike", " uuniperuna", " pizza", " pasta", " lasagne", " bowl", " kalapuikot", " katkarapucurry", " butter chicken", " paistettu riisi", " kasvissosekeitto", " kana-kookoskeitto", " tomaattikeitto", " risotto"];
function getRandomElements(arr, numElements) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numElements);
}
function annaIdeat () {
    let randomValues = getRandomElements(ruoka, 4);
    document.getElementById("prompti").innerHTML = randomValues;
}