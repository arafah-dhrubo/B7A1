# Generics are not as scary as they look!

I used to see the `<T>` symbol in other people's code and I was really confused. It looked like some secret math language. But after playing with it, I realized it's just a way to make your code work with any type without losing the "type safety."

---

## What is a Generic?

Think of a Generic like a placeholder. When you write a function, you don't know if the user will send a number, a string, or an object. Instead of picking one, you use a "type variable" like `<T>`. 

It’s like saying: "Hey TypeScript, I'll tell you what type this is later when I actually use it!"

---

## Making functions reusable

Imagine you want a function that just grabs the first item from an array. 

If you use `any`, TypeScript forgets what the item was. But if you use Generics, it remembers!

```typescript
function getFirst<T>(items: T[]): T {
    return items[0];
}

const num = getFirst([10, 20]);
const str = getFirst(["Hi", "Bye"]);
```

The `<T>` captures the type automatically. It's like magic!

---

## Using "keyof" to stay safe

I also learned this cool trick called `keyof`. You can use it with Generics to make sure you don't make a typo when looking for a property in an object.

```typescript
function getProp<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user = { id: 1, name: "Dhrubo" };

const myName = getProp(user, "name");
const myEmail = getProp(user, "email");
```

TypeScript stops me from searching for things that aren't there. This saves me so much debugging time.

---

## Conclusion

Generics might look weird at first with all the `< >` brackets, but they are actually super helpful. They let me write one function that works for everyone, but still keeps all the strict rules of TypeScript. If you want to write clean code, you should definitely give them a try!