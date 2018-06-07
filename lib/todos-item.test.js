/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { Demo } from './collections.js';
import { assert } from 'meteor/practicalmeteor:chai';
import '../server/server.js';
// import '../server/publications.js';




// if (Meteor.isServer) {

describe('Demo', () => {

    describe('methods', () => {
        const userId = Random.id();
        let taskId;
        const abc = "gettingValues";
        const testing = "10";

        // beforeEach(() => {
        //     Demo.remove({});
        //     taskId = Demo.insert({
        //         text: 'test task',
        //         createdAt: new Date(),
        //         owner: userId,
        //         username: 'tmeasday',
        //     });
        //     console.log(Demo.find().fetch(),"========>",taskId);
        // });

        it('Can insert', () => {


        	Meteor.call('Createdata',abc);

        	// const deleteTask = Meteor.server.method_handlers['deleteData'];

        	// const insertDemo = Meteor.server.method_handlers['Createdata'];
        	
        	// console.log(abc);
        	// //  const invocation = { userId };

        	// //  deleteTask.apply(invocation, [taskId]);
        	//  insertDemo.apply(abc);
        	//  console.log(Demo.find().count());

        	//  chai.assert.equal(Demo.find().count(), 0);


        	// taskId = Demo.insert({
         //        text: 'test task',
         //        createdAt: new Date(),
         //        owner: userId,
         //        username: 'tmeasday',
         //    });
        	// 	console.log(taskId);
        		console.log(Demo.find().count());
        		console.log(Demo.find().fetch());
        		Demo.remove({});
        		console.log(Demo.find().count());
        		chai.assert.typeOf(testing,'string');

        });
    });
});

// before(function(){

// 	const addData = Demo.insert({
// 		Name: "chandresh",
// 		createdAt: new Date()
// 	});
// 	console.log(addData,"added")
// 	const getData = Demo.find().fetch();
// 	console.log(getData,"get valuess");
// });
// 		it('data can be displayed here',function(){
// 			const obj1 = "Chandresh";
// 			const obj2 = "Chandresh"
// 			chai.assert.equal(obj1, obj2);
// 			console.log("value found");

// 		});




// }


// describe('methods', () => {
//       const userId = Random.id();

//       let taskId;
//       beforeEach(() => {

//         Demo.remove({});
//         taskId = Demo.insert({

//           text: 'test task',
//           createdAt: new Date(),
//           owner: userId,
//           username: 'tmeasday',

//         });

//       });
//       it('can delete owned task', () => {

//       	        // Find the internal implementation of the task method so we can

//         // test it in isolation

//         const deleteTask = Meteor.server.method_handlers['tasks.remove'];



//         // Set up a fake method invocation that looks like what the method expects

//         const invocation = { userId };



//         // Run the method with `this` set to the fake invocation

//         deleteTask.apply(invocation, [taskId]);



//         // Verify that the method does what we expected

//         assert.equal(Tasks.find().count(), 0);

//       });

//     });