module.exports = {


  friendlyName: 'Index',


  description: 'Index home.',


  inputs: {

  },


  exits: {

  },


  fn: async function (input){
    const res = this.res;
    res.send({
      success: true,
      message: 'welcome to the API for react monolith app'
    });
  }
};
