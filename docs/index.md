---
hide:
  - navigation
---

# Página Inicial

## Números gerais[^1]

{{ read_csv('robos/sum.csv') }}

**nuvem palavras orgaos por numero robos**

**grafico horas humanas barras X robos linha**

```vegalite
{
  "$schema":"https://vega.github.io/schema/vega-lite/v5.json",
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

## Números treinamentos

{{ read_csv('robos/treinamentos.csv') }}

[^1]: ideias do escopo inicial [aqui](https://github.com/lab-mg/automatizacoes/issues/9#issue-1928943357)


## Disclaimer (página à parte)
