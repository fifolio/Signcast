// UI
import { Textarea } from "@/components/ui/textarea"
import { Label } from "../ui/label"

// STORES
import { useNotes } from "@/stores/useNotes";

export default function Notes() {

  // Update the Notes store
  const { setNotes } = useNotes();

  return (
    <div className="bg-white shadow-sm rounded-md border-[1px] border-gray-200 space-y-2 w-full p-2">
      <h6 className="font-semibold">Installation Notes</h6>
      <Label htmlFor="notes">Insert Your Notes</Label>
      <Textarea onChange={(e) => setNotes(e.target.value)} placeholder="Type your notes here..." id="notes" className="max-h-[112px] min-h-[112px]" />
      <p className="text-xs text-muted-foreground">
        All your notes will be copied and included in the final PDF file automatically.
      </p>
    </div>
  )
}
