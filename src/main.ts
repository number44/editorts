import "./style.scss";
import EditorJS, {
  BlockToolConstructable,
  LogLevels,
} from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
// import { LogLevels } from "@editorjs/editorjs/types";

import YoutubeEmbed from "editorjs-youtube-embed";
new EditorJS({
  tools: {
    header: Header,
    List: List as BlockToolConstructable,
    youtubeEmbed: YoutubeEmbed,
  },
  logLevel: LogLevels.ERROR,
});
