// USED ON THE SERVER-SIDE TO DEFINE WHAT DATA SHOULD BE AVAILABLE TO USERS OF THE APPLICATION

import { Demo } from '../lib/collections.js';

Meteor.publish("demo", function () {
    return Demo.find();
});
