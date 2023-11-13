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
		fmt.Println(err)
	}
	defer response.Body.Close()

	bodyBytes, err := io.ReadAll(response.Body)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println(string(bodyBytes))
}