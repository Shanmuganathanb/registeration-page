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
    axios.post('https://crudcrud.com/api/09981304a2be4129a1f62951ce23d804/registeruser',post_json);
    NameInput.value ="";
    EmailInput.value="";
    PhoneInput.value="";
    DateInput.value="";
    TimeInput.value="";
})

var gotDetails = {}
async function getData(){
    var data_1 = await axios.get('https://crudcrud.com/api/09981304a2be4129a1f62951ce23d804/registeruser');
    if (data_1.data.length === 0){
        ul.innerHTML =" No registered users"
        return
    }
    var text = document.createTextNode("User Details");
    ul.appendChild(text);
    getBtn.style='display:none;'
    data_1.data.forEach(user => {
        // console.log(user._id);
        var li = document.createElement('li');
        var delBtn = document.createElement('button');
        delBtn.innerText='delete';
        delBtn.setAttribute('id',`${user._id}`);
        delBtn.style = 'color:white;background-color:red;margin-left:10px;'
        li.innerHTML = `Name : ${user.name} , Email : ${user.email} , Phone : ${user.phone} , Date : ${user.date} , Time : ${user.time}`
        li.appendChild(delBtn)
        ul.append(li)
    })
    
}

document.addEventListener('click',(e)=>{
    if (e.target.innerText == 'delete'){
            axios.delete(`https://crudcrud.com/api/09981304a2be4129a1f62951ce23d804/registeruser/${e.target.id}`);
    
    var element = document.getElementById(`${e.target.id}`).parentNode;
    element.parentNode.removeChild(element);
        }
    
});
var userDetails = document.getElementById('Users');
var ul = document.createElement('li');
ul.style = "list-style-type:none"
ul.setAttribute('id','userdetails-ul');
userDetails.appendChild(ul)
var getBtn = document.querySelector('#getusers');
getBtn.addEventListener('click',getData);