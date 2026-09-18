import Parser from "tree-sitter";

type Language = Parameters<Parser["setLanguage"]>[0];

export function parseLang(lang: Language, code: string): Parser.Tree {
  const parser = new Parser();

  parser.setLanguage(lang);

  return parser.parse(code);
}
