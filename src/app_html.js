// // Import TinyMCE
// import tinymce from "tinymce/tinymce";

// // Default icons are required for TinyMCE 5.3 or above
// import "tinymce/icons/default";

// // A theme is also required
// import "tinymce/themes/silver";

// // Any plugins you want to use has to be imported
// import "tinymce/plugins/paste";
// import "tinymce/plugins/link";
// import "tinymce/plugins/autolink";
// import "tinymce/plugins/advlist";
// import "tinymce/plugins/lists";
// import "tinymce/plugins/media";
// import "tinymce/plugins/imagetools";
// require("tinymce-mention");

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

var mentions_menu_complete = function (editor, userInfo) {
  var span = editor.getDoc().createElement("span");
  span.className = "mymention";
  span.setAttribute("data-mention-id", userInfo.id);
  span.appendChild(editor.getDoc().createTextNode("@" + userInfo.name));
  return span;
};

window.init = (config) => {
  tinymce.init({
    execcommand_callback: "myCustomExecCommandHandler",
    selector: "#editor",
    // icons_url: "https://code.iconify.design/1/1.0.4/iconify.min.js",
    // icons: "material",
    toolbar: [
      "customToggleButton cBold italic strikethrough underline myCustomToolbarButton bullist numlist media insertContent",
    ],
    toolbar_location: "bottom",
    plugins: ["autolink", "advlist lists", "imagetools", "media", "save"],
    font_formats:
      "Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n",
    // Remove all UI.
    advlist_bullet_styles: "square",
    menubar: false,
    statusbar: false,
    skin: "bootstrap",
    mentions: {
      source: [
        { name: "Tyra Porcelli" },
        { name: "Brigid Reddish" },
        { name: "Ashely Buckler" },
        { name: "Teddy Whelan" },
        { name: "123" },
      ],
      delimiter: ["@", "#"],
    },
    content_css: "main.css",
    content_style:
      ".mymention{ color: gray; }" +
      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
    // mentions_selector: ".mymention",
    // mentions_menu_complete: mentions_menu_complete,
    // mentions_fetch: mentions_fetch,
    // mentions_menu_hover: mentions_menu_hover,
    // mentions_select: mentions_select,
    // Reset content styles.
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

    formats: {
      "red-text": { inline: "span", classes: "red" },
    },

    setup: function (editor) {
      // icons
      editor.ui.registry.addIcon(
        "calendar",
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"/></svg>'
      );
      // 載入編輯器
      editor.on("init", function (e) {
        console.log("The Editor has initialized.");
      });
      // 監聽輸入
      editor.on("change", function (e) {
        console.log(tinymce.activeEditor.getContent());
      });
      editor.on("keyup", function (e) {
        console.log(tinymce.activeEditor.getContent());
      });
      editor.on("init keydown change click blur", function (e) {
        document.getElementById("data").innerText = editor.getContent();
      });

      // 加入自定義按鈕
      editor.ui.registry.addButton("insertContent", {
        text: "fancyText",
        onAction: function (_) {
          editor.insertContent(" Jimi Hendrix for president ");
        },
      });
      editor.ui.registry.addButton("cBold", {
        icon: "bold",
        onAction: function (_) {
          tinymce.activeEditor.execCommand("Bold");
        },
      });
      editor.ui.registry.addToggleButton("customToggleButton", {
        icon: "calendar",
        onAction: function (_) {
          editor.execCommand("mceToggleFormat", false, "red-text");
        },
        onSetup: function (buttonApi) {
          editor.formatter.formatChanged("red-text", function (state) {
            buttonApi.setActive(state);
          });
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
