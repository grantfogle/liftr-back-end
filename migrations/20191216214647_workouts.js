
exports.up = function (knex) {
    return knex.schema.createTable('workouts', (workout) => {
        workout.increments('id');
        workout.string('name');
        workout.string('type');
        workout.string('equipment');
        workout.string('exercise');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('workouts');
};
