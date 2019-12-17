const knex = require("./client");

// this is a helper module for querying our db
module.exports = {
  // get all clucks
  getAll() {
    return knex("clucks").select("*")
        .orderBy('createdAt', 'desc')
  },
  // get one cluck
  getOne(id) {
    return knex("clucks")
      .where("id", id)
      .first();
  },
  // create a cluck
  create(cluck) {
    return knex("clucks").insert(cluck, "*");
  },
  // update a cluck
  update(id, cluck) {
    console.log("i am about to update cluck: ", cluck);
    return knex("clucks")
      .where("id", id)
      .update(cluck, "*");
  },
};