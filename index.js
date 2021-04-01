var Form = document.querySelector('form');
var NameInput = Form.querySelector('#name').nextElementSibling;
var EmailInput = Form.querySelector('#email').nextElementSibling;
var PhoneInput = Form.querySelector('#phone').nextElementSibling;
var DateInput = Form.querySelector('[type="date"]');
var TimeInput = Form.querySelector('[type="time"]');

var post_json = {}

Form.addEventListener('submit',(e)=>{
    e.preventDefault();
    post_json.name = NameInput.value;
    post_json.email = EmailInput.value;
    post_json.phone = PhoneInput.value;
    post_json.date = DateInput.value;
    post_json.time = TimeInput.value;
    axios.post('https://crudcrud.com/api/50ff5a9e88c24fb7bb28ae626e1d26f7/registeruser',post_json);
    NameInput.value ="";
    EmailInput.value="";
    PhoneInput.value="";
    DateInput.value="";
    TimeInput.value="";
})

var gotDetails = {}
async function getData(){
    var data_1 = await axios.get('https://crudcrud.com/api/50ff5a9e88c24fb7bb28ae626e1d26f7/registeruser');
    if (data_1.data.length === 0){
        ul.innerHTML =" No registered users"
        return
    }
    var text = document.createTextNode("User Details");
    ul.appendChild(text);
    getBtn.style='display:none;'
    data_1.data.forEach(user => {
        var li = document.createElement('li');
        li.innerHTML = `Name : ${user.name} , Email : ${user.email} , Phone : ${user.phone} , Date : ${user.date} , Time : ${user.time}`
        
        ul.append(li)
    })
}
var userDetails = document.getElementById('Users');
var ul = document.createElement('li');
ul.style = "list-style-type:none"
ul.setAttribute('id','userdetails-ul');
userDetails.appendChild(ul)
var getBtn = document.querySelector('#getusers');
getBtn.addEventListener('click',getData);