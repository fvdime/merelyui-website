# Quick Start

Once you installed MerelyUI, you can use components just by importing them.

1. Instead of writing a bunch of css for making a button:
```bash
<button
type="button"
className="w-fit rounded py-2 px-6 hover:text-black hover:bg-white font-medium text-center text-sm text-white border border-white focus:ring focus:ring-blue-500 focus:outline-none scale-100 active:scale-95 transition-all ease-in duration-300 disabled:text-zinc-400 disabled:border-zinc-300 disabled:shadow-none disabled:cursor-not-allowed"
>
    Button
</button>
```

2. You can just use a component like this:
```bash
<Button>Button</Button>
```

3. Then you can modify the component with additional variants:

```bash
<Button rounded large fullWidth>
    Button
</Button>
```
