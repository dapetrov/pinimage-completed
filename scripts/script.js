const FindOnPage = () => {
    const input = document.getElementById("text_to_find");
    const li_one = document.getElementById("li_one");
    const li_two = document.getElementById("li_two");
    const li_three = document.getElementById("li_three");
    const li_four = document.getElementById("li_four");
    const li_five = document.getElementById("li_five");
    li_five.textContent = li_four.textContent;
    li_four.textContent = li_three.textContent;
    li_three.textContent = li_two.textContent;
    li_two.textContent = li_one.textContent;
    li_one.textContent = input.value;


    const newSearch = document.getElementById("text_to_find");
    fetch("https://my-json-server.typicode.com/typicode/demo/posts"+newSearch.value, {
    // fetch("https://my-json-server.typicode.com/typicode/demo/"+newSearch.value, {
            // method: "POST",
            // body: JSON.stringify(newSearch),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log (data)
             document.getElementById("autor").textContent='Автор: '+data[0].artist
             document.getElementById("type").textContent='Жанр: '+data[0].tags
             document.getElementById("name").textContent='Название: '+data[0].name
             document.getElementById("autor2").textContent='Автор: '+data[1].artist
             document.getElementById("type2").textContent='Жанр: '+data[1].tags
             document.getElementById("name2").textContent='Название: '+data[1].name
             document.getElementById("autor3").textContent='Автор: '+data[2].artist
             document.getElementById("type3").textContent='Жанр: '+data[2].tags
             document.getElementById("name3").textContent='Название: '+data[2].name
             document.getElementById("autor4").textContent='Автор: '+data[3].artist
             document.getElementById("type4").textContent='Жанр: '+data[3].tags
             document.getElementById("name4").textContent='Название: '+data[3].name

            // for (key in data) {
            //     if (data[key]) {
            //         let imgsrc = document.getElementById("photo" + key);
            //         imgsrc.src = data[key];
            //         document.getElementById("photo" + key).style.display = "";
            //     }
            // }

         /*   if (data.img1) {
                let imgsrc = document.getElementById("photo1");
                imgsrc.src = data.img1;
                document.getElementById("photo1").style.display = "";
            }
            if (data.img2) {
                let imgsrc = document.getElementById("photo2");
                imgsrc.src = data.img2;
                document.getElementById("photo2").style.display = "";
            }
            if (data.img3) {
                let imgsrc = document.getElementById("photo3");
                imgsrc.src = data.img3;
                document.getElementById("photo3").style.display = "";
            }*/
        })
}

//      document.addEventListener("DOMContentLoaded", () => {
//      document.getElementById("photo1").style.display = "none";
//      document.getElementById("photo2").style.display = "none";
//      document.getElementById("photo3").style.display = "none";
//      document.getElementById("photoname").style.display = "none";
//  });