# What is TriesCatch?

**TriesCatch** is a little tool that aims to improve JavaScript's native Try/Catch feature. 

# What's wrong with Try/Catch ?

- `catch` catches every errors in the try block, even the unexpected ones.
- You can't pass data from within the trycatch to the outside if you don't declare the variable before.

# Features

- The parameter of the `catch` block serves as a filter
- You can chain `catch` blocks to handle mutltiple errors from the same `try` block
- You can pass data from inside to the outside of the try/catch
- You're not obliged to catch right away.

# Examples

Only catch the error you're looking for
```js
let post;
tries(() => {
  post = fetch("localhost:3000/posts");

      // First parameter is the error you want to catch
}).catch(TypeError, (error) => {
  console.log("Error happened, contact administrator", error);
})
```

Pass data from within to the outside
```js
let post = tries((data) => {
  data.req = fetch("localhost:3000/posts");
      // First parameter is the error you want to catch
}).catch(TypeError, (error) => {
  console.log("Error happened, contact administrator", error);
})

console.log(post.data.req)
```

Catch later (idk why you would do that)
```js
let post = tries((data) => {
  data.req = fetch("localhost:3000/posts");
})

//do whatever you want
alert("idk why you would do that")

post.catch(TypeError, (error) => {
  console.log("Error happened, contact administrator", error);
})

console.log(post.data.req)
```


# How to install ?

Install the npm package:
```
npm install triescatch
```

# Why ?

I always thought that TypeScript could allow you to type your error in a catch block, in order to catch only a specific type of error. But it's not the case, you can type an error in the parameters of a catch block, but there are only two available types: undefined and error. So TypeScript does not help you with that, I don't know why I thought it would.

I was tired of doing this everytime:
```js
let post;
try {
  post = fetch("some dummy fetch")
} catch(e) {
  if (e instance of YOUR_ERROR) {
    //do some stuff
  }
}
```
So I made my own. The "catch later" thing is kind of a gimmick. But I feel like catching multiple specific errors is great, that way I can handle a specific action differently depending on the error returned. It's more convenient than embedding try/catches within try/catches.

And I like that I can put my try catch in a variable, in order to access its content from outside.
I wish we could do that in native javascript.

# ~~Still not~~ mature enough

~~The `tries` function is not using TypeScript as of now, I'm too junior to figure out how to do that with TypeScript. It will take time, and I don't know if this project has enough value to be used, but I'll keep working on this. If you have any suggestions or contributions, well, my door is wide open.~~

Now it's made with typescript. I'm still too junior for that, but yeah. It works now.