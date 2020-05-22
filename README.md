# Angular-Mocked-Services-Example
Example of Mocking Different Services 

## Notable Files


## Source Files:
FooService - a service with a function "foo" that returns a value. 

FoobservableService - a service with a function "foobservable" that returns an observable object which produces a string in three character chunks.

FooComponent - a component that displays the value of returned by FooService's `foo` function.

FoobservableComponent - a component that displays the value of returned by FooService's `foobservable` function.


### Unit Tests
FooService Test - tests that `foo()` returns "foo".

FoobservableService Test - tests that `foobservable()` returns an observables that produces the string "foo", "bar", and "baz".

FooComponent Test - tests that the component's `magicWord` is whatever the FooService's `foo()` function returns.

FoobservableComponent Test - tests that the component's `combinedData` is the combined form of what the FoobservableService's `foobservable()` function produces.


### Mocks

These are the mock versions of the services which are used in the component unit tests in place of the real services.

MockFooService - has a foo function that returns "bar" instead of "foo". 

MockFoobservableService - returns an observable which has a predefined fakeDataStream.