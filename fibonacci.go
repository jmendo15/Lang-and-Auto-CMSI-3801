package main

import (
	"fmt"
)

func fibonacci() func() int {
	a, b := 0, 1
	return func() int {
		result := b
		a, b = b, a+b
		return result
	}
}

func main () {
	fib := fibonacci()

	fmt.Println(fib())
	fmt.Println(fib())
	fmt.Println(fib())
	fmt.Println(fib())
}

// func main() {
// 	// Read arg from CLI
// 	n, err := strconv.Atoi(os.Args[1])

// 	if err != nil {
// 		fmt.Printlm("requires int arg")
// 		fmt.Printf("got bug: %\n", err)
// 	} else {
// 		// Calculate fibonacci
// 		a, b := 0, 1
// 		for b <= n {
// 			fmt.Println(b)
// 			a, b = b, a+b
// 		}
// 	}
// }
