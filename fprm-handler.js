 // Initialize Firestore
 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
 const db = getFirestore(app); // Initialize Firestore with the app

 // Submit form data to Firestore
 function submitForm(event) {
     event.preventDefault();  // Prevent form from submitting the default way

     // Get form data
     const childFirstName = document.getElementById("childFirstName").value;
     const childSurname = document.getElementById("childSurname").value;
     const dateOfBirth = document.getElementById("dateOfBirth").value;
     const childAge = document.getElementById("childAge").value;
     const placeOfBirth = document.getElementById("placeOfBirth").value;
     const nationality = document.getElementById("nationality").value;
     const religion = document.getElementById("religion").value;
     const fathersName = document.getElementById("fathersName").value;
     const fathersContact = document.getElementById("fathersContact").value;
     const mothersName = document.getElementById("mothersName").value;
     const mothersContact = document.getElementById("mothersContact").value;
     const residentialAddress = document.getElementById("residentialAddress").value;
     const dateOfEntry = document.getElementById("dateOfEntry").value;
     const allergies = document.getElementById("allergies").value;
     const allergyDescription = document.getElementById("allergyDescription").value;
     const vaccination = document.getElementById("vaccination").value;
     const vaccinationDescription = document.getElementById("vaccinationDescription").value;
     const doctorDetails = document.getElementById("doctorDetails").value;
     const doctorContact = document.getElementById("doctorContact").value;
     const underFiveCard = document.getElementById("underFiveCard").files[0] ? document.getElementById("underFiveCard").files[0].name : null;
     const passportPhoto = document.getElementById("passportPhoto").files[0] ? document.getElementById("passportPhoto").files[0].name : null;
     const otherInfo = document.getElementById("otherInfo").value;
     const declarationName = document.getElementById("declarationName").value;
     const signatureData = document.getElementById("signatureData").value;

     // Save data to Firestore
     addDoc(collection(db, "admissions"), {
         firstName: childFirstName,
         surname: childSurname,
         dob: dateOfBirth,
         age: childAge,
         placeOfBirth: placeOfBirth,
         nationality: nationality,
         religion: religion,
         fathersName: fathersName,
         fathersContact: fathersContact,
         mothersName: mothersName,
         mothersContact: mothersContact,
         residentialAddress: residentialAddress,
         dateOfEntry: dateOfEntry,
         allergies: allergies,
         allergyDescription: allergyDescription,
         vaccination: vaccination,
         vaccinationDescription: vaccinationDescription,
         doctorDetails: doctorDetails,
         doctorContact: doctorContact,
         underFiveCard: underFiveCard,
         passportPhoto: passportPhoto,
         otherInfo: otherInfo,
         declarationName: declarationName,
         signatureData: signatureData
     })
     .then(() => {
         alert("Form submitted successfully!");
         // Clear form fields after successful submission
         document.getElementById("admissionForm").reset();
     })
     .catch((error) => {
         console.error("Error adding document: ", error);
         alert("There was an error submitting the form. Please try again.");
     });
 }

 // Attach event listener to the form submit
 document.getElementById("admissionForm").addEventListener("submit", submitForm);