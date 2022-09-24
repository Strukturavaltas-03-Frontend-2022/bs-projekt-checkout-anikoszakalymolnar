const statesUS = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky[D]', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts[D]', 'Michigan', 'Minnesota',
    'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
    'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon',
    'Pennsylvania[D]', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas',
    'Utah', 'Vermont', 'Virginia[D]', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

const statesHU = ['Bács-Kiskun', 'Baranya', 'Békés', 'Borsod-Abaúj-Zemplén', 'Csongrád-Csanád',
    'Fejér', 'Győr-Moson-Sopron', 'Hajdú-Bihar', 'Heves', 'Jász-Nagykun-Szolnok', 'Komárom-Esztergom',
    'Nógrád', 'Pest', 'Somogy', 'Szabolcs-Szatmár-Bereg', 'Tolna', 'Vas', 'Veszprém', 'Zala'];

// megyék hozzáadása
const addStates = (states, textArray) => {
    textArray.forEach(megye => {
        let option = document.createElement("option");
        option.text = megye;
        states.add(option);
    })
}


const countrys = document.querySelector('#inputCountry');

// ország választása 
countrys.addEventListener('change', () => {
    const states = document.querySelector('#inputState');
    const options = document.querySelectorAll('#inputState option');
    // megyék törlése, kivéve az elsőt
    for (let i = 1; i < options.length; i++) {
        states.removeChild(options[i]);
    }

    const value = countrys.value;
    if (value === "US") {
        addStates(states, statesUS);
    }
    else if (value === "HU") {
        addStates(states, statesHU);
    }
});

