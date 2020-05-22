# Angular-Mocked-Services-Example
Example of Mocking Different Services 

## Notable Files


## Source Files:
[FooService](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/services/foo.service.ts) - a service with a function "foo" that returns a value. 

[FoobservableService](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/services/foobservable.service.ts) - a service with a function "foobservable" that returns an observable object which produces a string in three character chunks.

[FooComponent](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/app/foo-comp/foo-comp.component.ts) - a component that displays the value of returned by FooService's `foo` function.

[FoobservableComponent](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/app/foobservable-comp/foobservable-comp.component.ts) - a component that displays the value of returned by FooService's `foobservable` function.


### Unit Tests
[FooService Test](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/services/foo.service.spec.ts) - tests that `foo()` returns "foo".

[FoobservableService Test](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/services/foobservable.service.spec.ts) - tests that `foobservable()` returns an observables that produces the string "foo", "bar", and "baz".

[FooComponent Test](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/app/foo-comp/foo-comp.component.spec.ts) - tests that the component's `magicWord` is whatever the FooService's `foo()` function returns.

[FoobservableComponent Test](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/app/foobservable-comp/foobservable-comp.component.spec.ts) - tests that the component's `combinedData` is the combined form of what the FoobservableService's `foobservable()` function produces.


### Mocks

These are the mock versions of the services which are used in the component unit tests in place of the real services.

[MockFooService](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/mocks/MockFooService.ts) - has a foo function that returns "bar" instead of "foo". 

[MockFoobservableService](https://github.com/JimLynchCodes/Angular-Mocked-Services-Example/blob/master/angular-mocked-services-example/src/mocks/MockFoobservableService.ts) - returns an observable which has a predefined fakeDataStream.