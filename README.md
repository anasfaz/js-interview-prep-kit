# JavaScript Interview Preparation Template

## Introduction
This template is designed to help you organize your JavaScript interview preparation. It includes a curated list of topics commonly asked in technical interviews, categorized by difficulty level.

## Table of Contents
- [Easy](#easy)
- [Medium](#medium)
- [Hard](#hard)

---

## Easy
1. [Implement Debounce](#implement-debounce)
2. [Implement Currying](#implement-currying)
3. [Deep Flatten III](#deep-flatten-iii)
4. [Implement a Pipe Method](#implement-a-pipe-method)
5. [Implement Promise.race](#implement-promise-race)
6. [Implement Custom clearAllTimers](#implement-custom-clearalltimers)
7. [Promisify the Async Callbacks](#promisify-the-async-callbacks)
8. [Implement 'N' async tasks in Race](#implement-n-async-tasks-in-race)
9. [Implement Custom Object.is() method](#implement-custom-objectis-method)

---

## Medium
1. [Implement Throttle](#implement-throttle)
2. [Deep Flatten I](#deep-flatten-i)
3. [Deep Flatten II](#deep-flatten-ii)
4. [Implement Currying with Placeholders](#implement-currying-with-placeholders)
5. [Implement Promise.all](#implement-promise-all)
6. [Implement Promise.allSettled](#implement-promise-allsettled)
7. [Implement Promise.finally](#implement-promise-finally)
8. [Throttling Promises by Batching](#throttling-promises-by-batching)
9. [Implement Custom Object.assign](#implement-custom-objectassign)
10. [Implement Custom lodash _.get()](#implement-custom-lodash-get)
11. [Implement Custom lodash _.set()](#implement-custom-lodash-set)
12. [Implement Custom lodash _.omit()](#implement-custom-lodash-omit)
13. [Implement Custom String Tokenizer](#implement-custom-string-tokenizer)
14. [Implement Custom setTimeout](#implement-custom-settimeout)
15. [Implement Custom setInterval](#implement-custom-setinterval)
16. [Implement Custom Event Emitter](#implement-custom-event-emitter)
17. [Implement Custom Browser History](#implement-custom-browser-history)
18. [Implement Custom lodash _.chunk()](#implement-custom-lodash-chunk)
19. [Implement Custom Deep Clone](#implement-custom-deep-clone)
20. [Implement 'N' async tasks in Parallel](#implement-n-async-tasks-in-parallel)
21. [Implement Custom lodash _.partial()](#implement-custom-lodash-partial)
22. [Implement Custom lodash _.once()](#implement-custom-lodash-once)
23. [Implement Custom trim() operation](#implement-custom-trim-operation)
24. [Implement Custom reduce() method](#implement-custom-reduce-method)
25. [Implement Custom lodash _.memoize()](#implement-custom-lodash-memoize)
26. [Implement Custom memoizeLast() method](#implement-custom-memoizelast-method)
27. [Implement Custom call() method](#implement-custom-call-method)
28. [Implement Custom apply() method](#implement-custom-apply-method)
29. [Implement Custom bind() method](#implement-custom-bind-method)
30. [Implement Custom React "classnames" library](#implement-custom-react-classnames-library)
31. [Implement Custom Redux used "Immer" library](#implement-custom-redux-used-immer-library)
32. [Implement Custom Virtual DOM - II (Deserialize)](#implement-custom-virtual-dom---ii-deserialize)

---

## Hard
1. [Deep Flatten IV](#deep-flatten-iv)
2. [Negative Indexing in Arrays (Proxies)](#negative-indexing-in-arrays-proxies)
3. [Implement Auto-retry Promises](#implement-auto-retry-promises)
4. [Implement Custom Javascript Promises](#implement-custom-javascript-promises)
5. [Implement Custom Deep Equal](#implement-custom-deep-equal)
6. [Implement Custom JSON.stringify](#implement-custom-jsonstringify)
7. [Implement Custom JSON.parse](#implement-custom-jsonparse)
8. [Implement Custom typeof operator](#implement-custom-typeof-operator)
9. [Implement 'N' async tasks in Series](#implement-n-async-tasks-in-series)
10. [Implement Memoize/Cache identical API calls](#implement-memoizecache-identical-api-calls)
11. [Implement Custom Virtual DOM - I (Serialize)](#implement-custom-virtual-dom---i-serialize)

---

## Implementations

### Implement Debounce
#### Description
Debouncing is a technique used to limit the rate at which a function is invoked. It ensures that a function is not called more often than a specified time interval.

#### Example
```javascript
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

const debouncedFunction = debounce(() => {
  console.log('Debounced function called.');
}, 1000);

// Usage
debouncedFunction();
