---
title: Blog SUGES-MG
---

# Blog

<div class="content-wrapper">
  <iframe width="1280" height="720" src="https://app.powerbi.com/view?r=eyJrIjoiY2I5MjYzYTgtNjQ0Yi00MDI1LWE1NmEtMGRjOWIyZTk0MjNiIiwidCI6ImU1ZDNhZTdjLTliMzgtNDhkZS1hMDg3LWY2NzM0YTI4NzU3NCJ9" frameborder="0" allowfullscreen></iframe>
</div>


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
