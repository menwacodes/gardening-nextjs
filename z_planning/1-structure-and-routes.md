# Structure & Routes

| Path                     | What                                                                    | Type        |
|--------------------------|-------------------------------------------------------------------------|-------------|
| /                        | Permanent redirect to gardening page                                    | Static      |
| /gardening               | Loads gardening landing page with links to herbs, flowers, soil, etc    | Static      |
| /gardening/herbs         | Loads all herbs                                                         | ISG & paths |
| /gardening/herbs/\<slug> | slug to dynamically identify herb, loads individual herb with full text | ISG         |

