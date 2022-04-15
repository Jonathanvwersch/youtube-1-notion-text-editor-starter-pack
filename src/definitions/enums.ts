export enum MODAL_TYPE {
  // see https://www.nngroup.com/articles/popups/ for further reference on modal types
  MODAL_LIGHTBOX = "modal-lightbox", // includes lightbox and you can't interact with the background
  MODAL_NON_LIGHTBOX = "modal-non-lightbox", // no lightbox and you can't interact with the background
  NON_MODAL_NON_LIGHTBOX = "non-modal-non-lightbox", // no lightbox and can interact with the background
  NON_MODAL_LIGHTBOX = "non-modal-lightbox", // includes lightbox and you can interact with the background
  TOOL_TIP = "non-modal-non-lightbox",
}

export enum BLOCK_TYPES {
  UNSTYLED = "unstyled",
  HEADER_ONE = "header-one",
  HEADER_TWO = "header-two",
  HEADER_THREE = "header-three",
  BULLETED_LIST = "unordered-list-item",
  NUMBERED_LIST = "ordered-list-item",
  QUOTE = "blockquote",
  DIVIDER = "divider",
  TODO = "to-do",
  CODE = "code-block",
  TOGGLE = "toggle",
  IMAGE = "image",
}

export enum TEXT_STYLES {
  BOLD = "BOLD",
  ITALIC = "ITALIC",
  UNDERLINE = "UNDERLINE",
  STRIKETHROUGH = "STRIKETHROUGH",
  ALIGN_CENTER = "ALIGN_CENTER",
  ALIGN_LEFT = "ALIGN_LEFT",
  ALIGN_RIGHT = "ALIGN_RIGHT",
  SUBSCRIPT = "SUBSCRIPT",
  SUPERSCRIPT = "SUPERSCRIPT",
  REMOVE_FORMATTING = "REMOVE_FORMATTING",
  INVALID = "INVALID",
  CODE = "CODE",
}

export declare enum ROTATE {
  NINETY = "rotate(90deg)",
  ONEEIGHTY = "rotate(180deg)",
  TWOSEVENTY = "rotate(270deg)",
  ZERO = "rotate(0deg)",
}
