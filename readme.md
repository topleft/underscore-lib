##Sort

* compares via unicode
  * unicode
    * assigns number value to each character,
     * international standard (example UTF-8)
* order is roughly: numbers, uppercase, lowercase

###Compares Function
* compares two values and orders them
* repeat for entire array

#### This code sorts numbers
```javascript
// ascending
array.sort(function(a,b){return a-b});
// descending
array.sort(function(a,b){return b-a});

```

* inplace, means returns the same array in different order (destructive)
* doesn't work on strings, only on arrays 

##Reverse

* exactly as it sounds
* inplace, means returns the same array in different order (destructive)
* doesn't work on strings, only on arrays
