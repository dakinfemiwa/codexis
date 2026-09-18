import Parser from "tree-sitter";

import java from "tree-sitter-java";
import JavaScript from "tree-sitter-javascript";
import python from "tree-sitter-python";
import typescript from "tree-sitter-typescript";

type Language = Parameters<Parser["setLanguage"]>[0];

export const languageExtensions: Record<string, Language> = {
  ".js": JavaScript,
  ".jsx": JavaScript,
  ".ts": typescript,
  ".tsx": typescript,
  ".py": python,
  ".java": java,
};
