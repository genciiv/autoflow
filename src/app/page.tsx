import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto p-10">
      <Card>
        <h1 className="text-3xl font-bold">
          AutoFlow
        </h1>

        <p className="mt-2 text-slate-600">
          Auto Service Management Platform
        </p>

        <Button className="mt-4">
          Fillo tani
        </Button>
      </Card>
    </main>
  );
}