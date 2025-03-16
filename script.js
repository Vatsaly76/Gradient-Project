// let btn1 = document.getElementById("mybutton1");
// let btn2 = document.getElementById("mybutton2");
// let copyDiv = document.querySelector("#content");
// let copyIcon = document.querySelector("#icon i");
// let rgb1 = "#2B2B86";
// let rgb2 = "#EA2D3F";

// const hexvalues = () => {
//     let myhexvalues = "0123456789abcdef";
//     let colors = "#";
//     for(let i=0;i<6;i++){
//         colors = colors + myhexvalues[Math.floor(Math.random()*16)];        
//     }
//     return colors;
// };

// const handleButton1 = () => {
//     rgb1 = hexvalues();
//     console.log(rgb1);
//     btn1.innerText = rgb1;
//     btn1.style.backgroundColor = rgb1;
//     document.body.style.backgroundImage =
//      `linear-gradient(to right,${rgb1}, ${rgb2})`;
//     copyDiv.textContent = 
//      `background-image: linear-gradient(to right,${rgb1},${rgb2});`; 
// };

// const handleButton2 = () => {
//     rgb2 = hexvalues();
//     console.log(rgb2);
//     btn2.innerText = rgb2;
//     btn2.style.backgroundColor = rgb2;
//     document.body.style.backgroundImage =
//      `linear-gradient(to right,${rgb1}, ${rgb2})`;
//     copyDiv.textContent = 
//      `background-image: linear-gradient(to right,${rgb1},${rgb2});`; 
// };

// btn1.addEventListener("click", handleButton1);
// btn2.addEventListener("click", handleButton2);

// // copyDiv.addEventListener("click", ()=>{
// //     navigator.clipboard.writeText(copyDiv.innerText);
// // });


// copyDiv.addEventListener("click", () => {
//     navigator.clipboard.writeText(copyDiv.innerText)
//         .then(() => {
//             let originalText = copyDiv.textContent ;
//             copyDiv.textContent = "Copied!";
//             copyIcon.classList.replace("ri-file-copy-line", "ri-check-line"); // Change icon to check


            
//             // Reset back to original text after 1.5 seconds
//             setTimeout(() => {
//                 copyDiv.textContent = originalText;
//                 copyIcon.classList.replace("ri-file-copy-line", "ri-check-line"); // Change icon to check
//             }, 1500);
//         })
//         .catch(err => console.error("Copy failed: ", err));
// });

let btn1 = document.getElementById("mybutton1");
let btn2 = document.getElementById("mybutton2");
let copyDiv = document.querySelector("#content");
let copyIcon = document.querySelector("#icon i"); // Selects the copy icon
let rgb1 = "#2B2B86";
let rgb2 = "#EA2D3F";

const hexvalues = () => {
    let myhexvalues = "0123456789abcdef";
    let colors = "#";
    for(let i=0; i<6; i++){
        colors += myhexvalues[Math.floor(Math.random() * 16)];        
    }
    return colors;
};

const handleButton1 = () => {
    rgb1 = hexvalues();
    btn1.innerText = rgb1;
    btn1.style.backgroundColor = rgb1;
    document.body.style.backgroundImage =
     `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.textContent = 
     `background-image: linear-gradient(to right,${rgb1},${rgb2});`; 
};

const handleButton2 = () => {
    rgb2 = hexvalues();
    btn2.innerText = rgb2;
    btn2.style.backgroundColor = rgb2;
    document.body.style.backgroundImage =
     `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.textContent = 
     `background-image: linear-gradient(to right,${rgb1},${rgb2});`; 
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

// Function to handle copy event (works for both content & icon)
const copyToClipboard = () => {
    navigator.clipboard.writeText(copyDiv.innerText)
        .then(() => {
            let originalText = copyDiv.textContent;
            copyDiv.textContent = "Copied!";
            copyIcon.classList.replace("ri-file-copy-line", "ri-check-line"); // Change icon to check

            // Reset after 1.5 seconds
            setTimeout(() => {
                copyDiv.textContent = originalText;
                copyIcon.classList.replace("ri-check-line", "ri-file-copy-line"); // Revert icon
            }, 1500);
        })
        .catch(err => console.error("Copy failed: ", err));
};

// Attach event listener to both content and icon
copyDiv.addEventListener("click", copyToClipboard);
copyIcon.addEventListener("click", copyToClipboard);
