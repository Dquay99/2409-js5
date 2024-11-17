// let itemlist = document.querySelectorAll("#favorite-list-item")
// for (let i = 0; i < itemlist.length; i++) {
//     itemlist[i].textContent = "I love this thing";
//     itemlist[i].style.color = "red"
// };

// function addItem() {
//     let newItemText = prompt("Nhap gi vao day di");
//     if (newItemText) {
//         let newItem = document.createElement('li');
//         newItem.className = '#favorite-list-item';
//         newItem.textContent = newItemText;
//         document.getElementById('.favorite-list').appendChild(newItem);
//     }
// };
// addItem();





//btvn : 

let nameInput = document.getElementById('name')
let birth = document.getElementById('birth')
let age = document.getElementById('age')
let gender = document.getElementById('gender')
let phone = document.getElementById('phone')
let btn = document.getElementById('btn')

function submit() {
   const namevl = nameInput.value;
   const birthvl = birth.value;
   const agevl = age.value;
   const gendervl = gender.value;
   const phonevl = phone.value

   if(!namevl || !birthvl || !agevl || !gendervl || !phonevl){
      alert('Từ từ đã , nhập đủ thông tin trước đi')
      return;
   };

   
   let info = document.querySelector('.box-content2')
   info.innerHTML = ` <h1>Thông Tin Của BẠn :</h1>
            <p>Họ và Tene :${namevl} </p>
            <p>Năm Sinh :${birthvl}</p>
            <p>Tuổi :${agevl}</p>
            <p>Giới Tính :${gendervl}</p>
            <p>Số Điện THoại :${phonevl}</p>`
};

btn.addEventListener('click' ,submit)

