'use client'
import SetUpDialog from "@/components/SetUpDialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export default function Home() {

  return (
    <main className="flex justify-center items-center w-full h-[100vh]">
      <Dialog>
        <DialogTrigger className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
          setup account 
        </DialogTrigger>
        <DialogContent className="">
          <SetUpDialog />
        </DialogContent>
      </Dialog>
    </main>
  );
}
