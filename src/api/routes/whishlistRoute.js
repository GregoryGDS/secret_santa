module.exports = (app) => { //app pour affecter toutes les routes
	const whish_listController = require('../controllers/whish_listController');

	app.route('/user/:user_id/whish_list')
	.get(whish_listController.get_all_whish)
	.post(whish_listController.create_a_whish);

	app.route('/whish_list/:whish_list_id')
	.get(whish_listController.get_a_whish)
	.put(whish_listController.update_a_whish)
	.delete(whish_listController.delete_a_whish);
}