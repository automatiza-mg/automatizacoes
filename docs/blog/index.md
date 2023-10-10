---
title: Blog SUGES-MG
---

# Blog

````vegalite
{
  "data": {"url": "assets/charts/data/seattle-weather.csv"},
  "layer": [{
    "params": [{
      "name": "brush",
      "select": {"type": "interval", "encodings": ["x"]}
    }],
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
      },
      "opacity": {
        "condition": {
          "param": "brush", "value": 1
        },
        "value": 0.7
      }
    }
  }, {
    "transform": [{
      "filter": {"param": "brush"}
    }],
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
````
