// eslint-disable-next-line no-undef
const config = require('../config');

test('cart id 1 should be deleted: true', async () => {
    let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		data = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data.ok).toBe(true);
});
test('status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2`, {
			method: 'DELETE',
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});
