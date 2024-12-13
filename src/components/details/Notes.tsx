// Importing the Textarea component for handling note input 📝
import { Textarea } from "@/components/ui/textarea"
// Importing Label component to label the input field for accessibility 🏷️
import { Label } from "../ui/label"

// Importing the useNotes store to manage the state of the notes 🗂️
import { useNotes } from "@/stores/useNotes";

export default function Notes() {

  // Destructure setNotes from useNotes to update the notes state 🖊️
  const { setNotes } = useNotes();

  return (
    <div className="bg-white shadow-sm rounded-md border-[1px] border-gray-200 space-y-2 w-full p-2">
      {/* Heading for the notes section 📋 */}
      <h6 className="font-semibold">Installation Notes</h6>

      {/* Label for the Textarea input, providing context for the user 🏷️ */}
      <Label htmlFor="notes">Insert Your Notes</Label>

      {/* Textarea component for user to input notes 📝 */}
      <Textarea 
        onChange={(e) => setNotes(e.target.value)} // Updating the notes state with the input text ✍️
        placeholder="Type your notes here..." 
        id="notes" 
        className="max-h-[112px] min-h-[112px]" 
      />

      {/* Informational text to notify users that their notes will be included in the final PDF 📄 */}
      <p className="text-xs text-muted-foreground">
        All your notes will be copied and included in the final PDF file automatically. 
      </p>
    </div>
  )
}
