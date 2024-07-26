// eslint-disable-next-line no-undef
const config = require('../config');

test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('number of warehouses should be greater than 0', async () => {
    let data;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
		data = await response.json();
    } catch (error) {
        console.error(error);
    }
    const countStores = data.length;
    expect(countStores).toBeGreaterThan(0);
});

