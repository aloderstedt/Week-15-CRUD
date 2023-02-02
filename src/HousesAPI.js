const HOUSES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesAPI {
    get = async () => {
        try {
            const response = await fetch(HOUSES_ENDPOINT);
            const data = await response.json();
            return data;
        } catch (e) {
            console.log('There was an issue.', e);
        }
    }

    put = async (house) => {
        try {
            const response = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to be an issue.', e);
        }
    }

    delete = async (house) => {
        try {
            const response = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }

    post = async (houseName) => {
        try {
            const response = await fetch(HOUSES_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(houseName)
            });
            return await response.json();
        } catch (e) {
            console.log('There seems to have been an error.', e);
        }
    }
    
}

export const housesApi = new HousesAPI();

