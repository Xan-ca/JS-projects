package main

import (
	"fmt"

	"github.com/gocolly/colly"
)

func main() {
	isins := []string{"IE00B1XNHC34", "IE00B4L5Y983", "LU1838002480"}
	c := colly.NewCollector(colly.AllowedDomains("www.trackingdifferences.com", "trackingdifferences.com"))
	c.OnHTML("h1.page-title", func(h *colly.HTMLElement) {
		fmt.Println(h.Text)
	})
	c.OnRequest(func(r *colly.Request) {
		fmt.Println(r.URL)
	})
	c.OnError(func(r *colly.Response, e error) {
		fmt.Println(e.Error())
	})
	//fmt.Println(scrapeUrl(isins[0]))
	c.Visit(scrapeUrl(isins[0]))
}

func scrapeUrl(isin string) string {
	return "https://www.trackingdifferences.com/ETF/ISIN/" + isin
}
