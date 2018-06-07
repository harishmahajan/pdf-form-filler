//ROUTING FILE

Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'spinner',

});

Router.route('/', function() {
    this.render('Demos');
});