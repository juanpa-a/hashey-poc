package main

import (
	// "hashey/hello"
	"fmt"
	"log"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"

	"hashey/events"
)

func main() {
	app := pocketbase.New()

	app.OnModelBeforeCreate().Add(func(e *core.ModelEvent) error {
		if e.Model.TableName() == "transaction" {
			fmt.Println("triggering transaction enqueue...")
			events.EnqueueTx()
		}
		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
