// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "My modified kit",
    "productsList": [
        {
            "id": 1,
            "quantity": 4
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 1
        }
    ]
}

test("Should have 'ok' to be true", async () => {
    let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
	} catch (error) {
		console.error(error);
	} expect(data.ok).toBe(true);
});

test('Should have status code 200', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	} expect(actualStatus).toBe(200);
});