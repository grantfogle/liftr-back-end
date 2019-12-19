
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        { id: 1, name: '5x5 Strength', type: 'Strength', equipment: 'Full Gym' },
        { id: 2, name: 'Couch to 5k', type: 'Cardio', equipment: 'Running' },
        { id: 3, name: 'Get Ripped', type: 'Hypertrophy', equipment: 'Full Gym' },
        { id: 4, name: 'Simple but Sinister', type: 'Strength', equipment: 'Kettlebells' },
        { id: 5, name: 'Daily Soldier', type: 'Bodyweight', equipment: 'Bodyweight' }
      ]);
    });
};
