package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	// Read arg from CLI
	n, err := strconv.Atoi(os.Args[1])

	if err != nil {
		fmt.Println("requires int arg")
		fmt.Printf("got bug: %s\n", err)
	} else {
		// TODO: change to perfect square
		// Calculate Fibonacci
		// a, b := 0, 1
		// for b <= n {
		// 	fmt.Println(b)
		// 	a, b = b, a + b

		// Calculate and print perfect squares up to the given integer
		fmt.Printf("Here are the perfect squares up to %d:\n", num)
		for i := 1; i*i <= num; i++ {
			fmt.Printf("%d ", i*i)
		}
		fmt.Println()
	}
}