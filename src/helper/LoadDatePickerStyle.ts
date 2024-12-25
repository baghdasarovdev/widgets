export function loadCss() {
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://cdnjs.cloudflare.com/ajax/libs/react-datepicker/7.5.0/react-datepicker.min.css";
  link.integrity =
    "sha512-mRJDr36tdkaC/Mw4vQlLHb89s0iwGy0vhmZkDhWF6WjkOoD3AAjk1JHr3uR3elMaxxSpNSeRb+0R3/Jdrp0fdA==";
  link.crossOrigin = "anonymous";
  link.referrerPolicy = "no-referrer";

  return link;
}
document.head.appendChild(loadCss());