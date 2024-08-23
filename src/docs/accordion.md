# Accordion

Accordion component for showing and hiding content with only one item open at a time. It toggles between collapsed and expanded states using data attribute options.

| Prop  | Type |
| ------------- |:-------------:|
| data      | Array that contains title and content and secondary     |
| title      | String     |
| content      | React Element     |
| secondary      | boolean     |
| theme      | Theme element     |

### Add your data

First, create your data. In the below, I’ve provided an example data.
            
```bash
const data = [
  {
    title: "Accordion Title",
    content: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum amet
        iusto saepe voluptatum molestiae deserunt rerum adipisci illum minima,
        molestias facilis debitis modi voluptates iste! Maiores deleniti
        voluptate voluptas? Incidunt.
      </p>
    ),
  },
  {
    title: "Accordion Title 2",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        eligendi corrupti quo iure repellat? Quod odio aliquid, laborum modi
        tenetur repellendus esse numquam, ullam, quo minima quis dolorem dolore
        reiciendis?
      </p>
    ),
  },
]
```

### Accordion
            
```bash
<Accordion data={data} />
```


And that's it!