
function updatePreview() {
   document.getElementById("name").innerHTML =document.getElementById("input-name").value;
   document.getElementById("email").innerHTML =document.getElementById("input-email").value;
   document.getElementById("phone").innerHTML =document.getElementById("input-phone").value;
   document.getElementById("location").innerHTML =document.getElementById("input-location").value;
   document.getElementById("summary").innerHTML =document.getElementById("input-summary").value;
   document.getElementById("skills").innerHTML =document.getElementById("input-skills").value;
   document.getElementById("degree").innerHTML =document.getElementById("input-degree").value;
   document.getElementById("institution").innerHTML =document.getElementById("input-institution").value;
   document.getElementById("year").innerHTML =document.getElementById("input-year").value;
   document.getElementById("job-title").innerHTML =document.getElementById("input-job-title").value;
   document.getElementById("company").innerHTML =document.getElementById("input-company").value;
   document.getElementById("dates").innerHTML =document.getElementById("input-dates").value;
   document.getElementById("description").innerHTML =document.getElementById("input-description").value;
   document.getElementById("project-name").innerHTML =document.getElementById("input-project-name").value;
   document.getElementById("project-url").innerHTML =document.getElementById("input-project-url").value;
   document.getElementById("project-description").innerHTML =document.getElementById("input-project-description").value;

}

 document.querySelectorAll("input, textarea").forEach(el => {
      el.addEventListener("input", updatePreview);
    });


    document.getElementById("generate-btn").addEventListener("click", () => {
      const resume = document.getElementById("resume-preview");
      const opt = {
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(resume).save();
    });

