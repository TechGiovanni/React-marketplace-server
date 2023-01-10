const homeRouter = require('express').Router()

const categories = [
	{
		id: 1,
		title: 'Hats',
	},
]

homeRouter.get('/', (req, res) => {
	res.json({ message: categories })
})

module.exports = homeRouter
