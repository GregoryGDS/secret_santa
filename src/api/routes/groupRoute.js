module.exports = (app) => { //app pour affecter toutes les routes
	const groupController = require('../controllers/groupController');

	app.route('/group')
	.get(groupController.get_all_groups)
	.post(groupController.create_a_group);

	// mélange de chaque groupe
	app.route('/group/shuffle')
	.get(groupController.shuffleTotal);

	app.route('/group/:name_group')
	.get(groupController.get_a_group)
	.put(groupController.update_a_group)
    .delete(groupController.delete_a_group);


}