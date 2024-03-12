import { ChangeEvent, KeyboardEvent, useState, useRef } from "react";
import "./Editor.css";

interface EditorProps {
  onCreate: (content: string) => void;
}

function Editor({ onCreate }: EditorProps) {
  const [content, setContent] = useState<string>("");
  const contentRef = useRef<HTMLInputElement>(null);

  const onChangeContent = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      if (contentRef.current) {
        contentRef.current.focus();
      }
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
