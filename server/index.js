const _ = require('lodash');

const user = {
  apple: 2000,
  deep: {
    status: 'pending',
  },
};

const copyUser = _.cloneDeep(user);

console.log(user === copyUser);
