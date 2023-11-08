const updateClickCount = (function() {
    let clickCount = 0;
  
    return function() {
      clickCount++;
      console.log(`Button clicked ${clickCount} times`);
    }
  })()
  
  
  // Tests

  updateClickCount();   // clicked 1 times
  updateClickCount();   // clicked 2 times
  updateClickCount();   // clicked 3 times
  