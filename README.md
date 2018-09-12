# Angular 4.x Nested Reactive Forms

Current version: Angular 4.4.3

This is a sample project that demonstrates one nice way of handling nested reactive forms.  This project was inspired by Matt Brophy's blog post and excellent article on how to pass the delegation of form initialization to the nested form. [Nested Reactive Forms in Angular2](http://brophy.org/post/nested-reactive-forms-in-angular2)

[View Demo](https://kahanu.github.io/AngularNestedReactiveForms/)

The biggest difference between this example (and Matt's) and some standard nested reactive forms examples, is that each nested form is its own component and manages its own form data.  This way maintaining the form design as it grows is easy, since you just need to update the form component, and all components using this component will get the updated form elements.

## Screenshots
This is a screenshot of the application.

![alt-text](https://github.com/kahanu/AngularNestedReactiveForms/blob/master/screenshots/nested-forms-screenshot.png "Angular Nested Reactive Forms")
