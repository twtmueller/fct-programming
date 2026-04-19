# Instructions

Before starting, please take a look at the code in the index.js file
and make sure you understand what it is doing and how.

To run the code after setting it up using `npm install`, there are 
two npm commands to use, one for the original and one for the file
you will be working in, `refactor.ts`:

```javascript
> npm run exec   (for the original, procedural version)
> npm run rexec  (for the version you are working in)
```

Both files will be identical and thus provide the same output for a
shopping cart pre-filled with various items, but as you change the 
code in the file `refactor.js`, it allows you to visually compare the 
output (my cheap form of TDD).

## Step 1: Make code more efficient

You might have noticed an inefficient code design in the original. 
As a first step, create an in-memory `Map<string, Product>` from the 
`ProductCatalog` and use it as a lookup table for the processing in 
the following steps.

Make sure you use an `Array.xxx()` function to iterate over the entries
in the `Map` and store the result in a `const`ant

## Step 2: Refactor the Algorithm to Use Functions

Think through how you would go about changing the implementation to 
use JavaScript's `Array` functions. Focus only on calculating the
total price and don't worry about the display of the `fullCart`.

When thinking about which functions to create, consider that each
function should only do one thing and ideally be free of side effects.
For now, some functions—such as to "merge" the inventory information with
the cart content—will need access to information outside their scope, 
making it an impure function. Do not worry about that, as you'll be 
resolving that in the next step.

> _Note:_ Not necessarily for this example, but if you need to add/remove
> elements to an array, JavaScript offers the `Array.toSpliced()` method,
> which creates a new array with the changes instead of mutating the
> instance you are calling it on, treating an Array in an immutable way.
 
## Step 3: Pass the Inventory to the Merging Function (Currying)

Your function to create a full representation of the item in the cart with
information from the inventory likely accesses the inventory outside the 
function scope. 

To make this function a pure one, create a function that takes the
inventory as its only parameter and returns the function that merges the
information from the inventory with the shopping cart data. You will now
have created a curried function, where you "configure" the function with
your inventory. This returns the function to which you then pass each 
element in the array for processing. The scoping of the second function 
allows you to access the `inventory` from within the second function!

## Step 4: More Currying

> ***Check out tag `curry-again`***

The client now wants to have the flexibility to format the order with
the prices grouped in different ways. Another team already has added the
functionality to group the shopping cart items by category in the output,
which is the current state of the implementation (tag: `curry-again`).

Your task now is to allow to group the items in the shopping cart by 
price category: Items costing more than 1000 cents should be listed
in the output object under a key of `expensive` while other items 
should be grouped with a key of `normal`.

> ### Spoiler if you want to get the answer: 
>
> The `receiptsByCategory()`
> function uses the `addToGroup()` function to assign an item to the 
> results object.
> 
> The `addToGroup()` function takes as parameters 
> 1. the `Map` to add to, as well as 
> 2. the key and
> 3. the value
> 
> to add to the results array for that group. It is currently being passed
> the `item.category` for the grouping. The used key assignment can be 
> extracted into another function, which gets passed the `item` and
> returns the grouping key (currently, the `category`, for us our task
> the strings `normal` or `expensive`)
> 
> So the task is to 
> 
> 1. extract the existing key determination into a function
>    returning the `category` and 
> 2. use that result as the key. 
>  
> For that, you
> need to curry the function passed to `reduce()` to accept the grouping
> function as a parameter and then returns the function with the proper
> signature to use for `.reduce()`.
> 
> Once that is done, you can easily write another function with the same
> signature, which groups the items in different ways and pass that as a 
> first parameter (Methods should be of type
> 
> ```
> (item: CartItem) => string
> ```

