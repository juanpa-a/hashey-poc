package hello

import (
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
)

func Hello(e *core.ServeEvent) error {
    e.Router.AddRoute(echo.Route{
        Method: http.MethodGet,
        Path:   "/api/hello",
        Handler: func(c echo.Context) error {
            return c.String(200, "Hello world!")
        },
        Middlewares: []echo.MiddlewareFunc{
            apis.RequireAdminOrUserAuth(),
        },
    })

    return nil
}