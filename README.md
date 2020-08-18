# Product Promotion Badges

Return the Highlight promotions name and displays it on the products shelf

## Installation

Use the vtex toolbelt to install.

```bash
vtex install vtex.product-promotion-badges
```

## Usage

```ts
  "stack-layout": {
    "props": {
      "blockClass": "product"
    },
    "children": [
      "flex-layout.row#product-image",
      "product-bookmark",
      "product-specification-badges",
      "product-promotion-badges"
    ]
  },
```

## Handles

  - 'wraper'
  - 'tag'
  - 'tag--{{promotion name}}'  //special characters and spaces replaced for '-'

## Props

N/A
