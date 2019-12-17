
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        { id: 1, name: '5x5 Strength', type: 'Strength', equipment: 'Full Gym' },
        { id: 2, colName: 'Couch to 5k', type: 'Cardio', equipment: 'Running' },
        { id: 3, colName: 'Get Ripped', type: 'Hypertrophy', equipment: 'Full Gym' },
        { id: 4, colName: 'Simple but Sinister', type: 'Strength', equipment: 'Kettlebells' },
        { id: 5, colName: 'Daily Soldier', type: 'Bodyweight', equipment: 'Bodyweight' }
      ]);
    });
};
