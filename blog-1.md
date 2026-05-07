# Why I stopped using "any" and started using "unknown"

When I first started with TypeScript, I thought the `any` type was the best thing ever. If I didn't know what type a variable was, I just put `any` and the errors went away! But then I learned that `any` is actually a "type safety hole" and it can break your whole project.

---

## The problem with "any"

Using `any` is like telling TypeScript to "shut up and stop helping." It turns off all the cool features that make TypeScript good. 

If you have a variable with `any`, you can do anything to it, even things that don't make sense. And TypeScript won't say a word until your app crashes in the browser.

```typescript
let myData: any = "I am a string";

myData.toUpperCase(); 
myData(); 
myData.somethingFake(); 
```

That is why people call it a "hole"—it lets bugs slip through easily.

---

## Why "unknown" is much safer

Then I found out about `unknown`. It also lets you put anything inside it, but there is one big catch: **you can't use it until you check what it is.**

It's like a mystery box. You know something is inside, but you have to open it and look before you can play with it.

```typescript
let mystery: unknown = "Hello";

mystery.toUpperCase(); 
```

---

## Type Narrowing (Checking the type)

To use an `unknown` variable, you have to use "Type Narrowing." It sounds like a big word, but it just means using an `if` statement to check the type.

```typescript
function showData(data: unknown) {
    if (typeof data === "string") {
        console.log(data.toUpperCase());
    } else if (typeof data === "number") {
        console.log(data.toFixed(2));
    } else {
        console.log("I don't know what this is!");
    }
}
```

Now TypeScript is happy because we proved we are being careful.

---

## Conclusion

I used to think `any` was my friend, but now I know `unknown` is the real hero. It forces me to check my data before I use it, which means fewer crashes and less stress for me!
