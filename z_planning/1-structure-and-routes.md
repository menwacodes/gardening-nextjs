# Structure & Routes

| Path                    | What                                                                    | Type        |
|-------------------------|-------------------------------------------------------------------------|-------------|
| /                       | Permanent redirect to gardening page                                    | Static      |
| /gardening              | Loads gardening landing page with links to food, flowers, soil, etc     | Static      |
| /gardening/food         | Loads all food                                                          | ISG & paths |
| /gardening/food/\<slug> | slug to dynamically identify food, loads individual food with full text | ISG         |

