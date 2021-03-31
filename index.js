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