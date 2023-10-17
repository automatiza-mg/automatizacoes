---
title: Blog SUGES-MG
---

# Blog

```vegalite
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Bar graph sample",
  "width": 800,
  "height": 425,
  "data": {"url": "assets/charts/data/seattle-weather.csv"},
  "layer": [{
    "mark": "bar",
    "encoding": {
      "x": {
        "timeUnit": "month",
        "field": "date",
        "type": "ordinal"
      },
      "y": {
        "aggregate": "mean",
        "field": "precipitation",
        "type": "quantitative"
      }
    }
  }, {
    "mark": "rule",
    "encoding": {
      "y": {
        "aggregate": "mean",
        "field": "precipitation",
        "type": "quantitative"
      },
      "color": {"value": "firebrick"},
      "size": {"value": 3}
    }
  }]
}
```
