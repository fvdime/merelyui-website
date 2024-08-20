import Navigation from "@/components/doc/navigation";
import { Card } from "merelyui";

export default function ComponentPage() {
  return (
    <main>
     <h1 className="text-4xl font-semibold">MerelyUI Components</h1>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- text-white border-transparent">
        Coming soon...
        {/* <Card title="dfsfsd" subtitle="sdf;lf" description=";dfkslfkdsl" src="https://images.unsplash.com/photo-1520367691844-3df6787b3b6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1dHRvbnxlbnwwfHwwfHx8MA%3D%3D" href="" secondary/>
        <Card title="dfsfsd" src="https://images.unsplash.com/photo-1520367691844-3df6787b3b6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1dHRvbnxlbnwwfHwwfHx8MA%3D%3D" href="" secondary/> */}
      </div>
      <Navigation prevLink="Customize Components" prevHref="/components/customize" nextLink="Accordion" nextHref="/components/accordion"/>
    </main>
  );
}
