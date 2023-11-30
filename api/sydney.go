package api

import (
	"adams549659584/go-proxy-bingai/api/helper"
	"adams549659584/go-proxy-bingai/common"
	"net/http"
)

var SydneyURL = os.Getenv("SYDNEY_PROXY_DM")

func Sydney(w http.ResponseWriter, r *http.Request) {
	if !helper.CheckAuth(r) {
		helper.UnauthorizedResult(w)
		return
	}
	if SydneyURL == "" {
		SydneyURL = common.BING_SYDNEY_URL.String()
	}
	sydproxyurl, _ := url.Parse(SydneyURL)
	common.NewSingleHostReverseProxy(sydproxyurl).ServeHTTP(w, r)