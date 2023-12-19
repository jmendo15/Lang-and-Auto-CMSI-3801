package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {

	apiURL := "http://universities.hipolabs.com/search?name=Loyola+Marymount+University"

	// GET request to the API
	resp, err := http.Get(apiURL)
	if err != nil {
		fmt.Println("Error making request:", err)
		return
	}
	defer resp.Body.Close()

	var data []struct {
		State     string   `json:"state-province"`
		Country   string   `json:"country"`
		Domains   []string `json:"domains"`
		WebPages  []string `json:"web_pages"`
		AlphaCode string   `json:"alpha_two_code"`
		Name      string   `json:"name"`
	}

	err = json.NewDecoder(resp.Body).Decode(&data)
	if err != nil {
		fmt.Println("Error decoding JSON:", err)
		return
	}

	fmt.Printf("%+v\n", data)
}
