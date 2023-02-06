const { validationResult, matchedData } = require('express-validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const State = require('../models/State');
const User = require('../models/User');
const Category = require('../models/Category');
const Ad = require('../models/Ad');

module.exports = {
	getCategories: async (req, res) => {
		const cats = await Category.find();
		let categories = [];
		for (let i in cats) {
			categories.push({
				...cats[i]._doc,
				img: `${process.env.BASE}/assets/images/${cats[i].slug}.png`
			})
		}
		res.json({ categories });
	},
	addAction: async (req, res) => {

	},
	getList: async (req, res) => {

	},
	getItem: async (req, res) => {

	},
	editAction: async (req, res) => {

	}
};