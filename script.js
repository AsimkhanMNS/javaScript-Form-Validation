var formEl = document.forms.myForm
var nameEl = formEl.elements.name
var emailEl = formEl.elements.email
var numberEl = formEl.elements.number
var messageEl = formEl.elements.message
var buttonEl = document.getElementById('btn')



var textEl1 = document.createElement('p')
var textEl2 = document.createElement('p')
var textEl3 = document.createElement('p')
var textEl4 = document.createElement('p')





buttonEl.addEventListener("click", () => {

    var userValidation = {
        name: nameEl.value,
        email: emailEl.value,
        number: numberEl.value,
        message: messageEl.value,


    };
    if (userValidation.name == "" || userValidation.email == "" || userValidation.number == "" || userValidation.message == "") {
        document.getElementById('icon1').innerHTML = "<i class='fa fa-times-circle' style='font-size:20px;padding:5px;color:red;'></i>"
        textEl1.style.cssText = 'font-size:15px;color:red;padding:5px;'
        textEl1.textContent = 'please enter your name Ex:Alex!';
        nameEl.value = ""
        document.getElementById('alert1').append(textEl1)

        document.getElementById('icon2').innerHTML = "<i class='fa fa-times-circle' style='font-size:20px;padding:5px;color:red;'></i>"
        textEl2.style.cssText = 'font-size:15px;color:red;padding:5px;'
        textEl2.textContent = 'please enter your Email Ex:Alex12@gmail.com!';
        emailEl.value = ""
        document.getElementById('alert2').append(textEl2)

        document.getElementById('icon3').innerHTML = "<i class='fa fa-times-circle' style='font-size:20px;padding:5px;color:red;'></i>"
        textEl3.style.cssText = 'font-size:15px;color:red;padding:5px;'
        textEl3.textContent = 'please enter your Number Ex:+91-123467890!';
        numberEl.value = ""
        document.getElementById('alert3').append(textEl3)

        document.getElementById('icon4').innerHTML = "<i class='fa fa-times-circle' style='font-size:20px;padding:5px;color:red;'></i>"
        textEl4.style.cssText = 'font-size:15px;color:red;padding:5px;'
        textEl4.textContent = 'please enter your Ex:Hi Alex how are you!';
        messageEl.value = ""
        document.getElementById('alert4').append(textEl4)
    } else {
        document.getElementById('popup').innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Thank you for Applying ${nameEl.value}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style='text-align:center;'>
            <i class='fa fa-check-circle' style='font-size:75px;padding:5px;color:green;'></i>
            </div>
          </div>
        </div>
      </div>`
    }

})




nameEl.addEventListener('blur', () => {
    if (nameEl.value != "") {
        document.getElementById('icon1').innerHTML = "<i class='fa fa-check-circle' style='font-size:20px;padding:5px;color:green;'></i>"
        textEl1.style.cssText = 'font-size:15px;color:green;padding:5px;'
        textEl1.textContent = `${nameEl.value} is valid name!`;
        document.getElementById('alert1').append(textEl1)
    }
})

emailEl.addEventListener('blur', () => {
    if (emailEl.value != "") {
        document.getElementById('icon2').innerHTML = "<i class='fa fa-check-circle' style='font-size:20px;padding:5px;color:green;'></i>"
        textEl2.style.cssText = 'font-size:15px;color:green;padding:5px;'
        textEl2.textContent = `@${emailEl.value} is valid Email!`;
        document.getElementById('alert2').append(textEl2)
    }
})

numberEl.addEventListener('blur', () => {
    if (numberEl.value != "") {
        document.getElementById('icon3').innerHTML = "<i class='fa fa-check-circle' style='font-size:20px;padding:5px;color:green;'></i>"
        textEl3.style.cssText = 'font-size:15px;color:green;padding:5px;'
        textEl3.textContent = `+91-${numberEl.value} is valid Number!`;
        document.getElementById('alert3').append(textEl3)
    }
})

messageEl.addEventListener('blur', () => {
    if (messageEl.value != "") {
        document.getElementById('icon4').innerHTML = "<i class='fa fa-check-circle' style='font-size:20px;padding:5px;color:green;'></i>"
        textEl4.style.cssText = 'font-size:15px;color:green;padding:5px;'
        textEl4.textContent = `${messageEl.value} is valid Message!`;
        document.getElementById('alert4').append(textEl4)
    }
})