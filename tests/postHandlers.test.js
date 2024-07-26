// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "deliveryTime": 9,
    "products": [
        {
            "id": 1,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 3
        }
    ]
}

test(' status code should be 200', async () => {
    let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('warehouse should be working: true', async () => {
    let data;
	try {
		const response = await fetch(`${config.API_URL}/everything-you-need/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		data = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data.isWarehouseWorking).toBe(true);
});
