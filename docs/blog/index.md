---
title: Blog SUGES-MG
---

# Blog

````vegalite
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "assets/charts/data/seattle-weather.csv"},
  "mark": "tick",
  "encoding": {
    "x": {"field": "precipitation", "type": "quantitative"}
  }
}
````
