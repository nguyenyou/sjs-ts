import { ColorModeButton } from "@/components/ui/color-mode"
import { CodeViewer } from "./components/CodeViewer"

function App() {
  return (
      <div className="grid grid-cols-3 gap-2 divide-x divide-gray-300 h-full">
      <div className="p-4">
        <ColorModeButton />
      </div>
      <div className="p-4">
        <CodeViewer file={{
  code: `
export type ClassValue = ClassArray | ClassDictionary | string | number | bigint | null | boolean | undefined;
export type ClassDictionary = Record<string, any>;
export type ClassArray = ClassValue[];

export function clsx(...inputs: ClassValue[]): string;
export default clsx;

`,
  language: "ts",
  title: "clsx.d.mts",
}} />
      </div>
      <div className="p-4">
        <CodeViewer file={{
          code: `
         package clsx

import scala.scalajs.js
import scala.scalajs.js.annotation.JSImport

object mod {
  @js.native
  @JSImport("clsx", "clsx")
  def clsx(inputs: ClassValue*): String = js.native

  type ClassArray = js.Array[ClassValue]
  type ClassDictionary = js.Dictionary[js.Any]
  type ClassValue = js.UndefOr[Any | ClassDictionary |String | Double | js.BigInt | Null | Boolean]
}
          `,
          language: "scala",
          title: "clsx.scala",
        }} />
      </div>
    </div>
  )
}

export default App
