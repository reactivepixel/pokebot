module.exports = function(sequelize, DataTypes) {
	var User;
	User = sequelize.define('User', {
		slack_id: {
			type: Sequelize.STRING,
			primaryKey: true,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Unique user ID generated by Slack"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "slack_id" }
		},
		slack_name: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true,
			hasComment: {type: Sequelize.STRING, field: "Username registered in Slack"},
			fieldWithUnderscores: { type: Sequelize.STRING, field: "slack_name" }
		},
		slack_role: {
			type: Sequelize.STRING,
			allowNull: false
		}
	}, {
		paranoid: true,
		underscored: true,
		underscoredAll: true,
		deletedAt: 'deleted_at',
		tableName: 'users'
	});

	//	This will force drop on the table if it exists.
	User.sync({force: true}).then(function () {
		//	Table created - Force insert my user object for testing
		return User.create({
			slack_id: 'U09EUDR7G',
			slack_name: 'Studnicky',
			slack_role: 'admin'
		});
	});

	return User;
};