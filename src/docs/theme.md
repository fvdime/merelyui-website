# Themes

MerelyUI comes with basic themes so it is natural that you want to improve it based on your taste. Bu before theming you should make sure install <a href="https://tailwindcss.com/">Tailwind CSS</a>. MerelyUI includes a default theme by default.

```bash
<Button>Button</Button>
<Button theme="theme-nova">Button</Button>
<Button theme="theme-calypso">Button</Button>

```
### How to create your own theme?

First, create your theme using the names provided below. You can add a new theme directly in your global CSS file. In the following example, I’ve added a theme called theme-custom with the colors I prefer.
            
```bash
@layer base {
  .theme-custom {
    --color-fill: 102, 102, 204;
    --color-muted: 25, 25, 45;
    --color-inverted: 0, 0, 10;
    --color-text-base: 0, 0, 10;
    --color-text-soft: 100, 150, 200;
    --color-text-muted: 130, 130, 190;
    --color-text-inverted: 240, 245, 255;
    --color-text-destructive: 102, 51, 153;
    --color-button-accent: 34, 85, 102;
    --color-button-accent-hover: 44, 110, 130;
    --color-button-muted: 200, 210, 220;
    --color-button-destructive: 120, 0, 80;
    --color-button-destructive-hover: 140, 10, 100;
    --color-border-base: 180, 200, 230;
    --color-border-muted: 220, 225, 235;
    --color-border-inverted: 102, 51, 153;
    --color-border-danger: 153, 0, 51;
    --color-border-success: 25, 110, 125;
    --color-border-info: 80, 140, 210;
    --color-border-warning: 190, 160, 75;
    --color-outline-base: 160, 190, 220;
    --color-outline-muted: 230, 235, 240;
    --color-outline-inverted: 34, 85, 102;
    --color-ring-base: 160, 190, 220;
    --color-ring-muted: 240, 245, 255;
    --color-ring-inverted: 34, 85, 102;
  }
}
```

Next, create a function for handling opacity in your tailwind.config.js file. For more details on theming Tailwind with CSS variables, check out the link provided!
<a href="https://tailwindcss.com/">Theming Tailwind with CSS Variables</a>

```bash
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}
```

Last but not least, extend the theme in your tailwind.config.js file.

```bash
theme: {
    extend: {
      textColor: {
        base: withOpacity('--color-text-base'),
        soft: withOpacity('--color-text-soft'),
        muted: withOpacity('--color-text-muted'),
        inverted: withOpacity('--color-text-inverted'),
      },
      backgroundColor: {
        fill: withOpacity('--color-fill'),
        muted: withOpacity('--color-muted'),
        inverted: withOpacity('--color-inverted'),
        'button-accent': withOpacity('--color-button-accent'),
        'button-accent-hover': withOpacity('--color-button-accent-hover'),
        'button-inverted': withOpacity('--color-button-inverted'),
        'button-inverted-hover': withOpacity('--color-button-inverted-hover'),
        'button-destructive': withOpacity('--color-button-destructive'),
        'button-destructive-hover': withOpacity('--color-button-destructive-hover'),
      },
      borderColor: {
        base: withOpacity('--color-border-base'),
        muted: withOpacity('--color-border-muted'),
        inverted: withOpacity('--color-border-inverted'),
        info: withOpacity('--color-border-info'),
        success: withOpacity('--color-border-success'),
        danger: withOpacity('--color-border-danger'),
        warning: withOpacity('--color-border-warning'),
      },
      outlineColor: {
        base: withOpacity('--color-outline-base'),
        muted: withOpacity('--color-outline-muted'),
        inverted: withOpacity('--color-outline-inverted'),
      },
      ringColor: {
        base: withOpacity('--color-ring-base'),
        muted: withOpacity('--color-ring-muted'),
        inverted: withOpacity('--color-ring-inverted'),
      },
      gradientColorStops: {
        hue: withOpacity('--color-fill'),
      },
    },
  }
```

### How to use different themes for different components?

Add theme=&apos;theme-name&apos; to any component, and everything inside will automatically use your theme. You can even nest themes with no limitations!

```bash
<Input>This input will use MerelyUI default theme!</Input>
<Button theme="theme-custom">This button will use custom theme!</Button>
```

