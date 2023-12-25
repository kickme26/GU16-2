const getDataDef = () => {
    var url = "https://ipapi.co/json/";
    fetchPromise(url);
}

const fetchPromise = (url) => {
    fetch(url)
        .then(response => response.json())
        .then((meanings) => {
            
            displayMeanings(meanings);
        })
        .catch(error => {
            console.error('Error:', error);
            displayNoMeaning();
        });
};
const displayMeanings = (definitions) => {
    var meaningDiv = document.getElementById('Meaning');
    meaningDiv.innerHTML = '';
    console.log(definitions);

    if (definitions && Object.keys(definitions).length > 0) {
        var Keyword = document.createElement('h4');
        Keyword.innerHTML = "Your Details: ";
        var ulElement = document.createElement('ul');

        meaningDiv.appendChild(Keyword);
        const kvpairs = Object.entries(definitions);
        kvpairs.forEach(([k, v]) => {
            var liElement = document.createElement('li');
            liElement.textContent = `${k}: ${v}`;
            ulElement.appendChild(liElement);
        });
        meaningDiv.appendChild(ulElement);
    } else {
        meaningDiv.textContent = 'No details found.';
    }
};

const displayNoMeaning = () => {
    var meaningDiv = document.getElementById('Meaning');
    meaningDiv.innerHTML = '';
    var Keyword = document.createElement('h4');
    Keyword.innerHTML = document.getElementById('search').value;
    meaningDiv.appendChild(Keyword);
    var noMeaningElement = document.createElement('p');
    noMeaningElement.textContent = 'No definitions found.';
    meaningDiv.appendChild(noMeaningElement);
};