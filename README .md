# Load script as a promise

Let's create a function `loadScript`.

I should be able to use it like this:

```js
loadScript('./my-module.js')
    .then((module) => {
        console.log(module);
        helloWorld('joe')
    }).catch((e) => {
        console.log(e);
    });
```

`helloWorld` is a function defined inside `my-module.js`.

Take a look at the `onload` event [here](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload)