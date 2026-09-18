import Parser, { Language } from "tree-sitter";

export function parseLang(lang: Language, code: string): Parser.Tree {
  const parser: Parser = new Parser();
  parser.setLanguage(lang);
  return parser.parse(code);
}
