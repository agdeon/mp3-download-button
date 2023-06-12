var styles = `
   .btn_dwnl_mp3 {
      display: inline-block;
      background: rgb(8,69,144);
      color: #fff;
      padding: 0.2% 1%;
      text-decoration: none;
      border-radius: 5%;
      position: relative;
      left: 10px;
   }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

phonsnamDiv = document.body.querySelector(".phons_n_am")
mp3_url = phonsnamDiv.querySelector("div").getAttribute("data-src-mp3")
url_splitted = mp3_url.split("/")
file_name = url_splitted[url_splitted.length-1]

// так не работает звук
// phonsnamDiv.innerHTML = phonsnamDiv.innerHTML + `<a class="btn_dwnl_mp3" href="${mp3_url}" download="${file_name}">Download mp3</a>`

dwnl_button = document.createElement("a")
dwnl_button.innerText = "Download mp3"
dwnl_button.classList.add("btn_dwnl_mp3")
dwnl_button.setAttribute("href", mp3_url)
dwnl_button.setAttribute("download", file_name)
phonsnamDiv.appendChild(dwnl_button)
