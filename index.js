let loadScript = path => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.setAttribute("src", path);
    document.body.appendChild(script);

    script.onload = function() {
      resolve();
    };
    script.onerror = function() {
      reject("Failed");
    };
  });
};

loadScript("my-module.js")
  .then(module => {
    helloWorld("joe");
  })
  .catch(e => {
    console.log(e);
  });
