

import { Demo } from '../../lib/collections.js';
import { Fss4_pdfdata } from '../../lib/collections.js';


Template.Demos.events({


    'click #fillpdf': function(event) {
        event.preventDefault();
        
        var elect_Name = "Chandresh";
        var employ_No = "123456";
        var room_No = "Y-405";
        var date_incorp = "08/10/1995";
        var zip_Code = "123456";
        var state_incorp = "i dont know";
        var destination_pdfname = "first.pdf";
        Meteor.call('f2553_pdf',elect_Name,employ_No,room_No,date_incorp,zip_Code,state_incorp);

    },

    'click #fillpdf1': function(event){

        event.preventDefault();
            
        var destination_pdfname = "second.pdf";    

        Meteor.call('fss4_pdf',destination_pdfname);


    }


})

