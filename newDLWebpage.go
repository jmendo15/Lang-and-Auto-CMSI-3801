package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"sync"
)

func main() {
	if len(os.Args) != 2 {
		fmt.Println("Usage: go run main.go <URL>")
		return
	}

	url := os.Args[1]

	numThreads := 3

	var wg sync.WaitGroup

	ch := make(chan string)

	for i := 0; i < numThreads; i++ {
		wg.Add(1)
		go downloadPage(url, ch, &wg)
	}

	go func() {
		wg.Wait()
		close(ch)
	}()

	for content := range ch {
		fmt.Println(content)
	}
}

func downloadPage(url string, ch chan<- string, wg *sync.WaitGroup) {
	defer wg.Done()

	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	defer resp.Body.Close()

	bodyBytes, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	bodyString := string(bodyBytes)
	ch <- bodyString
	
}
