var pdfFiller = require('pdffiller');

import { Demo } from '../lib/collections.js';
import { Fss4_pdfdata } from '../lib/collections.js';

Meteor.startup(() => {

    Meteor.methods({

        'f2553_pdf': function (elect_Name, employ_No, room_No, date_incorp, zip_Code, state_incorp, destination_pdfname) {
            // console.log(test);

            var sourcePDF = process.env.PWD + '/f2553.pdf';
            var destinationPDF = process.env.PWD + '/' + destination_pdfname;
            var nameRegex = null;

            var data = {

                // Election Information //
                'topmostSubform[0].Page1[0].p1-t1[0]': elect_Name, // Name
                'topmostSubform[0].Page1[0].p1-t2[0]': employ_No, // Employer identification number
                'topmostSubform[0].Page1[0].p1-t4[0]': room_No, // Number, street, and room or suite no
                'topmostSubform[0].Page1[0].p1-t5[0]': date_incorp, // Date incorporated
                'topmostSubform[0].Page1[0].p1-t6[0]': zip_Code, // City or town, state, and ZIP code
                'topmostSubform[0].Page1[0].p1-t7[0]': state_incorp, // State of incorporationare
                //==========================================

                'topmostSubform[0].Page1[0].p1-cb1[0]': 9,
                'topmostSubform[0].Page1[0].p1-cb2[0]': 1,
                'topmostSubform[0].Page1[0].p1-t10[0]': 'test3', // E section
                'topmostSubform[0].Page1[0].p1-cb3[0]': 2, //
                'topmostSubform[0].Page1[0].p1-cb3[1]': 2, //
                'topmostSubform[0].Page1[0].p1-t11[0]': 'test6', // F(2) text field
                'topmostSubform[0].Page1[0].p1-cb3[2]': 2, //
                'topmostSubform[0].Page1[0].p1-cb3[3]': 2, //
                'topmostSubform[0].Page1[0].p1-t12[0]': 'test9', // F(4) text field
                'topmostSubform[0].Page1[0].p1-cb7[0]': 2, //
                'topmostSubform[0].Page1[0].p1-t13[0]': 'test11', // H section
                'topmostSubform[0].Page1[0].p1-t15[0]': 'test12', // I section
                'topmostSubform[0].Page1[0].p1-t16[0]': 'test13', // H & I section
                'topmostSubform[0].Page1[0].p1-t17[0]': 'test14', // H & I section
                'topmostSubform[0].Page1[0].p1-t18[0]': 'test15', // H & I section
                'topmostSubform[0].Page1[0].p1-t19[0]': 'test16', // H & I section
                'topmostSubform[0].Page1[0].p1-t20[0]': 'test17', // H & I section
                'topmostSubform[0].Page1[0].p1-t21[0]': 'test18', // H & I section
                'topmostSubform[0].Page1[0].p1-t22[0]': 'test19', // H & I section
                'topmostSubform[0].Page1[0].p1-t23[0]': 'test20', // H & I section
                'topmostSubform[0].Page1[0].p1-t24[0]': 'test21', // H & I section
                'topmostSubform[0].Page1[0].p1-t25[0]': 'test22', // Sign Here (Title section)
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[1].p2-t1[0]': 'test23',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[1].p2-t1[1]': 'test24',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[1].p2-t2[0]': 'test25',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[1].p2-t2[1]': 'test26',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[1].p2-t3[0]': 'test27',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[1].p2-t4[0]': 'test28',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[1].p2-t5[0]': 'test29',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[2].p2-t6[0]': 'test30',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[2].p2-t1[2]': 'test31',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[2].p2-t7[0]': 'test32',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[2].p2-t7[1]': 'test33',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[2].p2-t8[0]': 'test34',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[2].p2-t9[0]': 'test35',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[2].p2-t10[0]': 'test36',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[3].p2-t11[0]': 'test37',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[3].p2-t1[3]': 'test38',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[3].p2-t12[0]': 'test39',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[3].p2-t12[1]': 'test40',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[3].p2-t13[0]': 'test41',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[3].p2-t14[0]': 'test42',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[3].p2-t15[0]': 'test43',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[4].p2-t16[0]': 'test44',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[4].p2-t1[4]': 'test45',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[4].p2-t17[0]': 'test46',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[4].p2-t17[1]': 'test47',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[4].p2-t18[0]': 'test48',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[4].p2-t19[0]': 'test49',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[4].p2-t20[0]': 'test50',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[5].p2-t21[0]': 'test51',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[5].p2-t21[1]': 'test52',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[5].p2-t22[0]': 'test53',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[5].p2-t22[1]': 'test54',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[5].p2-t23[0]': 'test55',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[5].p2-t24[0]': 'test56',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[5].p2-t25[0]': 'test57',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[6].p2-t26[0]': 'test58',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[6].p2-t26[1]': 'test59',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[6].p2-t27[0]': 'test60',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[6].p2-t27[1]': 'test61',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[6].p2-t28[0]': 'test62',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[6].p2-t29[0]': 'test63',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[6].p2-t30[0]': 'test64',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[7].p2-t31[0]': 'test65',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[7].p2-t31[1]': 'test66',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[7].p2-t32[0]': 'test67',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[7].p2-t32[1]': 'test68',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[7].p2-t33[0]': 'test69',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[7].p2-t34[0]': 'test70',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[7].p2-t35[0]': 'test71',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[8].p2-t36[0]': 'test72',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[8].p2-t36[1]': 'test73',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[8].p2-t37[0]': 'test74',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[8].p2-t37[1]': 'test75',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[8].p2-t38[0]': 'test76',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[8].p2-t39[0]': 'test77',
                'topmostSubform[0].Page2[0].Part1Table[0].#subform[8].p2-t40[0]': 'test78',
                'topmostSubform[0].Page2[0].Part1Table[0]': 'test79',
                'topmostSubform[0].Page2[0]': 'test80',
                'topmostSubform[0].Page3[0].p3-cb1[0]': 13,
                'topmostSubform[0].Page3[0].p3-cb1[1]': 13,
                'topmostSubform[0].Page3[0].p3-cb1[2]': 13,
                'topmostSubform[0].Page3[0].p3-cb4[0]': 13,
                'topmostSubform[0].Page3[0].p3-cb5[0]': 13,
                'topmostSubform[0].Page3[0].p3-cb6[0]': 13,
                'topmostSubform[0].Page3[0].p3-cb7[0]': 13,
                'topmostSubform[0].Page3[0].p3-cb7[1]': 13,
                'topmostSubform[0].Page3[0].p3-cb9[0]': 13,
                'topmostSubform[0].Page3[0].p3-cb10[0]': 2,
                'topmostSubform[0].Page3[0].p3-cb11[0]': 2,
                'topmostSubform[0].Page3[0].p3-cb12[0]': 2,
                'topmostSubform[0].Page3[0].p3-t1[0]': 'test81',
                'topmostSubform[0].Page3[0].p3-t2[0]': 'test82',
                'topmostSubform[0].Page3[0].p3-t5[0]': 'test83',
                'topmostSubform[0].Page3[0].p3-t6[0]': 'test84',
                'topmostSubform[0].Page3[0].p3-t10[0]': 'test85',
                'topmostSubform[0]': 'test86'

            };

            //============ To Generate the FDF Template to fetch all the form fields =============

            // var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function(err, fdfData) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         console.log(fdfData);
            //     }
            // });

            //====================================================================================

            // ============== This is to fill all the form fields ====================

            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });


        },

        'fss4_pdf': function (destination_pdfname) {
            // console.log(test);

            var sourcePDF = process.env.PWD + '/fss4.pdf';
            var destinationPDF = process.env.PWD + '/' + destination_pdfname;
            var nameRegex = null;
            console.log(destination_pdfname);

            var data = {

                'topmostSubform[0].Page1[0].PageOneHeader[0].f1_01_0_[0]': 'chandresh', // EIN title
                'topmostSubform[0].Page1[0].f1_02_0_[0]': 'chandresh1', // Legal Field
                'topmostSubform[0].Page1[0].f1_03_0_[0]': 'chandresh2', // Trade Name
                'topmostSubform[0].Page1[0].f1_04_0_[0]': 'chandresh3', // Executor
                'topmostSubform[0].Page1[0].f1_05_0_[0]': 'chandresh4', // Mailing Address
                'topmostSubform[0].Page1[0].f1_06_0_[0]': 'chandresh5', // Street Address
                'topmostSubform[0].Page1[0].f1_07_0_[0]': 'chandresh6', // 4b (City, state, and ZIP code (if foreign, see instructions))
                'topmostSubform[0].Page1[0].f1_08_0_[0]': 'chandresh7', // 5b (City, state, and ZIP code (if foreign, see instructions))
                'topmostSubform[0].Page1[0].f1_09_0_[0]': 'chandresh8', // 6 (County and state where principal business is located)
                'topmostSubform[0].Page1[0].f1_10_0_[0]': 'chandresh9', // 7a Name of responsible party
                'topmostSubform[0].Page1[0].f1_11_0_[0]': 'asdasdasdsadasds', // 7b SSN, ITIN, or EIN
                'topmostSubform[0].Page1[0].p1-cb01[0]': 0, // 8a(1) set this to '1' to check 'yes' otherwies leave it '0'
                'topmostSubform[0].Page1[0].p1-cb01[1]': 2, // 8a(2) set this to '2' to check 'No' otherwies leave it '0'
                'topmostSubform[0].Page1[0].f1_12_0_[0]': 'chandresh10', // 8b
                'topmostSubform[0].Page1[0].p1-cb1[0]': 1, // 8c(1) set this to '1' to check 'yes' otherwies leave it '0'
                'topmostSubform[0].Page1[0].p1-cb1[1]': 2, // 8c(2) set this to '2' to check 'No' otherwies leave it '0'
                'topmostSubform[0].Page1[0].p1-cb3[0]': 1, // checkbox for Sole proprietor
                'topmostSubform[0].Page1[0].f1_15_0_[0]': 'chandresh11', // text field for Sole proprietor
                'topmostSubform[0].Page1[0].p1-cb3[1]': 8, // Estate (SSN of decedent) checkbox (set '8' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_21_0_[0]': 'chandresh12', // Estate (SSN of decedent
                'topmostSubform[0].Page1[0].p1-cb3[2]': 2, // Partnership check box (set '2' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[3]': 9, // Plan administrator checkbox (set '9' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_22_0_[0]': 'chandresh13', // Plan administrator (TIN)
                'topmostSubform[0].Page1[0].p1-cb3[4]': 3, // Corporation (enter form number to be filed) (set '3' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_16_0_[0]': 'chandresh14', // Corporation (enter form number to be filed
                'topmostSubform[0].Page1[0].p1-cb3[5]': 10, // Trust (TIN of grantor) checkbox (set '10' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_25_0_[0]': 'chandresh15', // Trust (TIN of grantor)
                'topmostSubform[0].Page1[0].p1-cb3[6]': 4, // Personal service corporation checkbox (set '4' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[7]': 11, // National Guard checkbox (set '11' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[8]': 14, // State/local government checkbox(set '14' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[9]': 5, // Church or church-controlled organization checkbox (set '5' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[10]': 12, // Farmers’ cooperative checkbox (set '12' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[11]': 15, // Federal government/military checkbox (set '15' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[12]': 6, // Other nonprofit organization checkbox (set '6' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_17_0_[0]': 'chandresh16', // Other nonprofit organization (specify)
                'topmostSubform[0].Page1[0].p1-cb3[13]': 13, // REMIC checkbox(set '13' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[14]': 16, // Indian tribal governments/enterprises checkbox (set '16' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb3[15]': 7, // Other checkbox(set '7' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_28_0_[0]': 'chandresh17', // Other (specify)
                'topmostSubform[0].Page1[0].f1_18_0_[0]': 'chandresh18', // Group Exemption Number (GEN) if any
                'topmostSubform[0].Page1[0].f1_29_0_[0]': 'chandresh19', // State
                'topmostSubform[0].Page1[0].f1_30_0_[0]': 'chandresh20', // Foreign country
                'topmostSubform[0].Page1[0].p1-cb4[0]': 5, // Banking purpose checkbox (set this to '5' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_33_0_[0]': 'chandresh21', // Banking purpose (specify purpose)
                'topmostSubform[0].Page1[0].p1-cb4[1]': 1, // Started new business checkbox (set this to '1' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_31_0_[0]': 'chandresh22', // Started new business (specify type)
                'topmostSubform[0].Page1[0].f1_32_0_[0]': 'chandresh23', // Started new business (specify type)
                'topmostSubform[0].Page1[0].p1-cb4[2]': 6, // Changed type checkbox()
                'topmostSubform[0].Page1[0].f1_34_0_[0]': 'chandresh24', // Changed type of organization (specify new type)
                'topmostSubform[0].Page1[0].p1-cb4[3]': 7, // Purchased going business checkbox (set this to '7' to check otherwise '0');
                'topmostSubform[0].Page1[0].p1-cb4[4]': 2, // Hired employees checkbox (set this to '2' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb4[5]': 8, // Created a trust checkbox (set this to '8' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_35_0_[0]': 'chandresh25', // Created a trust (specify type)
                'topmostSubform[0].Page1[0].p1-cb4[6]': 3, // Compliance with IRS (set this to '3' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb4[7]': 9, // Created a pension plan checkbox (set this to '9' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_36_0_[0]': 'chandresh26', // Created a pension plan (specify type)
                'topmostSubform[0].Page1[0].p1-cb4[8]': 4, // 10 Other (specify) (set this to '4' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_37_0_[0]': 'chandresh27', // Other (specify)
                'topmostSubform[0].Page1[0].f1_38_0_[0]': 'chandresh28', // Date business started or acquired (month, day, year). See instructions
                'topmostSubform[0].Page1[0].f1_39_0_[0]': 'chandresh29', // Closing month of accounting year
                'topmostSubform[0].Page1[0].f1_40_0_[0]': 'chandresh30', // Agricultural
                'topmostSubform[0].Page1[0].f1_41_0_[0]': 'chandresh31', // Household
                'topmostSubform[0].Page1[0].f1_42_0_[0]': 'chandresh32', // Other
                'topmostSubform[0].Page1[0].p1-cb10[0]': 1, // 14 checkbox (set this to '1' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_43_0_[0]': 'chandresh33', // First date wages or annuities were paid
                'topmostSubform[0].Page1[0].p1-cb11[0]': 7, // Health care & social assistance checkbox (set this to '7' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[1]': 10, // Wholesale-agent/broker checkbox(set this to '10' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[2]': 1, // Construction checkbox (set this to '1' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[3]': 3, // Rental & leasing checkbox (set this to '3' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[4]': 5, // Transportation & warehousing checkbox (set this to '5' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[5]': 8, // Accommodation & food service (set this to '8' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[6]': 11, // Wholesale-other checkbox (set this to '11' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[7]': 12, // Retail (set this to '12' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[8]': 2, // Real estate checkbox (set this to '2' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[9]': 4, // Manufacturing checkbox (set this to '4' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[10]': 6, // Finance & insurance checkbox (set this to '6' to check otherwise '0')
                'topmostSubform[0].Page1[0].p1-cb11[11]': 9, // Other (specify) checkbox (set this to '9' to check otherwise '0')
                'topmostSubform[0].Page1[0].f1_44_0_[0]': 'chandresh34', // 16 Other (specify)
                'topmostSubform[0].Page1[0].f1_46_0_[0]': 'chandresh35', // 17
                'topmostSubform[0].Page1[0].p1-cb12[0]': 1, // 18(1) for 'Yes'
                'topmostSubform[0].Page1[0].p1-cb12[1]': 2, // 18(2) for 'No'
                'topmostSubform[0].Page1[0].f1_48_0_[0]': 'chandresh36', // 18
                'topmostSubform[0].Page1[0].f1_49_0_[0]': 'chandresh37', // Designee’s name
                'topmostSubform[0].Page1[0].f1_51_0_[0]': 'chandresh38', // Designee’s telephone number (include area code)
                'topmostSubform[0].Page1[0].f1_52_0_[0]': 'chandresh39', // Address and ZIP code
                'topmostSubform[0].Page1[0].f1_54_0_[0]': 'chandresh40', // Designee’s fax number (include area code)
                'topmostSubform[0].Page1[0].f1_55_0_[0]': 'chandresh41', // Name and title (type or print clearly)
                'topmostSubform[0].Page1[0].f1_57_0_[0]': 'chandresh42', // Applicant’s telephone number (include area code)
                'topmostSubform[0].Page1[0].f1_59_0_[0]': 'chandresh43', // Applicant’s fax number (include area code)
                'topmostSubform[0]': 'chandresh44'

            };


            // ============== This is to fill all the form fields ====================

            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("In callback (we're done).");
                }
            });


            Fss4_pdfdata.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });


        },

        /* ca-c-stock.pdf
        * SAMPLE CALL:-
          var data =  { 'firstName': 'Harish',
            'lastName': 'Mahajan',
            'phoneNumber': '32222222',
            'entityName': 'Entity One',
            'entityNumber': '20222024',
            'commentsLine1': 'This is Line1',
            'commentsLine2': 'This is Line2',
            'commentsLine3': 'This is Line3',
            'commentsLine4': 'This is Line4',
            'returneeName': 'Harry',
            'returneeCompanyName': 'ZyoneNetworks',
            'returneeAddress': 'USA',
            'returneeCityStateZip': '123456',
            'nameLine1': 'Harish',
            'nameLine2': 'Mahajan',
            'streetAddress': 'Surat, India',
            'bZip': '12345',
            'aCity': 'Surat',
            'aState': 'Gujarat',
            'aZip': '12345',
            'mailingAddress': 'hmahajan.dmi@gmail.com',
            'bCity': 'Surat',
            'bState': 'Gujarat',
            'agentsName': 'Harish',
            'agentsName': 'MALI',
            'agentsMiddleName': 'P',
            'agentsLastName': 'MAHAJAN',
            'agentsSuffix': 'Mr',
            'agentsAddress': 'Shivajinagar Surat',
            'bCity3': 'Surat',
            'bZip3': '12345',
            'shares': 'Sharre1',
            'typeNameOfSigner': 'HARISH P MAHAJAN',
            'reset1': 'Reset1',
            'print': 'Print' 
        }
        Meteor.call('ca-c-stock',data);
        */
        'ca-c-stock': function (params) {
            console.log('params', params);

            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-c-stock.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-c-stock.pdf';
            var nameRegex = null;
            console.log(sourcePDF);
            var data = {
                '1FirstName': params.firstName,
                '1LastName': params.lastName,
                '1PhoneNumber': params.phoneNumber,
                '2EntityName': params.entityName,
                '2EntityNumber': params.entityNumber,
                '2CommentsLine1': params.commentsLine1,
                '2CommentsLine2': params.commentsLine2,
                '2CommentsLine3': params.commentsLine3,
                '2CommentsLine4': params.commentsLine4,
                '3ReturneeName': params.returneeName,
                '3ReturneeCompanyName': params.returneeCompanyName,
                '3ReturneeAddress': params.returneeAddress,
                '3ReturneeCityStateZip': params.returneeCityStateZip,
                '1nameLine1': params.nameLine1,
                '1nameLine2': params.nameLine2,
                '2aStreetAddress': params.streetAddress,
                '2bZip': params.bZip,
                '2aCity': params.aCity,
                '2atate': params.aState,
                '2aZip': params.aZip,
                '2bMailingAddress': params.mailingAddress,
                '2bCity': params.bCity,
                '2btate': params.bState,
                '3aAgentsName': params.agentsName,
                '3cAgentsName': params.agentsName,
                '3aAgentsMiddleName': params.agentsMiddleName,
                '3aAgentsLastName': params.agentsLastName,
                '3aAgentsSuffix': params.agentsSuffix,
                '3bAgentsAddress': params.agentsAddress,
                '3bCity': params.bCity3,
                '3bZip': params.bZip3,
                '4Shares': params.shares,
                '6TypeNameOfSigner': params.typeNameOfSigner,
                'Reset1': params.reset1,
                'Print': params.print
            }



            //============ To Generate the FDF Template to fetch all the form fields =============

            // var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function(err, fdfData) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         console.log(fdfData);
            //     }
            // });

            //====================================================================================
            // ============== This is to fill all the form fields ====================

            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });


            //}

        },


        /* ca-foreign-corp.pdf
        * SAMPLE CALL:-
        * var data = {  
            "firstName":"Harish",
            "lastName":"Mahajan",
            "phoneNumber":"123456789",
            "entityName":"The Entity",
            "entityNumber":"654123",
            "commentsLine1":"Comment line 1",
            "commentsLine2":"Comment line 2",
            "commentsLine3":"Comment line 3",
            "commentsLine4":"Comment line 4",
            "returneeName":"Harry Mahajan",
            "returneeCompanyName":"Zyone Networks",
            "returneeAddress":"Shivaji Nagar",
            "returneeCityStateZip":"654123",
            "name":"Harish",
            "jurisdiction":"jurisdiction",
            "aCity":"Surat0",
            "aState":"Gujarat",
            "aStreetAddress":"31 Shivajinagar",
            "aZipCode":"546123",
            "bStreetAddress":"31 Shivajinagar",
            "bZipCode":"123456",
            "bCity":"surat1",
            "cCity":"surat2",
            "cZipCode":"897456",
            "mailingAddress":"hmahajan.dmi@gmail.com",
            "cState":"Guj",
            "aAgentsName":"Hari",
            "cAgentsName":"Harry",
            "agentsMiddleName":"P",
            "agentsLastName":"Mahajan",
            "agentsSuffix":"Mr",
            "agentsAddress":"Ghantiwala Complex",
            "bCity4":"surat3",
            "bZip4":"111111",
            "typeNameOfSigner":"Harish P Mahajan",
            "reset":"Reset",
            "print":"Print"
         }
          Meteor.call('ca-foreign-corp',data);
        */

        'ca-foreign-corp': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-foreign-corp.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-foreign-corp.pdf';
            var nameRegex = null;
            console.log(sourcePDF);
            var data = {
                "1FirstName": params.firstName,
                "1LastName": params.lastName,
                "1PhoneNumber": params.phoneNumber,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1name": params.name,
                "2jurisdiction": params.jurisdiction,
                "3aCity": params.aCity,
                "3aState": params.aState,
                "3aStreetAddress": params.aStreetAddress,
                "3aZipCode": params.aZipCode,
                "3bStreetAddress": params.bStreetAddress,
                "3bZipCode": params.bZipCode,
                "3bCity": params.bCity,
                "3cCity": params.cCity,
                "3cZipCode": params.cZipCode,
                "3cMailingAddress": params.mailingAddress,
                "3cState": params.cState,
                "4aAgentsName": params.aAgentsName,
                "4cAgentsName": params.cAgentsName,
                "4aAgentsMiddleName": params.agentsMiddleName,
                "4aAgentsLastName": params.agentsLastName,
                "4aAgentsSuffix": params.agentsSuffix,
                "4bAgentsAddress": params.agentsAddress,
                "4bCity": params.bCity4,
                "4bZip": params.bZip4,
                "5TypeNameOfSigner": params.typeNameOfSigner,
                "Reset1": params.reset,
                "Print": params.print
            }
            //============ To Generate the FDF Template to fetch all the form fields =============

            //    var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function(err, fdfData) {
            //        if (err) {
            //            console.log(err);
            //        } else {
            //            console.log(JSON.stringify(fdfData));
            //        }
            //    });

            //====================================================================================
            // ============== This is to fill all the form fields ====================

            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /*
            * ca-foreign-np.pdf
            * var data = {  
             "firstName":"Harish",
             "lastName":"Mahajan",
             "phoneNumber":"8000641661",
             "entityName":"EN1",
             "entityNumber":"5461231",
             "commentsLine1":"Com1",
             "commentsLine2":"Com2",
             "commentsLine3":"Com3",
             "commentsLine4":"Com4",
             "returneeName":"Com5",
             "returneeCompanyName":"Harish Mahajan",
             "returneeAddress":"31 Shivajinagar",
             "returneeCityStateZip":"123456",
             "name":"Harish Mahajan",
             "jurisdiction":"Hello",
             "aCity":"Surat",
             "aState":"Guj",
             "aStreetAddress":"31 Subhashnagar",
             "aZipCode":"654123",
             "bStreetAddress":"31 Limbayat",
             "bZipCode":"12345",
             "bCity":"Surat",
             "cCity":"Surat",
             "cZipCode":"221133",
             "mailingAddress":"hmahajan.dmi@gmail.com",
             "cState":"Guj",
             "aAgentsName":"Harry",
             "cAgentsName":"Haris",
             "agentsMiddleName":"P",
             "agentsLastName":"Mahajan",
             "agentsSuffix":"Mr",
             "agentsAddress":"Surat",
             "bCity4":"Surat",
             "bZip4":"121212",
             "typeNameOfSigner":"Hello",
             "reset":"asa",
             "print":"wer"
             }
             Meteor.call('ca-foreign-np',data);
        */

        'ca-foreign-np': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-foreign-np.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-foreign-np.pdf';
            var nameRegex = null;
            console.log(sourcePDF);
            var data = {
                "1FirstName": params.firstName,
                "1LastName": params.lastName,
                "1PhoneNumber": params.phoneNumber,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1name": params.name,
                "2jurisdiction": params.jurisdiction,
                "3aCity": params.aCity,
                "3aState": params.aState,
                "3aStreetAddress": params.aStreetAddress,
                "3aZipCode": params.aZipCode,
                "3bStreetAddress": params.bStreetAddress,
                "3bZipCode": params.bZipCode,
                "3bCity": params.bCity,
                "3cCity": params.cCity,
                "3cZipCode": params.cZipCode,
                "3cMailingAddress": params.mailingAddress,
                "3cState": params.cState,
                "4aAgentsName": params.aAgentsName,
                "4cAgentsName": params.cAgentsName,
                "4aAgentsMiddleName": params.agentsMiddleName,
                "4aAgentsLastName": params.agentsLastName,
                "4aAgentsSuffix": params.agentsSuffix,
                "4bAgentsAddress": params.agentsAddress,
                "4bCity": params.bCity4,
                "4bZip": params.bZip4,
                "5TypeNameOfSigner": params.typeNameOfSigner,
                "Reset1": params.reset,
                "Print": params.print
            }
            //============ To Generate the FDF Template to fetch all the form fields =============

            // var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function(err, fdfData) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         console.log(JSON.stringify(fdfData));
            //     }
            // });

            //====================================================================================
            // ============== This is to fill all the form fields ====================

            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-foreign-si-corp-so550.pdf
        * var data = {  
            "entityName":"EN1",
            "entityNumber":"123456",
            "commentsLine1":"com1",
            "commentsLine2":"com2",
            "commentsLine3":"com3",
            "commentsLine4":"com4",
            "commentsLine5":"com5",
            "commentsLine6":"com6",
            "returneeName":"harish",
            "returneeCompanyName":"mahajan",
            "returneeAddress":"surat shivajinagar",
            "returneeCityStateZip":"845612",
            "corpName":"Znetworks",
            "cZip":"321456",
            "fileNumber":"123",
            "principalAddress":"surat",
            "principalAddressCity":"surat",
            "principalAddressState":"Guj",
            "principalAddressZip":"12332",
            "mailingAddress":"hmahajan.dmi@gmail.com",
            "mailingAddressCity":"surat",
            "mailingAddressState":"guj",
            "mailingAddressZip":"32341",
            "cCaAddress":"surat",
            "cCaAddressCity":"surat1",
            "cCaAddressZip":"43212",
            "aFirstName":"harish",
            "aMiddleName":"p",
            "aLastName":"mahajans",
            "aSuffix":"mr",
            "aAddress":"surat 31",
            "aCity":"surat",
            "aState":"gujarat",
            "aZip":"123",
            "bFirstName":"harish",
            "bMiddleName":"mahajan",
            "bLastName":"mahajans",
            "bSuffix":"mr",
            "bAddress":"123, shubham",
            "bCity":"surat",
            "bState":"guj",
            "bZip":"43232",
            "cFirstName":"hello",
            "cMiddleName":"p",
            "cLastName":"mahajan",
            "cSuffix":"mr",
            "cAddress":"iol,43",
            "cCity":"surat",
            "cState":"guj",
            "aFirstName5":"hariys",
            "print":"print",
            "aMiddleName5":"ppp",
            "aAddress5":"odo, 90",
            "bVacancies":"yes",
            "individualAgentName":"google",
            "individualAgentMiddleName":"facebook",
            "indivualAgentAddress":"surat shivajinagar",
            "individualAgentCity":"surat",
            "corporateAgentName":"tvs",
            "typeOfBusiness":"IT",
            "date":"24-Jan-1990",
            "typedName":"Harish",
            "reset":"reset",
            "individualAgentZip":"12312",
            "aLastName5":"patel",
            "aSuffix5":"mr.",
            "aCity5":"surat",
            "aState5":"guj",
            "aZip5":"65412",
            "individualAgentLastName":"modi",
            "individualAgentSuffixName":"mr.",
            "title":"titel please"
            } 

            Meteor.call('ca-foreign-si-corp-so550',data);
        */
        'ca-foreign-si-corp-so550': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-foreign-si-corp-so550.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-foreign-si-corp-so550.pdf';
            var nameRegex = null;
            console.log(sourcePDF);
            var data = {
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "2CommentsLine5": params.commentsLine5,
                "2CommentsLine6": params.commentsLine6,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1CorpName": params.corpName,
                "4cZip": params.cZip,
                "2FileNumber": params.fileNumber,
                "3aPrincipalAddress": params.principalAddress,
                "3aPrincipalAddressCity": params.principalAddressCity,
                "3aPrincipalAddressState": params.principalAddressState,
                "3aPrincipalAddressZip": params.principalAddressZip,
                "3bMailingAddress": params.mailingAddress,
                "3bMailingAddressCity": params.mailingAddressCity,
                "3bMailingAddressState": params.mailingAddressState,
                "3bMailingAddressZip": params.mailingAddressZip,
                "3cCaAddress": params.cCaAddress,
                "3cCaAddressCity": params.cCaAddressCity,
                "3cCaAddressZip": params.cCaAddressZip,
                "4aFirstName": params.aFirstName,
                "4aMiddleName": params.aMiddleName,
                "4aLastName": params.aLastName,
                "4aSuffix": params.aSuffix,
                "4aAddress": params.aAddress,
                "4aCity": params.aCity,
                "4aState": params.aState,
                "4aZip": params.aZip,
                "4bFirstName": params.bFirstName,
                "4bMiddleName": params.bMiddleName,
                "4bLastName": params.bLastName,
                "4bSuffix": params.bSuffix,
                "4bAddress": params.bAddress,
                "4bCity": params.bCity,
                "4bState": params.bState,
                "4bZip": params.bZip,
                "4cFirstName": params.cFirstName,
                "4cMiddleName": params.cMiddleName,
                "4cLastName": params.cLastName,
                "4cSuffix": params.cSuffix,
                "4cAddress": params.cAddress,
                "4cCity": params.cCity,
                "4cState": params.cState,
                "5aFirstName": params.aFirstName5,
                "Print": params.print,
                "5aMiddleName": params.aMiddleName5,
                "5aAddress": params.aAddress5,
                "5bVacancies": params.bVacancies,
                "6aIndividualAgentName": params.individualAgentName,
                "6aIndividualAgentMiddleName": params.individualAgentMiddleName,
                "6bIndivualAgentAddress": params.indivualAgentAddress,
                "6bIndividualAgentCity": params.individualAgentCity,
                "6cCorporateAgentName": params.corporateAgentName,
                "7TypeOfBusiness": params.typeOfBusiness,
                "8Date": params.date,
                "8TypedName": params.typedName,
                "Reset1": params.reset,
                "6bIndividualAgentZip": params.individualAgentZip,
                "5aLastName": params.aLastName5,
                "5aSuffix": params.aSuffix5,
                "5aCity": params.aCity5,
                "5aState": params.aState5,
                "5aZip": params.aZip5,
                "6aIndividualAgentLastName": params.individualAgentLastName,
                "6aIndividualAgentSuffixName": params.individualAgentSuffixName,
                "8Title": params.title
            }
            //============ To Generate the FDF Template to fetch all the form fields =============

            // var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
            //     if (err) {
            //         console.log(err);
            //     } else {
            //         console.log(JSON.stringify(fdfData));
            //     }
            // });

            //====================================================================================
            // ============== This is to fill all the form fields ====================

            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-np-mutual.pdf
        * var data = {  
            "firstName":"hartish",
            "lastName":"Mahajan",
            "phoneNumber":"1234567890",
            "entityName":"entityName",
            "entityNumber":"546123879",
            "commentsLine1":"com1",
            "commentsLine2":"com2",
            "commentsLine3":"com3",
            "commentsLine4":"com4",
            "returneeName":"Harry",
            "returneeCompanyName":"Harry Pvt Ltd",
            "returneeAddress":"31 Shivajinagar",
            "returneeCityStateZip":"Guj",
            "nameLine1":"hariyo",
            "nameLine2":"mali",
            "aStreetAddress":"32, Areo Park",
            "aCity":"Mumbai",
            "aState":"MH",
            "aZip":"292929",
            "mailingAddress":"hmahajan.dmi@gmail.com",
            "bCity":"Surat",
            "bState":"Guj",
            "bZip":"88899",
            "aAgentsName":"JiuKol",
            "aAgentsMiddleName":"Hijn Km",
            "aAgentsLastName":"Lpo JH",
            "aAgentsSuffix":"Mr",
            "bAgentsAddress":"8, Yui Plazza",
            "bCity3":"apple company",
            "bZip3":"45612",
            "cAgentsName":"Hello Ha",
            "specificPurpose":"12345",
            "print":"print",
            "reset":"reset",
            "printYourNameHere":"Harish"
            }
            Meteor.call('ca-np-mutual',data);
        */
        'ca-np-mutual': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-np-mutual.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-np-mutual.pdf';
            var nameRegex = null;
            var data = {
                "1FirstName": params.firstName,
                "1LastName": params.lastName,
                "1PhoneNumber": params.phoneNumber,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1nameLine1": params.nameLine1,
                "1nameLine2": params.nameLine2,
                "2aStreetAddress": params.aStreetAddress,
                "2aCity": params.aCity,
                "2atate": params.aState,
                "2aZip": params.aZip,
                "2bMailingAddress": params.mailingAddress,
                "2bCity": params.bCity,
                "2btate": params.bState,
                "2bZip": params.bZip,
                "3aAgentsName": params.aAgentsName,
                "3aAgentsMiddleName": params.aAgentsMiddleName,
                "3aAgentsLastName": params.aAgentsLastName,
                "3aAgentsSuffix": params.aAgentsSuffix,
                "3bAgentsAddress": params.bAgentsAddress,
                "3bCity": params.bCity3,
                "3bZip": params.bZip3,
                "3cAgentsName": params.cAgentsName,
                "4SpecificPurpose": params.specificPurpose,
                "Print": params.print,
                "Reset1": params.reset,
                "Print your name here": params.printYourNameHere
            }
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });

        },

        /* ca-np-public.pdf
        * var data = {
                "firstName":"Harish",
                "lastName":"Mahajan",
                "phoneNumber":"8000641661",
                "entityName":"En101",
                "entityNumber":"21340",
                "commentsLine1":"Com1",
                "commentsLine2":"Com2",
                "commentsLine3":"Com3",
                "commentsLine4":"Com4",
                "returneeName":"Hariosh Mahajan",
                "returneeCompanyName":"Harry Pvt Ltd",
                "returneeAddress":"Shivajinagar",
                "returneeCityStateZip":"12345",
                "nameLine1":"My Name Is khan",
                "nameLine2":"Hello World",
                "specificPurpose":"Purpose is to meet people",
                "streetAddress":"12, Hello",
                "aCity":"Pune",
                "aState":"MH",
                "aZip":"949435",
                "bMailingAddress":"hmahajan.dmi@gmail.com",
                "bCity":"surat",
                "bState":"Guj",
                "bZip":"12345",
                "aAgentsName":"Harish Mahajan",
                "aAgentsMiddleName":"Hello Harish",
                "aAgentsLastName":"Pal",
                "aAgentsSuffix":"Mr",
                "bAgentsAddress":"31, Govind Apt",
                "bCity3":"Mumbai",
                "bZip3":"MH",
                "cAgentsName":"Harry",
                "checkboxPublic":"Yes", // 'Yes' for checked and 'No' for unchecked.
                "checkboxCharitable":"Yes", // 'Yes' for checked and 'No' for unchecked.
                "printYourNameHere":"Harish Mahajan",
             };
             Meteor.call('ca-np-public',data);
        */
        'ca-np-public': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-np-public.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-np-public.pdf';
            var nameRegex = null;
            var data = {
                "1FirstName": params.firstName,
                "1LastName": params.lastName,
                "1PhoneNumber": params.phoneNumber,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1nameLine1": params.nameLine1,
                "1nameLine2": params.nameLine2,
                "4SpecificPurpose": params.specificPurpose,
                "2aStreetAddress": params.streetAddress,
                "2aCity": params.aCity,
                "2atate": params.aState,
                "2aZip": params.aZip,
                "2bMailingAddress": params.bMailingAddress,
                "2bCity": params.bCity,
                "2btate": params.bState,
                "2bZip": params.bZip,
                "3aAgentsName": params.aAgentsName,
                "3aAgentsMiddleName": params.aAgentsMiddleName,
                "3aAgentsLastName": params.aAgentsLastName,
                "3aAgentsSuffix": params.aAgentsSuffix,
                "3bAgentsAddress": params.bAgentsAddress,
                "3bCity": params.bCity3,
                "3bZip": params.bZip3,
                "3cAgentsName": params.cAgentsName,
                "4CheckboxPublic": params.checkboxPublic,
                "4CheckboxCharitable": params.checkboxCharitable,
                "Print your name here": params.printYourNameHere
            };
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data", data);
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-corp-si-so100
        * var data = {
                "entityName":"EN101",
                "entityNumber":"123456",
                "commentsLine1":"CommentsLine1",
                "commentsLine2":"CommentsLine2",
                "commentsLine3":"CommentsLine3",
                "commentsLine4":"CommentsLine4",
                "commentsLine5":"CommentsLine5",
                "commentsLine6":"CommentsLine6",
                "returneeName":"Bhavan",
                "returneeCompanyName":"Zyonnetworks",
                "returneeAddress":"Surat Shivajinagar",
                "returneeCityStateZip":"123456",
                "corpName":"CorpName",
                "corporateAgentName":"Harry",
                "fileNumber":"120004",
                "principalAddress":"Surya apt.",
                "principalAddressCity":"Surat",
                "principalAddressZip":"456123",
                "mailingAddress":"Shivajinagar",
                "mailingAddressCity":"Surat",
                "mailingAddressState":"Guj",
                "mailingAddressZip":"515421",
                "firstName":"Hari",
                "aMiddleName":"P",
                "aLastName":"Mahajan",
                "aSuffix":"Mr",
                "aAddress":"Mumbai East",
                "aCity":"Mumbai",
                "aState":"MH",
                "aZip":"854210",
                "bFirstName":"Haris",
                "bMiddleName":"P",
                "bLastName":"Patel",
                "bSuffix":"Mr",
                "bAddress":"Shivajinagar",
                "bCity":"Pune",
                "bState":"MH",
                "bZip":"145263",
                "cFirstName":"Harish",
                "cMiddleName":"P",
                "cLastName":"Mahajan",
                "cSuffix":"Mr",
                "cAddress":"Delhi",
                "cCity":"Delhi",
                "cState":"Delhi",
                "cZip":"845120",
                "aIndividualAgentName":"Harik",
                "aIndividualAgentMiddleName":"P",
                "aIndividualAgentLastName":"Patel",
                "aIndividualAgentSuffixName":"Mr",
                "bIndivualAgentAddress":"Kathiyavad",
                "bIndividualAgentCity":"Agra",
                "bIndividualAgentZip":"UP",
                "date":"24-08-2009",
                "typedName":"TypedName",
                "title":"title",
                "checkbox":"Yes" // 
             }
             Meteor.call('ca-corp-si-so100',data); 
        */
        'ca-corp-si-so100': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-corp-si-so100.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-corp-si-so100.pdf';
            var nameRegex = null;
            var data = {
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "2CommentsLine5": params.commentsLine5,
                "2CommentsLine6": params.commentsLine6,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1CorpName": params.corpName,
                "5cCorporateAgentName": params.corporateAgentName,
                "2FileNumber": params.fileNumber,
                "3aPrincipalAddress": params.principalAddress,
                "3aPrincipalAddressCity": params.principalAddressCity,
                "3aPrincipalAddressZip": params.principalAddressZip,
                "3bMailingAddress": params.mailingAddress,
                "3bMailingAddressCity": params.mailingAddressCity,
                "3bMailingAddressState": params.mailingAddressState,
                "3bMailingAddressZip": params.mailingAddressZip,
                "4aFirstName": params.firstName,
                "4aMiddleName": params.aMiddleName,
                "4aLastName": params.aLastName,
                "4aSuffix": params.aSuffix,
                "4aAddress": params.aAddress,
                "4aCity": params.aCity,
                "4aState": params.aState,
                "4aZip": params.aZip,
                "4bFirstName": params.bFirstName,
                "4bMiddleName": params.bMiddleName,
                "4bLastName": params.bLastName,
                "4bSuffix": params.bSuffix,
                "4bAddress": params.bAddress,
                "4bCity": params.bCity,
                "4bState": params.bState,
                "4bZip": params.bZip,
                "4cFirstName": params.cFirstName,
                "4cMiddleName": params.cMiddleName,
                "4cLastName": params.cLastName,
                "4cSuffix": params.cSuffix,
                "4cAddress": params.cAddress,
                "4cCity": params.cCity,
                "4cState": params.cState,
                "4cZip": params.cZip,
                "5aIndividualAgentName": params.aIndividualAgentName,
                "5aIndividualAgentMiddleName": params.aIndividualAgentMiddleName,
                "5aIndividualAgentLastName": params.aIndividualAgentLastName,
                "5aIndividualAgentSuffixName": params.aIndividualAgentSuffixName,
                "5bIndivualAgentAddress": params.bIndivualAgentAddress,
                "5bIndividualAgentCity": params.bIndividualAgentCity,
                "5bIndividualAgentZip": params.bIndividualAgentZip,
                "9Date": params.date,
                "9TypedName": params.typedName,
                "9Title": params.title,
                "6": params.checkBox
            }
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data", data);
                    console.log("In callback (we're done).");
                }
            });


            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-corp-si-so550.pdf
         var data = {
            "entityName":"En-1001",
            "entityNumber":"123456",
            "commentsLine1":"commentsLine1",
            "commentsLine2":"commentsLine2",
            "commentsLine3":"commentsLine3",
            "commentsLine4":"commentsLine4",
            "commentsLine5":"commentsLine5",
            "commentsLine6":"commentsLine6",
            "returneeName":"Harish",
            "returneeCompanyName":"Mark Pvt Ltd",
            "returneeAddress":"Andheri, Mumbai",
            "returneeCityStateZip":"123456",
            "corpName":"corpName",
            "cZip":"654321",
            "fileNumber":"514202",
            "principalAddress":"21, shivajinagar",
            "principalAddressCity":"Surat",
            "principalAddressState":"Gujarat",
            "principalAddressZip":"546123",
            "mailingAddress":"hmahajan.dmi@gmail.com",
            "mailingAddressCity":"Surat",
            "mailingAddressState":"GJ",
            "mailingAddressZip":"421526",
            "cCaAddress":"33, Subhashnagar",
            "cCaAddressCity":"Surat",
            "cCaAddressZip":"635241",
            "aFirstName":"Apple",
            "aMiddleName":"Orange",
            "aLastName":"Apple2",
            "aSuffix":"Mr",
            "aAddress":"Surat",
            "aCity":"Kim",
            "aState":"GJ",
            "aZip":"625412",
            "bFirstName":"Harish",
            "bMiddleName":"P",
            "bLastName":"Mahajan",
            "bSuffix":"Mr",
            "bAddress":"54, Indira Apt",
            "bCity":"Chembur",
            "bState":"MH",
            "bZip":"541263",
            "cFirstName":"Paresh",
            "cMiddleName":"P",
            "cLastName":"Patel",
            "cSuffix":"Mr",
            "cAddress":"Surat, shivajinagar",
            "cCity":"Surat",
            "cState":"GJ",
            "aFirstName5":"Harish",  
            "aMiddleName5":"Mahajan",
            "aAddress5":"323, Andheri Koli East",
            "bVacancies":"5",
            "individualAgentName":"Harman",
            "individualAgentMiddleName":"K",
            "indivualAgentAddress":"Lotiya",
            "individualAgentCity":"Vadodra",
            "cCorporateAgentName":"Parul",
            "typeOfBusiness":"IT",
            "date":"24-02-2015",
            "typedName":"Harish P Mahajan",
            "individualAgentZip":"210212",
            "LastName5":"Chorasiya",
            "aSuffix5":"Mr",
            "aCity5":"Surya",
            "aState5":"UP",
            "aZip5":"875421",
            "individualAgentLastName":"Chandresh",
            "individualAgentSuffixName":"Sharma",
            "title":"Software Developer"
            }
        Meteor.call('ca-corp-si-so550',data);  
        */
        'ca-corp-si-so550': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-corp-si-so550.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-corp-si-so550.pdf';
            var nameRegex = null;
            var data = {
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "2CommentsLine5": params.commentsLine5,
                "2CommentsLine6": params.commentsLine6,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1CorpName": params.corpName,
                "4cZip": params.cZip,
                "2FileNumber": params.fileNumber,
                "3aPrincipalAddress": params.principalAddress,
                "3aPrincipalAddressCity": params.principalAddressCity,
                "3aPrincipalAddressState": params.principalAddressState,
                "3aPrincipalAddressZip": params.principalAddressZip,
                "3bMailingAddress": params.mailingAddress,
                "3bMailingAddressCity": params.mailingAddressCity,
                "3bMailingAddressState": params.mailingAddressState,
                "3bMailingAddressZip": params.mailingAddressZip,
                "3cCaAddress": params.cCaAddress,
                "3cCaAddressCity": params.cCaAddressCity,
                "3cCaAddressZip": params.cCaAddressZip,
                "4aFirstName": params.aFirstName,
                "4aMiddleName": params.aMiddleName,
                "4aLastName": params.aLastName,
                "4aSuffix": params.aSuffix,
                "4aAddress": params.aAddress,
                "4aCity": params.aCity,
                "4aState": params.aState,
                "4aZip": params.aZip,
                "4bFirstName": params.bFirstName,
                "4bMiddleName": params.bMiddleName,
                "4bLastName": params.bLastName,
                "4bSuffix": params.bSuffix,
                "4bAddress": params.bAddress,
                "4bCity": params.bCity,
                "4bState": params.bState,
                "4bZip": params.bZip,
                "4cFirstName": params.cFirstName,
                "4cMiddleName": params.cMiddleName,
                "4cLastName": params.cLastName,
                "4cSuffix": params.cSuffix,
                "4cAddress": params.cAddress,
                "4cCity": params.cCity,
                "4cState": params.cState,
                "5aFirstName": params.aFirstName5,
                "5aMiddleName": params.aMiddleName5,
                "5aAddress": params.aAddress5,
                "5bVacancies": params.bVacancies,
                "6aIndividualAgentName": params.individualAgentName,
                "6aIndividualAgentMiddleName": params.individualAgentMiddleName,
                "6bIndivualAgentAddress": params.indivualAgentAddress,
                "6bIndividualAgentCity": params.individualAgentCity,
                "6cCorporateAgentName": params.cCorporateAgentName,
                "7TypeOfBusiness": params.typeOfBusiness,
                "8Date": params.date,
                "8TypedName": params.typedName,
                "6bIndividualAgentZip": params.individualAgentZip,
                "5aLastName": params.aLastName5,
                "5aSuffix": params.aSuffix5,
                "5aCity": params.aCity5,
                "5aState": params.aState5,
                "5aZip": params.aZip5,
                "6aIndividualAgentLastName": params.individualAgentLastName,
                "6aIndividualAgentSuffixName": params.individualAgentSuffixName,
                "8Title": params.title
            }
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data", data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-foreign-llc-5.pdf
        *  var data = {
            "firstName":"Harish",
            "lastName":"Mahajan",
            "phoneNumber":"1234567890",
            "entityName":"En-101",
            "entityNumber":"512123",
            "commentsLine1":"commentsLine1",
            "commentsLine2":"commentsLine2",
            "commentsLine3":"commentsLine3",
            "commentsLine4":"commentsLine4",
            "returneeName":"Arhad",
            "returneeCompanyName":"RedChillie",
            "returneeAddress":"21, Goa",
            "returneeCityStateZip":"GJ",
            "a":"Hello",
            "b":"Beros",
            "aMM":"12",
            "b2":"Kolsim",
            "aDD":"21",
            "aYYYY":"2016",
            "cZip":"365241",
            "aStreetAddress":"2,Shivajinagar",
            "aCity":"Surat",
            "aState":"GJ",
            "aZip":"123456",
            "bStreetAddress":"21, Laldarvaja",
            "bCity":"Surat",
            "bZip":"546231",
            "cStreetAddress":"21,Parle Hill",
            "cCity":"Surat",
            "cState":"MP",
            "aAgentsName":"Harish",
            "bAgentsName":"Hari",
            "agentsMiddleName":"P",
            "agentsLastName":"Sapkale",
            "agentsSuffix":"Mr",
            "agentsAddress":"11, Icchapur",
            "bCity4":"Surat",
            "bZip4":"5784521",
            "typeNameOfSigner":"Harish P Mahajan",
            }
           Meteor.call('ca-foreign-llc-5',data);  
        */

        'ca-foreign-llc-5': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-foreign-llc-5.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-foreign-llc-5.pdf';
            var nameRegex = null;
            var data = {
                "1FirstName": params.firstName,
                "1LastName": params.lastName,
                "1PhoneNumber": params.phoneNumber,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "1a": params.a,
                "1b": params.b,
                "2aMM": params.aMM,
                "2b": params.b2,
                "2aDD": params.aDD,
                "2aYYYY": params.aYYYY,
                "3cZip": params.cZip,
                "3aStreetAddress": params.aStreetAddress,
                "3aCity": params.aCity,
                "3aState": params.aState,
                "3aZip": params.aZip,
                "3btreetAddress": params.bStreetAddress,
                "3bcity": params.bCity,
                "3bZip": params.bZip,
                "3cStreetAddress": params.cStreetAddress,
                "3cCity": params.cCity,
                "3cState": params.cState,
                "4cAgentsName": params.aAgentsName,
                "4aAgentsName": params.bAgentsName,
                "4aAgentsMiddleName": params.agentsMiddleName,
                "4aAgentsLastName": params.agentsLastName,
                "4aAgentsSuffix": params.agentsSuffix,
                "4bAgentsAddress": params.agentsAddress,
                "4bCity": params.bCity4,
                "4bZip": params.bZip4,
                "5TypeNameOfSigner": params.typeNameOfSigner,
            }
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data", data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-foreign-llc-12
        * var data = {
                "llcName":"HPM",
                "fileNumber":"456123",
                "jurisdiction":"Harish",
                "principalAddress":"21, Shivajinagar",
                "principalAddressCity":"Surat",
                "principalAddressState":"GJ",
                "principalAddressZip":"123456",
                "mailingAddress":"hmahajan.dmi@gmail.com",
                "mailingAddressCity":"Surat",
                "mailingAddressState":"GJ",
                "mailingAddressZip":"123123",
                "cCaAddress":"1,Hisk APT",
                "cCaAddressCity":"Pune",
                "cCaAddressZip":"363636",
                "aFirstName":"Hritik",
                "aMiddleName":"P",
                "aLastName":"Mahajan",
                "aSuffix":"Mr",
                "bEntityName":"Maerss",
                "cAddress":"11,Subhashnagar",
                "cCity":"Surat",
                "cState":"GJ",
                "cZip":"98383838",
                "aIndividualAgentName":"Hitesh",
                "aIndividualAgentMiddleName":"P",
                "aIndividualAgentLastName":"Bisen",
                "aIndividualAgentSuffixName":"Mr",
                "bIndivualAgentAddress":"21,Shivajinagar",
                "bIndividualAgentCity":"Surat",
                "bIndividualAgentZip":"8383838383",
                "cCorporateAgentName":"Pinkesh",
                "aTypeOfBusiness":"IT",
                "aFirstName8":"Pirail",
                "aMiddleName8":"P",
                "aLastName8":"Cotala",
                "aSuffixName8":"Mr",
                "bAddress8":"21, Weresolt",
                "bCity8":"Newyork",
                "bState8":"AP",
                "bZip8":"212121",
                "date":"21-Jan-2018",
                "typedName":"Harish Mahajan",
                "title":"Harish",
                "entityName":"HarishEntity",
                "entityNumber":"121212",
                "commentsLine1":"commentsLine1",
                "commentsLine2":"commentsLine2",
                "commentsLine3":"commentsLine3",
                "commentsLine4":"commentsLine4",
                "commentsLine5":"commentsLine5",
                "commentsLine6":"commentsLine6",
                "returneeName":"Mehul",
                "returneeCompanyName":"ZyonDymonds",
                "returneeAddress":"21,Hindustan Petroliam",
                "returneeCityStateZip":"515425",
             };
            Meteor.call('ca-foreign-llc-12',data);  
        */
        'ca-foreign-llc-12': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-foreign-llc-12.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-foreign-llc-12.pdf';
            var nameRegex = null;
            var data = {
                "1LlcName": params.llcName,
                "2FileNumber": params.fileNumber,
                "3Jurisdiction": params.jurisdiction,
                "4aPrincipalAddress": params.principalAddress,
                "4aPrincipalAddressCity": params.principalAddressCity,
                "4aPrincipalAddressState": params.principalAddressState,
                "4aPrincipalAddressZip": params.principalAddressZip,
                "4bMailingAddress": params.mailingAddress,
                "4bMailingAddressCity": params.mailingAddressCity,
                "4bMailingAddressState": params.mailingAddressState,
                "4bMailingAddressZip": params.mailingAddressZip,
                "4cCaAddress": params.cCaAddress,
                "4cCaAddressCity": params.cCaAddressCity,
                "4cCaAddressZip": params.cCaAddressZip,
                "5aFirstName": params.aFirstName,
                "5aMiddleName": params.aMiddleName,
                "5aLastName": params.aLastName,
                "5aSuffix": params.aSuffix,
                "5bEntityName": params.bEntityName,
                "5cAddress": params.cAddress,
                "5cCity": params.cCity,
                "5cState": params.cState,
                "5cZip": params.cZip,
                "6aIndividualAgentName": params.aIndividualAgentName,
                "6aIndividualAgentMiddleName": params.aIndividualAgentMiddleName,
                "6aIndividualAgentLastName": params.aIndividualAgentLastName,
                "6aIndividualAgentSuffixName": params.aIndividualAgentSuffixName,
                "6bIndivualAgentAddress": params.bIndivualAgentAddress,
                "6bIndividualAgentCity": params.bIndividualAgentCity,
                "6bIndividualAgentZip": params.bIndividualAgentZip,
                "6cCorporateAgentName": params.cCorporateAgentName,
                "7aTypeOfBusiness": params.aTypeOfBusiness,
                "8aFirstName": params.aFirstName8,
                "8aMiddleName": params.aMiddleName8,
                "8aLastName": params.aLastName8,
                "8aSuffixName": params.aSuffixName8,
                "8bAddress": params.bAddress8,
                "8bCity": params.bCity8,
                "8bState": params.bState8,
                "8bZip": params.bZip8,
                "9Date": params.date,
                "9TypedName": params.typedName,
                "9Title": params.title,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "2CommentsLine5": params.commentsLine5,
                "2CommentsLine6": params.commentsLine6,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
            }
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data", data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },
        /* ca-foreign-lp-5
        *  var data = {
            "one1":"0001",
            "two2":"0002",
            "six6":"Yes",
            "firstName":"Harish",
            "lastName":"Mahajan",
            "phoneNumber":"123456789",
            "entityName":"En009",
            "entityNumber":"451278",
            "commentsLine1":"commentsLine1",
            "commentsLine2":"commentsLine2",
            "commentsLine3":"commentsLine3",
            "commentsLine4":"commentsLine4",
            "returneeName":"Harry",
            "returneeCompanyName":"Harry pvt ltd",
            "returneeAddress":"New york",
            "returneeCityStateZip":"121212",
            "a2":"12",
            "b2":"Jan",
            "c2":"2017",
            "d5":"d5",
            "aStreetAddress":"201, ShivajiNagar",
            "aCity":"Surat",
            "aZip":"212121",
            "bCity":"Mumbai",
            "bZip":"MH",
            "cStreetAddress":"Surat, ShivajiNagar",
            "cCity":"Surat",
            "cZip":"2929292",
            "aState":"GJ",
            "bState":"GJ",
            "bMailingAddress":"hmahajan.dmi@gmail.com",
            "aAgentsName":"Harish",
            "aAgentsMiddleName":"McCalo",
            "aAgentsLastName":"Poll",
            "aAgentsSuffix":"Mr.",
            "bAgentsAddress":"PO Box 12",
            "bCity4":"Surat",
            "bZip4":"123321",
            "cAgentsName":"Python",
            "generalPartner":"Science",
            "cState":"PH",
            "state":"OL",
            "streetAddress1":"34,JivanBharti",
            "city1":"Piplod",
            "zip":"251025",
            "typeName":"Pirvas",
            }

            Meteor.call('ca-foreign-lp-5',data);  
        */
        'ca-foreign-lp-5': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-foreign-lp-5.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-foreign-lp-5.pdf';
            var nameRegex = null;
            var data = {
                "1": params.nameofPartnership,
                "2": params.streetAddress,
                "6": params.six6,
                "1FirstName": params.firstName,
                "1LastName": params.lastName,
                "1PhoneNumber": params.phoneNumber,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip,
                "2a": params.a2,
                "2b": params.b2,
                "2c": params.c2,
                "5d": params.d5,
                "3aStreetAddress": params.aStreetAddress,
                "3aCity": params.aCity,
                "3aZip": params.aZip,
                "3bcity": params.bCity,
                "3bZip": params.bZip,
                "3cStreetAddress": params.cStreetAddress,
                "3cCity": params.cCity,
                "3cZip": params.cZip,
                "3aState": params.aState,
                "3bState": params.bState,
                "3bMailingAddress": params.bMailingAddress,
                "4aAgentsName": params.aAgentsName,
                "4aAgentsMiddleName": params.aAgentsMiddleName,
                "4aAgentsLastName": params.aAgentsLastName,
                "4aAgentsSuffix": params.aAgentsSuffix,
                "4bAgentsAddress": params.bAgentsAddress,
                "4bCity": params.bCity4,
                "4bZip": params.bZip4,
                "4cAgentsName": params.cAgentsName,
                "5GeneralPartner": params.generalPartner,
                "3cState": params.cState,
                "5State": params.state,
                "5StreetAddress1": params.streetAddress1,
                "5City1": params.city1,
                "5Zip": params.zip,
                "TypeName": params.typeName
            };
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data", data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },
        /* ca-gp-1
        var data = {
            "nameofPartnership":"111one",
            "streetAddress":"222two",
            "mailingAddress":"444four",
            "agentName":"Yes",
            "a3":"aa",
            "b3":"dd",
            "a5":"ff",
            "b5":"gg",
            "c5":"hh",
            "a7":"jj",
            "b7":"kk",
            "c7":"ll",
            "d7":"oo",
            "e7":"uu",
            "f7":"yy",
            "a9":"tt",
            "b9":"rr",
            "firstName":"Harish",
            "lastName":"Mahajan",
            "phoneNumber":"8000641661",
            "entityName":"Hollywood",
            "entityNumber":"121212",
            "commentsLine1":"Hey1",
            "commentsLine2":"Hey2",
            "commentsLine3":"Hey3",
            "commentsLine4":"Hey4",
            "returneeName":"Roy",
            "returneeCompanyName":"Raz Pvt Ltd",
            "returneeAddress":"21, shivajinagar surat",
            "returneeCityStateZip":"123458"
            }
            Meteor.call('ca-gp-1',data); 
        */
        'ca-gp-1': function (params) {
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-gp-1.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-gp-1.pdf';
            var nameRegex = null;
            var data = {
                "1": params.nameofPartnership,
                "2": params.streetAddress,
                "4": params.mailingAddress,
                "6": params.agentName,
                "3a": params.a3,
                "3b": params.b3,
                "5a": params.a5,
                "5b": params.b5,
                "5c": params.c5,
                "7a": params.a7,
                "7b": params.b7,
                "7c": params.c7,
                "7d": params.d7,
                "7e": params.e7,
                "7f": params.f7,
                "9a": params.a9,
                "9b": params.b9,
                "1FirstName": params.firstName,
                "1LastName": params.lastName,
                "1PhoneNumber": params.phoneNumber,
                "2EntityName": params.entityName,
                "2EntityNumber": params.entityNumber,
                "2CommentsLine1": params.commentsLine1,
                "2CommentsLine2": params.commentsLine2,
                "2CommentsLine3": params.commentsLine3,
                "2CommentsLine4": params.commentsLine4,
                "3ReturneeName": params.returneeName,
                "3ReturneeCompanyName": params.returneeCompanyName,
                "3ReturneeAddress": params.returneeAddress,
                "3ReturneeCityStateZip": params.returneeCityStateZip
            }
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data", data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },
        /*
        
        var data = {
        "management":"Yes",  // 'Yes' for checked and 'No' for unchecked. 
        "firstName":"Harish",
        "lastName":"Patel",
        "phoneNumber":"124578963",
        "entityName":"Harish",
        "entityNumber":"215487963",
        "commentsLine1":"abc",
        "commentsLine2":"def",
        "commentsLine3":"ghi",
        "commentsLine4":"jkl",
        "returneeName":"Hemendra",
        "returneeCompanyName":"Dharmendra",
        "returneeAddress":"33,Kokila",
        "returneeCityStateZip":"8754216",
        "name":"Harish",
        "aStreetAddress":"Shivajinagar",
        "bZip":"787909",
        "aCity":"Kim",
        "aZip":"838883",
        "bMailingAddress":"hmahajan.dmi@gmail.com",
        "bCity":"Surat",
        "bState":"Gujarat",
        "aAgentsName":"Bhavan",
        "cAgentsName":"Chan",
        "aAgentsMiddleName":"M",
        "aAgentsLastName":"Sharma",
        "aAgentsSuffix":"Mr",
        "bAgentsAddress":"Tikol 90",
        "bCity":"Surat",
        "bZip":"342345",
        "typeNameOfSigner":"1212",
        }
        Meteor.call('ca-llc',data);
        */
        'ca-llc':function(params){
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-llc.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-llc.pdf';
            var nameRegex = null;
            var data = {
                "4":params.management,
                "1FirstName":params.firstName,
                "1LastName":params.lastName,
                "1PhoneNumber":params.phoneNumber,
                "2EntityName":params.entityName,
                "2EntityNumber":params.entityNumber,
                "2CommentsLine1":params.commentsLine1,
                "2CommentsLine2":params.commentsLine2,
                "2CommentsLine3":params.commentsLine3,
                "2CommentsLine4":params.commentsLine4,
                "3ReturneeName":params.returneeName,
                "3ReturneeCompanyName":params.returneeCompanyName,
                "3ReturneeAddress":params.returneeAddress,
                "3ReturneeCityStateZip":params.returneeCityStateZip,
                "1name":params.name,
                "2aStreetAddress":params.aStreetAddress,
                "2bZip":params.bZip,
                "2aCity":params.aCity,
                "2aZip":params.aZip,
                "2bMailingAddress":params.bMailingAddress,
                "2bCity":params.bCity,
                "2bState":params.bState,
                "3aAgentsName":params.aAgentsName,
                "3cAgentsName":params.cAgentsName,
                "3aAgentsMiddleName":params.aAgentsMiddleName,
                "3aAgentsLastName":params.aAgentsLastName,
                "3aAgentsSuffix":params.aAgentsSuffix,
                "3bAgentsAddress":params.bAgentsAddress,
                "3bCity":params.bCity,
                "3bZip":params.bZip,
                "6TypeNameOfSigner":params.typeNameOfSigner
             }
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data",data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-llc-12
        var data = {
            "llcName":"llcname",
            "fileNumber":"199191",
            "jurisdiction":"kakak",
            "aPrincipalAddress":"21,Las Vegas, KRO - 90",
            "aPrincipalAddressCity":"Las Vegas",
            "aPrincipalAddressState":"GJ",
            "aPrincipalAddressZip":"456123",
            "bMailingAddress":"hmahajan.dmi@gmail.com",
            "bMailingAddressCity":"Mumbai",
            "bMailingAddressState":"GJ",
            "bMailingAddressZip":"231321",
            "cCaAddress":"Pop 23",
            "cCaAddressCity":"California",
            "cCaAddressZip":"390292",
            "aFirstName":"Harish",
            "aMiddleName":"P",
            "aLastName":"Mahajan",
            "aSuffix":"QA",
            "bEntityName":"En123",
            "cAddress":"POP",
            "cCity":"Surat",
            "cState":"GP",
            "cZip":"842512",
            "aIndividualAgentName":"Mario",
            "aIndividualAgentMiddleName":"F",
            "aIndividualAgentLastName":"Costa",
            "aIndividualAgentSuffixName":"Hr",
            "bIndivualAgentAddress":"21,Hello World Apt",
            "bIndividualAgentCity":"Sumes",
            "bIndividualAgentZip":"987456",
            "cCorporateAgentName":"Kososo",
            "aTypeOfBusiness":"IT",
            "aFirstName":"Pwrker",
            "aMiddleName":"L",
            "aLastName":"Jane",
            "aSuffixName":"Miss",
            "bAddress":"9-A, Behind New city hospital",
            "bCity":"Vadodra",
            "bState":"GJ",
            "bZip":"333222",
            "date":"10-12-2017",
            "typedName":"Harish",
            "title":"Title is here",
            "entityName":"Harish",
            "entityNumber":"999000",
            "commentsLine1":"com1",
            "commentsLine2":"com2",
            "commentsLine3":"com3",
            "commentsLine4":"com4",
            "commentsLine5":"com5",
            "commentsLine6":"com6",
            "returneeName":"Herry",
            "returneeCompanyName":"Purk Pvt Ltd",
            "returneeAddress":"54, Losd Park",
            "returneeCityStateZip":"114455"
            }
            Meteor.call('ca-llc-12',data);
        */
        'ca-llc-12':function(params){
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-llc-12.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-llc-12.pdf';
            var nameRegex = null;
            
            var data = {
                "1LlcName":params.llcName,
                "2FileNumber":params.fileNumber,
                "3Jurisdiction":params.jurisdiction,
                "4aPrincipalAddress":params.aPrincipalAddress,
                "4aPrincipalAddressCity":params.aPrincipalAddressCity,
                "4aPrincipalAddressState":params.aPrincipalAddressState,
                "4aPrincipalAddressZip":params.aPrincipalAddressZip,
                "4bMailingAddress":params.bMailingAddress,
                "4bMailingAddressCity":params.bMailingAddressCity,
                "4bMailingAddressState":params.bMailingAddressState,
                "4bMailingAddressZip":params.bMailingAddressZip,
                "4cCaAddress":params.cCaAddress,
                "4cCaAddressCity":params.cCaAddressCity,
                "4cCaAddressZip":params.cCaAddressZip,
                "5aFirstName":params.aFirstName,
                "5aMiddleName":params.aMiddleName,
                "5aLastName":params.aLastName,
                "5aSuffix":params.aSuffix,
                "5bEntityName":params.bEntityName,
                "5cAddress":params.cAddress,
                "5cCity":params.cCity,
                "5cState":params.cState,
                "5cZip":params.cZip,
                "6aIndividualAgentName":params.aIndividualAgentName,
                "6aIndividualAgentMiddleName":params.aIndividualAgentMiddleName,
                "6aIndividualAgentLastName":params.aIndividualAgentLastName,
                "6aIndividualAgentSuffixName":params.aIndividualAgentSuffixName,
                "6bIndivualAgentAddress":params.bIndivualAgentAddress,
                "6bIndividualAgentCity":params.bIndividualAgentCity,
                "6bIndividualAgentZip":params.bIndividualAgentZip,
                "6cCorporateAgentName":params.cCorporateAgentName,
                "7aTypeOfBusiness":params.aTypeOfBusiness,
                "8aFirstName":params.aFirstName,
                "8aMiddleName":params.aMiddleName,
                "8aLastName":params.aLastName,
                "8aSuffixName":params.aSuffixName,
                "8bAddress":params.bAddress,
                "8bCity":params.bCity,
                "8bState":params.bState,
                "8bZip":params.bZip,
                "9Date":params.date,
                "9TypedName":params.typedName,
                "9Title":params.title,
                "2EntityName":params.entityName,
                "2EntityNumber":params.entityNumber,
                "2CommentsLine1":params.commentsLine1,
                "2CommentsLine2":params.commentsLine2,
                "2CommentsLine3":params.commentsLine3,
                "2CommentsLine4":params.commentsLine4,
                "2CommentsLine5":params.commentsLine5,
                "2CommentsLine6":params.commentsLine6,
                "3ReturneeName":params.returneeName,
                "3ReturneeCompanyName":params.returneeCompanyName,
                "3ReturneeAddress":params.returneeAddress,
                "3ReturneeCityStateZip":params.returneeCityStateZip
            }
 
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data",data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-llp-1
           var data = {
            "name":"Peter",
            "mailAddress":"hmaha@gmail.com",
            "agentsName":"Harry",
            "agentsAddress":"12, Sus",
            "agentsZip":"121212",
            "relatedTo":"abc",
            "jurisdiction":"cde",
            "llpFileNo":"123321",
            "llpName":"Xyz",
            "llpJurisdiction":"mno",
            "lLpPrincipalAddress":"21 pok road",
            "dateSigned":"12-12-2017",
            "printName":"Harish",
            "title":"Harish",
            "firstName":"Harris",
            "lastName":"Jhon",
            "phoneNumber":121212,
            "entityName":"ENT-1001",
            "entityNumber":"32123",
            "commentsLine1":"com1",
            "commentsLine2":"com2",
            "commentsLine3":"com3",
            "commentsLine4":"com4",
            "returneeName":"Rock",
            "returneeCompanyName":"TheRock Company",
            "returneeAddress":"Newyork",
            "returneeCityStateZip":"432432",
            "principalAddress":"JokPOL",
            "mailCity":"Surat",
            "principalCity":"Newyork",
            "principalState":"GJ",
            "principalZipCode":"845162",
            "mailState":"Texas",
            "mailZipCode":"122054",
            "agentsCity":"Surat",
            "signature":"HarryPorter",
            "city":"Surat",
            "state":"GJ",
            "zipCode":"512784",
            "signature6":"MarinaGill",
            "typeOfBusiness":1,
            "placeOfFormation":2, 
            }

            If you want to check following fields for placeOfFormation then pass the given value
            ************************************************************************************
            Fields                                                              Values

            1) California registered LLP formed under the laws of California. = "Yes"
            2) Foreign LLP formed under the laws of                           = 2
            ************************************************************************************
            If you want to check following fields for typeOfBusiness then pass the given value
            ************************************************************************************
            Fields                                  Values
            1) The practice of Architecture            = "Yes"
            2) The practice of Engineering             = 1
            3) The practice of Land Surveying          = 2
            4) The practice of Law                     = 3
            5) The practice of Public Accountancy      = 4
            6) Related to                              = 5

            Meteor.call('ca-llp-1',data);
        */

        'ca-llp-1':function(params){
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-llp-1.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-llp-1.pdf';
            var nameRegex = null;
            var data = {
                "1Name":params.name,
                "3MailAddress":params.mailAddress,
                "4AgentsName":params.agentsName,
                "4AgentsAddress":params.agentsAddress,
                "4AgentsZip":params.agentsZip,
                "5RelatedTo":params.relatedTo,
                "2Jurisdiction":params.jurisdiction,
                "1LlpFileNo":params.llpFileNo,
                "2LlpName":params.llpName,
                "3LlpJurisdiction":params.llpJurisdiction,
                "4LLpPrincipalAddress":params.lLpPrincipalAddress,
                "6DateSigned":params.dateSigned,
                "6PrintName":params.printName,
                "6Title":params.title,
                "1FirstName":params.firstName,
                "1LastName":params.lastName,
                "1PhoneNumber":params.phoneNumber,
                "2EntityName":params.entityName,
                "2EntityNumber":params.entityNumber,
                "2CommentsLine1":params.commentsLine1,
                "2CommentsLine2":params.commentsLine2,
                "2CommentsLine3":params.commentsLine3,
                "2CommentsLine4":params.commentsLine4,
                "3ReturneeName":params.returneeName,
                "3ReturneeCompanyName":params.returneeCompanyName,
                "3ReturneeAddress":params.returneeAddress,
                "3ReturneeCityStateZip":params.returneeCityStateZip,
                "3PrincipalAddress":params.principalAddress,
                "3MailCity":params.mailCity,
                "3PrincipalCity":params.principalCity,
                "3PrincipalState":params.principalState,
                "3PrincipalZipCode":params.principalZipCode,
                "3MailState":params.mailState,
                "3MailZipCode":params.mailZipCode,
                "4AgentsCity":params.agentsCity,
                "Signature":params.signature,
                "4City":params.city,
                "4State":params.state,
                "4ZipCode":params.zipCode,
                "6Signature":params.signature6,
                "5Checkbox":params.typeOfBusiness,
                "2Checkbox":params.placeOfFormation,
             }
             
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data",data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-lp-1.pdf
        * var data = {
            "firstName":"Harish",
            "lastName":"Mahajan",
            "phoneNumber":"123456789",
            "entityName":"En-101",
            "entityNumber":"123456789",
            "commentsLine1":"CommentsLine1",
            "commentsLine2":"CommentsLine2",
            "commentsLine3":"CommentsLine3",
            "commentsLine4":"CommentsLine4",
            "returneeName":"Harry",
            "returneeCompanyName":"ZyonNetworks",
            "returneeAddress":"31, shivajinagr",
            "returneeCityStateZip":"123456",
            "name1":"Suzen",
            "mailingAddress":"hpm@gmail.com",
            "bCity":"Surat",
            "bZip":"123456",
            "agentsName":"Hemant",
            "agentsMiddleName":"K",
            "agentsLastName":"Patel",
            "agentsSuffix":"Mr.",
            "agentsAddress":"12-B Block, Raex Apt",
            "bCity":"Newyork",
            "bZip":"54123",
            "cAgentsName":"Harry",
            "aStreetAddress":"23, Clpo Est",
            "aCity":"Surat",
            "aZip":"112233",
            "generalPartner1":"GeneralPartner1",
            "streetAddress1":"5, Park Evener",
            "zip1":"845162",
            "generalPartner2":"GeneralPartner2",
            "streetAddress2":"2, Gems Apt",
            "city2":"Kim",
            "zip2":"221122",
            "listYourNameHere1":"Harish",
            "listYourNameHere2":"Hemant",
            "city1":"Bharuch",
            "bState":"GJ",
            "state1":"MH",
            "state2":"UP"
            };
            Meteor.call('ca-lp-1',data);
        */
        'ca-lp-1':function(params){
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-lp-1.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-lp-1.pdf';
            var nameRegex = null;
            var data = {
                "1FirstName":params.firstName,
                "1LastName":params.lastName,
                "1PhoneNumber":params.phoneNumber,
                "2EntityName":params.entityName,
                "2EntityNumber":params.entityNumber,
                "2CommentsLine1":params.commentsLine1,
                "2CommentsLine2":params.commentsLine2,
                "2CommentsLine3":params.commentsLine3,
                "2CommentsLine4":params.commentsLine4,
                "3ReturneeName":params.returneeName,
                "3ReturneeCompanyName":params.returneeCompanyName,
                "3ReturneeAddress":params.returneeAddress,
                "3ReturneeCityStateZip":params.returneeCityStateZip,
                "1name1":params.name1,
                "2bMailingAddress":params.mailingAddress,
                "2bCity":params.bCity,
                "2bZip":params.bZip,
                "3aAgentsName":params.agentsName,
                "3aAgentsMiddleName":params.agentsMiddleName,
                "3aAgentsLastName":params.agentsLastName,
                "3aAgentsSuffix":params.agentsSuffix,
                "3bAgentsAddress":params.agentsAddress,
                "3bCity":params.bCity,
                "3bZip":params.bZip,
                "3cAgentsName":params.cAgentsName,
                "2aStreetAddress":params.aStreetAddress,
                "2aCity":params.aCity,
                "2aZip":params.aZip,
                "4GeneralPartner1":params.generalPartner1,
                "4StreetAddress1":params.streetAddress1,
                "4Zip1":params.zip1,
                "4GeneralPartner2":params.generalPartner2,
                "4StreetAddress2":params.streetAddress2,
                "4City2":params.city2,
                "4Zip2":params.zip2,
                "List your name here1":params.listYourNameHere1,
                "List your name here2":params.listYourNameHere2,
                "4City1":params.city1,
                "2bState":params.bState,
                "4State1":params.state1,
                "4State2":params.state2
             };
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data",data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        /* ca-proof-service-sc104
        * 
            var data = {
   "courtNameAndStreetAddress":"ZyoneNetworks Pvt Ltd",
   "hearingDate":"11-10-2017",
   "time":"08",
   "dept":"IT",
   "personsName":"Harish P Mahajan",
   "nameOfTheBusiness":"IT Software services",
   "agencyName":"Harry Inc Co.",
   "checkBox6":"1",
   "checkBox5":"1",
   "checkBox4":"1",
   "checkBox3":"1",
   "checkBox2":"1",
   "checkBox1":"1",
   "other":"this is other text",
   "checkBox17":"1",
   "onDate1":"23",
   "atTime1":"05",
   "atThisAddress1":"77, D/Block, Gandhi Apt",
   "city1":"Surat",
   "state1":"GJ",
   "zip1":"123456",
   "checkBox14":"1",
   "onDate2":"25",
   "atTime2":"02",
   "atThisAddress2":"2, APB Circle, Near KFC",
   "city2":"Mumbai",
   "state2":"MH",
   "zip2":"43213",
   "nameOfThePersonLine1":"Harish P",
   "nameOfThePersonLine2":"Mahajan",
   "onDate3":"28",
   "cityOrState":"Surat",
   "serversName":"Harry",
   "serversPhone":"654789321",
   "serversAddress":"21,Shivajinagar",
   "serversCity":"Surat",
   "serversState":"GJ",
   "serversZip":"123123123",
   "serversFee":"$50",
   "serversCountyOfRegistration":"US",
   "serversRegistrationNumber":"6845",
   "date":"10-11-2017",
   "typeOrPrintServerName":"Harish P Mahajan",
   "caseNumber":"54123",
   "caseName":"Harry Mali",
   "checkBox13":"2",
   "checkBox18":"2",
   "checkBox9":"2",
   "checkBox16":"2",
};


            Personal Service:
                if you want to checked am then
                    CheckBox16 = 1
                if you want to checked pm then
                    CheckBox16 = 2             

            Substituted Service:
                if you want to checked 'A competent adult (at least 18) at the home of, and living with the person in' checkbox then 
                    CheckBox13 = 1
                if you want to checked 'An adult who seems to be in charge where the person in usually works' checkbox then 
                    CheckBox13 = 2
                if you want to checked 'An adult who seems to be in charge where the person in usually receives mail' checkbox then 
                    CheckBox13 = 3
                if you want to checked am then
                    CheckBox18 = 1
                if you want to checked pm then
                    CheckBox18 = 2 
                if you want to checked 'At a U.S. Postal Service mail drop' then
                    CheckBox9 = 1
                if you want to checked 'At an office or business mail drop where I know the mail is picked up every day and deposited with the U.S. Postal Service' then
                    CheckBox9 = 2
                if you want to checked 'With someone else I asked to mail the documents to the person in 1 , and I have attached that person’s completed Form SC-104A.' then
                    CheckBox9 = 3
            Meteor.call('ca-proof-service-sc104',data);                
        */
        'ca-proof-service-sc104':function(params){
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-proof-service-sc104.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-proof-service-sc104.pdf';
            var nameRegex = null;
            var data = {
                "FillText46":params.courtNameAndStreetAddress,
                "FillText50":params.hearingDate,
                "FillText53":params.time,
                "FillText54":params.dept,
                "FillText45":params.personsName,
                "FillText44":params.nameOfTheBusiness,
                "FillText43":params.agencyName,
                "CheckBox6":params.checkBox6,
                "CheckBox5":params.checkBox5,
                "CheckBox4":params.checkBox4,
                "CheckBox3":params.checkBox3,
                "CheckBox2":params.checkBox2,
                "CheckBox1":params.checkBox1,
                "FillText41":params.other,
                "CheckBox17":params.checkBox17,
                "FillText37":params.onDate1,
                "FillText38":params.atTime1,
                "FillText36":params.atThisAddress1,
                "FillText34":params.city1,
                "FillText33":params.state1,
                "FillText35":params.zip1,
                "CheckBox14":params.checkBox14,
                "FillText32":params.onDate2,
                "FillText56":params.atTime2,
                "FillText31":params.atThisAddress2,
                "FillText29":params.city2,
                "FillText28":params.state2,
                "FillText30":params.zip2,
                "FillText27":params.nameOfThePersonLine1,
                "FillText26":params.nameOfThePersonLine2,
                "FillText24":params.onDate3,
                "FillText23":params.cityOrState,
                "FillText22":params.serversName,
                "FillText12":params.serversPhone,
                "FillText13":params.serversAddress,
                "FillText21":params.serversCity,
                "FillText20":params.serversState,
                "FillText19":params.serversZip,
                "FillText18":params.serversFee,
                "FillText17":params.serversCountyOfRegistration,
                "FillText16":params.serversRegistrationNumber,
                "FillText15":params.date,
                "FillText14":params.typeOrPrintServerName,
                "FillText51":params.caseNumber,
                "FillText52":params.caseName,
                "FillTxt52":params.caseName,
                "CheckBox13":params.checkBox13,
                "CheckBox18":params.checkBox18,
                "CheckBox9":params.checkBox9,
                "CheckBox16":params.checkBox16,
             };
            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    console.log("data",data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },
        /* ca-small-claims-sc100.pdf
        var data = {
            "date1":"12-12-2017",
            "time1":"11:00",
            "department1":"IT",
            "nameAndAddressOfCourt1":"8/C Block, Near Church Street",
            "date2":"11-12-2017",
            "time2":"12:00",
            "department2":"Sales",
            "nameAndAddressOfCourt2":"21/F Near Fire station",
            "date3":"15-11-2017",
            "time3":"11:30",
            "department3":"Marketing",
            "nameAndAddressOfCourt3":"33, Juhu Chopati",
            "date4":"12-12-2017",
            "clearkBy":"Harry Jhonson",
            "courtNameAndStreetAddress":"Aloha Court, Near New Merry College",
            "caseNumber":"12132",
            "caseName":"CaseName is Here",
            "defendantStreet":"12 Bhav Road",
            "defendantCity":"Surat",
            "defendantState":"GJ",
            "defendantZip":"123456",
            "defendantMailingAddress":"21 Shivajinagar",
            "defendantMailingCity":"Mumbai",
            "defendantMailingState":"GJ",
            "defendantMailingZip":"12312",
            "defendantPhone":"845125641",
            "defendantName":"Google",
            "plaintiffCheckbox1":1,
            "plaintiffCheckbox2":1,
            "plaintiffCheckbox3":1,
            "plaintiff":"This is palintiff",
            "caseNumber1":"54213",
            "defendantCheckbox1":1,
            "defendantCheckbox2":1,
            "defendantIsOnActiveMilitaryDutyName" : "Harish",
            "dendantOwes":"20",
            "oweThePlaintiffMoney":"410",
            "plaintiffDate":"12-11-2017",
            "plaintiffDateStarted":"10",
            "plaintiffDateThrough":"31",
            "plaintiffCalculateTheMoney":"200",
            "defendantCheckbox3":1,
            "plaintiffStreetAddress":"22, Shiva Place",
            "plaintiffCity":"Ajmer",
            "plaintiffState":"RJ",
            "plaintiffZip":"11123",
            "plaintiffMailingAddress":"erp@gmail.com",
            "plaintiffMailingCity":"Surat",
            "plaintiffMailingState":"GJ",
            "plaintiffMailingZip":"12121",
            "plaintiffPhone":"2102002120",
            "plaintiffName":"Harry",
            "plaintiffAddress1":"31, Roarj Food Market",
            "plaintiffCity1":"Bhusawal",
            "plaintiffState1":"MH",
            "plaintiffZip1":"432143",
            "plaintiffMailingAddress1":"kdi@gmail.com",
            "plaintiffMailingCity1":"Wasda",
            "plaintiffMailingState1":"GJ",
            "plaintiffMailingZip1":"593211",
            "plaintiffPhone2":"3212324312", //
            "plaintiffName1":"Hemant",
            "defendantAdress2":"87, C wing, Tirupati Hotel",
            "defendantCity2":"Goa",
            "defendantState2":"Goa",
            "defendantZip2":"212132",
            "jobTitle2":"Web Engineer",
            "defendantEmail2":"harish@gmail.com",
            "defendantProperty":"Propery is here",
            "claimCheckbox1":1,
            "claimCheckbox2":2,
            "claimCheckbox3":3,
            "claimCheckbox4":4,
            "claimCheckbox5":5,
            "other":"specify other here",
            "zipCodeOfThePlace":"123456",
            "attorneyClientCheckbox1":1,
            "attorneyClientCheckbox2":2,
            "claimFiledDate":"12-12-2017",
            "plaintiffDate1":"12-12-2017",
            "plaintifftypes1":"plaintiff types1",
            "plaintiffDate2":"12-12-2017",
            "plaintifftypes2":"plaintiff types2",
            "plaintiff1":"plaintiff",
            "caseNumber2":"123456",
            "possessionOfProperty1":1,
            "possessionOfProperty2":2,
            "attyClientFee_cb1":1,
            "attyClientFee_cb2":2,
            "publicEntity_cb1":1,
            "publicEntity_cb2":2,
            "twelveClaims_cb1":1,
            "twelveClaims_cb2":2,
            "more2500_cb1":1,
            "more2500_cb2":2,
            "needHelp1":"need help here 1",
            "needHelp2":"need help here 1",
        }

    if do you want to checked 'Check here if more than two plaintiffs and attach form SC-100A.' then 
        "plaintiffCheckbox1" = 1
    if do you want to checked 'Check here if either plaintiff listed above is doing business under a fictitious name. If so, attach form SC-103.' then 
        "plaintiffCheckbox2" = 1
    if do you want to checked 'Check here if any plaintiff is a “licensee” or “deferred deposit originator” (payday lender) under Financial' then 
        "plaintiffCheckbox3" = 1


    Why are you filing your claim at this courthouse?
    if do you want to checked 1st checkbox then 
        "claimCheckbox1":1,
    if do you want to checked 2nd checkbox then     
        "claimCheckbox2":2,
    if do you want to checked 3rd checkbox then         
        "claimCheckbox3":3,
    if do you want to checked 4th checkbox then         
        "claimCheckbox4":4,
    if do you want to checked 5th checkbox then         
        "claimCheckbox5":5,
    
    if do you want to checked the "Yes" from question number 7 then
        "attyClientFee_cb1":1
    if do you want to checked the "No" from question number 7 then
        "attyClientFee_cb2":2
    if do you want to checked the checkbox 'If yes, and if you have had arbitration, fill out form SC-101, attach it to this form, and check here:' then
        "attorneyClientCheckbox":1

    if do you want to checked "Yes" from question number 4 then
        possessionOfProperty1 = 1
    if do you want to checked "No" from question number 4 then
        possessionOfProperty2 = 2

    if do you want to checked "Yes" from question number 8 then
        publicEntity_cb1 = 1
    if do you want to checked "No" from question number 8 then
        publicEntity_cb2 = 1

    if do you want to checked "Yes" from question number 9 then
        twelveClaims_cb1 = 1
    if do you want to checked "No" from question number 9 then
        twelveClaims_cb2 = 2
        
    if do you want to checked "Yes" from question number 10 then
        more2500_cb1 = 1
    if do you want to checked "No" from question number 10 then
        more2500_cb2 = 2
    */
        

        'ca-small-claims-sc100':function(params){
            var sourcePDF = process.env.PWD + '/' + 'public/library/ca-small-claims-sc100.pdf';
            var destinationPDF = process.env.PWD + '/' + 'public/output/ca-small-claims-sc100.pdf';
            var nameRegex = null;
          
            var data = {
                "topmostSubform[0].Page1[0].FillText02[0]":params.date1,
                "topmostSubform[0].Page1[0].FillText03[0]":params.time1,
                "topmostSubform[0].Page1[0].FillText04[0]":params.department1,
                "topmostSubform[0].Page1[0].FillText05[0]":params.nameAndAddressOfCourt1,
                "topmostSubform[0].Page1[0].FillText06[0]":params.date2,
                "topmostSubform[0].Page1[0].FillText07[0]":params.time2,
                "topmostSubform[0].Page1[0].FillText08[0]":params.department2,
                "topmostSubform[0].Page1[0].FillText09[0]":params.nameAndAddressOfCourt2,
                "topmostSubform[0].Page1[0].FillText10[0]":params.date3,
                "topmostSubform[0].Page1[0].FillText11[0]":params.time3,
                "topmostSubform[0].Page1[0].FillText12[0]":params.department3,
                "topmostSubform[0].Page1[0].FillText13[0]":params.nameAndAddressOfCourt3,
                "topmostSubform[0].Page1[0].on_date_ff[0]":params.date4,
                "topmostSubform[0].Page1[0].on_date_ff[1]":params.clearkBy,
                "topmostSubform[0].Page1[0].Stamp_court_case[0].CourtInfo_ft[0]":params.courtNameAndStreetAddress,
                "topmostSubform[0].Page1[0].Stamp_court_case[0].CaseNumber_ft[0]":params.caseNumber,
                "topmostSubform[0].Page1[0].Stamp_court_case[0].CaseName_ft[0]":params.caseName,
                "topmostSubform[0].Page2[0].DefendantAdress[0]":params.defendantStreet,
                "topmostSubform[0].Page2[0].DefendantCity[0]":params.defendantCity,
                "topmostSubform[0].Page2[0].DefendantState[0]":params.defendantState,
                "topmostSubform[0].Page2[0].DefendantZip[0]":params.defendantZip,
                "topmostSubform[0].Page2[0].DefendantMailingAddress[0]":params.defendantMailingAddress,
                "topmostSubform[0].Page2[0].DefendantMailingCity[0]":params.defendantMailingCity,
                "topmostSubform[0].Page2[0].DefendantMailingState[0]":params.defendantMailingState,
                "topmostSubform[0].Page2[0].DefendantMailingZip[0]":params.defendantMailingZip,
                "topmostSubform[0].Page2[0].DefendantPhone[0]":params.defendantPhone, 
                "topmostSubform[0].Page2[0].DefendantEmail[0]":params.defendantName,
                "topmostSubform[0].Page2[0].T100[0]":params.plaintiffCheckbox1,
                "topmostSubform[0].Page2[0].T101[0]":params.plaintiffCheckbox2,
                "topmostSubform[0].Page2[0].T100[1]":params.plaintiffCheckbox3,
                "topmostSubform[0].Page2[0].#area[3].FillText17[0]":params.plaintiff,
                "topmostSubform[0].Page2[0].#area[3].CaseNumber_ft[0]":params.caseNumber1,
                "topmostSubform[0].Page2[0].CheckBox03[0]":params.defendantCheckbox1,
                "topmostSubform[0].Page2[0].CheckBox04[0]":params.defendantCheckbox2,
                "topmostSubform[0].Page2[0].FillText62[0]":params.defendantIsOnActiveMilitaryDutyName,
                "topmostSubform[0].Page2[0].FillText63[0]":params.dendantOwes,
                "topmostSubform[0].Page2[0].FillText65[0]":params.oweThePlaintiffMoney,
                "topmostSubform[0].Page2[0].FillText66[0]":params.plaintiffDate,
                "topmostSubform[0].Page2[0].FillText67[0]":params.plaintiffDateStarted,
                "topmostSubform[0].Page2[0].FillText68[0]":params.plaintiffDateThrough,
                "topmostSubform[0].Page2[0].FillText70[0]":params.plaintiffCalculateTheMoney,
                "topmostSubform[0].Page2[0].CheckBox05[0]":params.defendantCheckbox3,
                "topmostSubform[0].Page2[0].PlaintiffAdress[0]": params.plaintiffStreetAddress,
                "topmostSubform[0].Page2[0].PlaintiffCity[0]":params.plaintiffCity,
                "topmostSubform[0].Page2[0].PlaintiffState[0]":params.plaintiffState,
                "topmostSubform[0].Page2[0].PlaintiffZip[0]": params.plaintiffZip,
                "topmostSubform[0].Page2[0].PlaintiffMailingAddress[0]":params.plaintiffMailingAddress,
                "topmostSubform[0].Page2[0].PlaintiffMailingCity[0]":params.plaintiffMailingCity,
                "topmostSubform[0].Page2[0].PlaintiffMailingState[0]":params.plaintiffMailingState,
                "topmostSubform[0].Page2[0].PlaintiffMailingZip[0]":params.plaintiffMailingZip,
                "topmostSubform[0].Page2[0].PlaintiffPhone[0]":params.plaintiffPhone,
                "topmostSubform[0].Page2[0].PlaintiffEmail[0]": params.plaintiffName,
                "topmostSubform[0].Page2[0].Plaintiff2Adress[0]":params.plaintiffAddress1,
                "topmostSubform[0].Page2[0].Plaintiff2City[0]":params.plaintiffCity1,
                "topmostSubform[0].Page2[0].Plaintiff2State[0]":params.plaintiffState1,
                "topmostSubform[0].Page2[0].Plaintiff2Zip[0]":params.plaintiffZip1,
                "topmostSubform[0].Page2[0].Plaintiff2MailingAddress[0]":params.plaintiffMailingAddress1,
                "topmostSubform[0].Page2[0].Plaintiff2MailingCity[0]":params.plaintiffMailingCity1,
                "topmostSubform[0].Page2[0].Plaintiff2MailingState[0]":params.plaintiffMailingState1,
                "topmostSubform[0].Page2[0].Plaintiff2MailingZip[0]":params.plaintiffMailingZip1,
                "topmostSubform[0].Page2[0].Plaintiff2Phone[0]":params.plaintiffPhone2,
                "topmostSubform[0].Page2[0].Plaintiff2Email[0]":params.plaintiffName1,
                "topmostSubform[0].Page2[0].Defendant2Adress[0]":params.defendantAdress2,
                "topmostSubform[0].Page2[0].Defendant2City[0]":params.defendantCity2,
                "topmostSubform[0].Page2[0].Defendant2State[0]":params.defendantState2,
                "topmostSubform[0].Page2[0].Defendant2Zip[0]":params.defendantZip2,
                "topmostSubform[0].Page2[0].Defendant2Phone[0]":params.jobTitle2,
                "topmostSubform[0].Page2[0].Defendant2Email[0]":params.defendantEmail2,
                "topmostSubform[0].Page3[0].FillText71[0]":params.defendantProperty,
                "topmostSubform[0].Page3[0].CheckBox07[0]":params.claimCheckbox1,
                "topmostSubform[0].Page3[0].CheckBox07[1]":params.claimCheckbox2,
                "topmostSubform[0].Page3[0].CheckBox07[2]":params.claimCheckbox3,
                "topmostSubform[0].Page3[0].CheckBox07[3]":params.claimCheckbox4,
                "topmostSubform[0].Page3[0].CheckBox07[4]":params.claimCheckbox5,
                "topmostSubform[0].Page3[0].FillText74[0]":params.other,
                "topmostSubform[0].Page3[0].FillText75[0]":params.zipCodeOfThePlace,
                "topmostSubform[0].Page3[0].CheckBox09[0]":params.attorneyClientCheckbox1,
                "topmostSubform[0].Page3[0].CheckBox11[0]":params.attorneyClientCheckbox2,
                "topmostSubform[0].Page3[0].FillText76[0]":params.claimFiledDate,
                "topmostSubform[0].Page3[0].FillText77[0]":params.plaintiffDate1,
                "topmostSubform[0].Page3[0].FillText78[0]":params.plaintifftypes1,
                "topmostSubform[0].Page3[0].FillText79[0]":params.plaintiffDate2,
                "topmostSubform[0].Page3[0].FillText80[0]":params.plaintifftypes2,
                "topmostSubform[0].Page3[0].FillText17[0]":params.plaintiff1,
                "topmostSubform[0].Page3[0].CaseNumber_ft[0]":params.caseNumber2,
                "topmostSubform[0].Page3[0].PayBeforeSue_cb[0]":params.possessionOfProperty1,
                "topmostSubform[0].Page3[0].PayBeforeSue_cb[1]":params.possessionOfProperty2,
                "topmostSubform[0].Page3[0].AttyClientFee_cb[0]":params.attyClientFee_cb1,
                "topmostSubform[0].Page3[0].AttyClientFee_cb[1]":params.attyClientFee_cb2,
                "topmostSubform[0].Page3[0].PublicEntity_cb[0]":params.publicEntity_cb1,
                "topmostSubform[0].Page3[0].PublicEntity_cb[1]":params.publicEntity_cb2,
                "topmostSubform[0].Page3[0].TwelveClaims_cb[0]":params.twelveClaims_cb1,
                "topmostSubform[0].Page3[0].TwelveClaims_cb[1]":params.twelveClaims_cb2,
                "topmostSubform[0].Page3[0].More2500_cb[0]":params.more2500_cb1,
                "topmostSubform[0].Page3[0].More2500_cb[1]":params.more2500_cb2,
                "topmostSubform[0].Page4[0].LocalInfo[0].FillText81[0]":params.needHelp1,
                "topmostSubform[0].Page5[0].LocalInfo[0].FillText81[0]":params.needHelp2,
            }
             

            var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(JSON.stringify(fdfData));
                }
            });
            //console.log("data",data);
            pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
                if (err) {
                    console.log("failed to load file");
                } else {
                    //console.log("data",data);
                    console.log("In callback (we're done).");
                }
            });
            Demo.insert({
                pdf_fields: JSON.stringify(data),
                status: 'active'
            });
        },

        // 'ca-corp-si-so550.pdf':function(params){
        //     var sourcePDF = process.env.PWD + '/' + 'public/library/ca-corp-si-so100.pdf';
        //     var destinationPDF = process.env.PWD + '/' + 'public/output/ca-corp-si-so100.pdf';
        //     var nameRegex = null;
        //     var data = { } 
        //     var FDF_data = pdfFiller.generateFDFTemplate(sourcePDF, nameRegex, function (err, fdfData) {
        //         if (err) {
        //             console.log(err);
        //         } else {
        //             console.log(JSON.stringify(fdfData));
        //         }
        //     });
        //     pdfFiller.fillForm(sourcePDF, destinationPDF, data, function (err) {
        //         if (err) {
        //             console.log("failed to load file");
        //         } else {
        //             console.log("data",data);
        //             console.log("In callback (we're done).");
        //         }
        //     });
        //     Demo.insert({
        //         pdf_fields: JSON.stringify(data),
        //         status: 'active'
        //     });
        // },
    });

});
