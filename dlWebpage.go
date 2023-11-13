package main

import (
	"fmt"
	"io"
	"os"
	"net/http"
)

func main() {

	url := os.Args[1]

	response, err := http.Get(url)
	if err != nil {
		fmt.Printf(err)
	}
	defer response.body.Close()

	bodyBytes, err := io.ReadAll(response.body)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(string(bodyBytes))
}