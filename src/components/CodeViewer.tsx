import { CodeBlock, createShikiAdapter } from "@chakra-ui/react";
import type { HighlighterGeneric } from "shiki";

type IFile = {
  code: string;
  language: string;
  title: string;
};

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
  async load() {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      langs: ["tsx", "scss", "html", "bash", "json", "ts", "scala"],
      themes: ["github-dark", "github-light"],
    });
  },
});

type Props = {
  file: IFile;
};

export const CodeViewer = ({ file }: Props) => {
  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <CodeBlock.Root code={file.code} language={file.language}>
        <CodeBlock.Content>
          <CodeBlock.Code>
            <CodeBlock.CodeText />
          </CodeBlock.Code>
        </CodeBlock.Content>
      </CodeBlock.Root>
    </CodeBlock.AdapterProvider>
  );
};
