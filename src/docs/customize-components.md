# Customize Components

You can customize colors, fonts, sizes, and other styles beyond the default utility classes from MerelyUI and Tailwind CSS. While MerelyUI components offer many design system variants, customization is still an option if needed.

1. Let's say you added this button:
```bash
<Button>Button</Button>
```

2. You can use MerelyUI properties:
```bash
<Button rounded>Button</Button>
<Button small>Button</Button>
<Button disabled>Button</Button>
```

3. Then you can modify the colors by parent tags. Colors and themes are under construction now so please wait for it!

```bash
<div className="border-pink-500 text-pink-100">
    <Button>Button</Button>
</div>
```
