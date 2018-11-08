package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type FibNumber struct {
	FibNum int `json:"fibNum,omitempty"`
}

var fibInput []FibNumber

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func CreateFibNum(w http.ResponseWriter, r *http.Request) {
	var fibNumb FibNumber
	_ = json.NewDecoder(r.Body).Decode(&fibNumb)
	fibInput = append(fibInput, fibNumb)
	json.NewEncoder(w).Encode(fibInput)
}

func main() {
	router := mux.NewRouter()
	// fibInput = append(fibInput, FibNumber{FibNum: "5"})
	router.HandleFunc("/fibonacci", CreateFibNum).Methods("POST", "OPTIONS")

	// log.Fatal(http.ListenAndServe(":8081", router))
	log.Fatal(http.ListenAndServe(":8081", handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}), handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS"}), handlers.AllowedOrigins([]string{"*"}))(router)))
}
