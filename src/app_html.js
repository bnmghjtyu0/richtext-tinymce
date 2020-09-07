// import tinymce from "tinymce";

// import "tinymce/plugins/link";
// import "tinymce/plugins/lists";
require("tinymce-mention");

let status = {
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  paraType: "p",
  undo: {
    hasUndo: false,
    hasRedo: false,
  },
  link: {
    href: null,
    target: null,
  },
};
const sendStatus = () => {
  if (window.ReactNativeWebView) {
    window.ReactNativeWebView.postMessage(
      JSON.stringify({
        type: "updateStatus",
        payload: status,
      })
    );
  }
};

const CORE_CSS = `
      .mce-content-body.empty {
          position: relative;
      }
      .mce-content-body.empty::before {
          opacity: 0.35;
          display: block;
          position: absolute;
          content: attr( data-placeholder );
      }
  `;

window.init = (config) => {
  tinymce.init({
    selector: "#editor",
    // toolbar: "bold italic | link image | myCustomToolbarButton",
    toolbar: "bold italic myCustomToolbarButton",
    toolbar_location: "bottom",
    plugins: ["mentions", "autolink","link"],
    font_formats:
      "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
    // Remove all UI.
    menubar: false,
    statusbar: false,
    mentions: {
      source: [
        { name: "Tyra Porcelli" },
        { name: "Brigid Reddish" },
        { name: "Ashely Buckler" },
        { name: "Teddy Whelan" },
      ],
      delimiter: ["@", "#"],
    },

    // Reset content styles.
    // content_css: false,
    // content_style: CORE_CSS + ( config.content_style || '' ),

    // No need for inputs.
    // hidden_input: false,

    // 選擇文字後，會跳出 popup
    // setup: function (editor) {
    //   editor.ui.registry.addContextToolbar("imagealignment", {
    //     predicate: function (node) {
    //       return node.nodeName.toLowerCase() === "img";
    //     },
    //     items: "alignleft aligncenter alignright",
    //     position: "node",
    //     scope: "node",
    //   });

    //   editor.ui.registry.addContextToolbar("textselection", {
    //     predicate: function (node) {
    //       return !editor.selection.isCollapsed();
    //     },
    //     items: "bold italic | blockquote",
    //     position: "selection",
    //     scope: "node",
    //   });
    // },

    // 加入自定義按鈕
    setup: function (editor) {
      editor.ui.registry.addButton("myCustomToolbarButton", {
        text: "My Custom Button",
        onAction: function () {
          alert("Button clicked!");
        },
      });
    },

    content_style:
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",

    //   autolink
    // link_default_protocol: "https",
    // default_link_target: "_blank",
  });
  tinymce.activeEditor.execCommand("mceAnchor");
};
