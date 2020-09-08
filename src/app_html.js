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
    hasRedo: false,
    hasUndo: false,
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

var btnContent = document.querySelector("#btnContent");

function myScript() {
  const content = tinymce.activeEditor.getContent();
  // tinymce.activeEditor.setContent("<p>Hello world!</p>");

  tinymce.execCommand("mceInsertContent", false, "<p>Hello world!</p>");
  tinymce.activeEditor.execCommand("mceEditImage");
  tinymce.execCommand(
    "mceInsertContent",
    false,
    '<img alt="Smiley face" height="42" width="42" src="https://images.unsplash.com/photo-1599495751117-4733b8869543?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"/>'
  );
  console.log(content);
}
btnContent.addEventListener("click", myScript);

function myCustomExecCommandHandler(
  editor_id,
  elm,
  command,
  user_interface,
  value
) {
  var linkElm, imageElm, inst;

  switch (command) {
    case "mceLink":
      inst = tinyMCE.getInstanceById(editor_id);
      linkElm = tinyMCE.getParentElement(inst.selection.getFocusElement(), "a");

      if (linkElm)
        alert(
          "Link dialog has been overriden. Found link href: " +
            tinyMCE.getAttrib(linkElm, "href")
        );
      else alert("Link dialog has been overriden.");

      return true;

    case "mceImage":
      inst = tinyMCE.getInstanceById(editor_id);
      imageElm = tinyMCE.getParentElement(
        inst.selection.getFocusElement(),
        "img"
      );

      if (imageElm)
        alert(
          "Image dialog has been overriden. Found image src: " +
            tinyMCE.getAttrib(imageElm, "src")
        );
      else alert("Image dialog has been overriden.");

      return true;
  }

  return false; // Pass to next handler in chain
}

window.init = (config) => {
  tinymce.init({
    execcommand_callback: "myCustomExecCommandHandler",
    selector: "#editor",
    icons_url: "https://www.example.com/icons/material/icons.js",
    icons: "material",
    toolbar: [
      "bold italic strikethrough underline myCustomToolbarButton bullist numlist media",
    ],
    toolbar_location: "bottom",
    plugins: ["mentions", "autolink", "advlist lists", "imagetools", "media"],
    font_formats:
      "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
    // Remove all UI.
    advlist_bullet_styles: "square",
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
};
