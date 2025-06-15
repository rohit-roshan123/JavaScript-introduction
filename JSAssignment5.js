// YOUR TASK: Complete this counter
        // Use the right variable declarations (let, const, var)
        
        let count = 0;                    // Will this change?
        const MAX_COUNT = 10;               // Will this change?
        const MIN_COUNT = 0;                // Will this change?
        
        function increment() {
            // YOUR TASK: Increase count by 1
            // Don't go above MAX_COUNT
            if (count < MAX_COUNT) {
        count = count + 1;
    }
            document.getElementById('count').textContent = count;
        }
        
        function decrement() {
            // YOUR TASK: Decrease count by 1
            // Don't go below MIN_COUNT
            if (count > MIN_COUNT) {
        count = count - 1;
    }
            
            document.getElementById('count').textContent = count;
        }
        
        function reset() {
            // YOUR TASK: Set count back to 0

            count=0;
            
            document.getElementById('count').textContent = count;
        }