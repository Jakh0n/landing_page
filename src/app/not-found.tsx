import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <GraduationCap className="mb-6 size-16 text-indigo-600" />
      <h1 className="mb-2 text-6xl font-extrabold tracking-tight">404</h1>
      <h2 className="mb-4 text-2xl font-semibold">Sahifa topilmadi</h2>
      <p className="mb-8 max-w-md text-muted-foreground">
        Qidirayotgan sahifa yo‘q yoki boshqa manzilga ko‘chirilgan. Bosh sahifadan
        davom eting.
      </p>
      <Button asChild className="gap-2 bg-indigo-600 hover:bg-indigo-700">
        <Link href="/">
          <ArrowLeft className="size-4" />
          Bosh sahifa
        </Link>
      </Button>
    </div>
  );
}
