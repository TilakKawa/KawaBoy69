const hourlyRateFormGroup = document.querySelector(".hourlyRate");
const form = document.querySelector("#form");
const eduImage = document.querySelector(".edu-image");
const eduTitle = document.querySelector(".edu-title");
const eduName = document.querySelector(".edu-name");
const eduDesc = document.querySelector(".edu-desc");
const years = document.querySelectorAll(".circle-div");


/*
Learned from brother how to create a function like this..!
*/
const handleSubmit = (event) => {
    event.preventDefault();
    const reqData = {};
    for (let i = 0; i < form?.elements.length - 1; i++) {
      if(form.elements[i].name.includes("person")) {
        reqData[form.elements[i].name] = form.elements[i].value;
      }
    }
    reqData["personInquiryType"] = document.querySelector('input[name="inquiryType"]:checked').value;
    if(reqData.personInquiryType === "Hiring") {
        reqData["personHourlyRate"] = document.querySelector('input[name="hourlyRate"]').value;
    }

    const url = 'https://httpbin.org/post';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reqData)  
    }).then(res => {
        if(res.status === 200) {
            swal("Success!", "Your message has been sent", "success");
        }else {
            swal("Error!", "Something went wrong, please try again", "error");
        }
    });
};

const handleInquiryTypeChange = (inquiryType) => {
    if(inquiryType === "Hiring") {
        hourlyRateFormGroup.style.display = "block";
    } else {
        hourlyRateFormGroup.style.display = "none";
    }
}
