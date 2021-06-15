// Import Templates
import dropdownList from '../template/dropdown-list.hbs';
import countryTable from '../template/country-table.hbs';

// Import debounce
import debounce from 'lodash.debounce';

// Import Notification
import { success, error, warning } from './notification';

// Import Spinner
import spinner from './spinner';

// Import Functions
import fetchCountries from './fetchCountries';
import selectCountry from './select-country';
import dataClean from './data-clean';

// Import Variables
import refs from './references';
refs.dropdown.hidden = true;

// Event Handlers
refs.inputCountrySearch.addEventListener('input', debounce(renderList, 500));
refs.dropdown.addEventListener('click', e =>
    selectCountry(e, refs.inputCountrySearch, refs.dropdown),
);

spinner.stop();

// Functions
function renderList(e) {
    spinner.spin(refs.body);

    refs.dropdown.hidden = true;
    const userRequest = e.target.value.trim();
    refs.inputCountrySearch.innerHTML = '';

    if (userRequest.length < 1) {
        spinner.stop();

        dataClean(refs.dropdown, refs.wrapper);
        return;
    }

    fetchCountries(userRequest).then(data => {
        if (!data) {
            warning.showToast();

            spinner.stop();
            return;
        }

        if (data.length >= 2 && data.length <= 10) {
            spinner.stop();

            console.log(data);

            refs.dropdown.hidden = false;
            dataClean(refs.dropdown, refs.wrapper);

            const markup = data.map(country => dropdownList(country)).join('');
            return refs.dropdown.insertAdjacentHTML('beforeend', markup);
        }

        if (data.length === 1) {
            spinner.stop();

            refs.inputCountrySearch.value = '';

            success.showToast();

            return (refs.wrapper.innerHTML = countryTable(...data));
        }

        error.showToast();
    });
}
