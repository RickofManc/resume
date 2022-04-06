function sendMail(contactForm) {
    emailjs.send("service_bptwmne","project_request_template",{
        reply_to: contactForm.emailaddress.value,
        project_request: contactForm.projectsummary.value,
        to_name: contactForm.name.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            });
}
