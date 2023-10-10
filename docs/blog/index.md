---
title: Blog SUGES-MG
---

# Blog

````vegalite
{
  "data": {"url": "assets/charts/data/seattle-weather.csv"},
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "month",
      "field": "date",
      "type": "ordinal"
    },
    "y": {
      "aggregate": "mean",
      "field": "precipitation"
    }
  }
}
````
