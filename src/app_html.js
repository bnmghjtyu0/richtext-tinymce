// import tinymce from "tinymce";

// import "tinymce/plugins/link";
// import "tinymce/plugins/lists";

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
    toolbar: "bold italic | link image | myCustomToolbarButton",
    font_formats:
      "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
    // Remove all UI.
    menubar: false,
    statusbar: false,
    theme_advanced_toolbar_location: "bottom",
    // Reset content styles.
    // content_css: false,
    // content_style: CORE_CSS + ( config.content_style || '' ),

    // No need for inputs.
    // hidden_input: false,

    // Add some basic plugins.
    // plugins: ["link", "lists"]

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
  });
};
