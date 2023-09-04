function sendInfo() {
  const form = document.getElementById("myform");
  var loadingOverlay = $("#loadingOverlay");
  form.classList.add("was-validated");

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const organization_name = document.getElementById("organization_name").value;

  if (
    name &&
    email &&
    phone &&
    address &&
    organization_name
  ) {
    loadingOverlay.show(); 
    const invalidFields = form.querySelectorAll(":invalid");
    invalidFields.forEach((field) => {
      field.classList.remove("is-invalid");
    });
    form.classList.remove("was-validated");
    console.log("Data sent successfully");
    setTimeout(function () {
      loadingOverlay.hide();
    }, 2000);
    


    const formData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      organization_name: organization_name,
    };

    axios
      .post("https://api-saas.bacbonx.com/api/client-info-save", formData)
      .then((response) => {
        console.log(response);
        document.getElementById("myform").reset();
        window.location.href="./send.html";
      })
      .catch((error) => {
        console.error(error);
      });
  } else {
    console.log("Fill up this form");
    toastr.error("Please fill up this form", "Failed", { timeOut: 1000 });
  }
}
