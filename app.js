const express = require('express');
const app = express();
const port = 3000;

var list = [
	{
		id: 0,
		productName: 'Camisa',
		price: 35.99,
		description: 'Camisa feia que não uso mais'
	},
	{
		id: 1,
		productName: 'Bermuda',
		price: 25.99,
		description: 'Veiga viado'
	}
];

app.get('/:id?', (req, res) => {
	if (req.params.id == null) {
		return res.json(list);
	}
	return res.json(list[req.params.id]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
