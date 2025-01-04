// Import Firestore and Storage functions
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-storage.js";

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);

// Submit form data to Firestore and upload files to Storage
async function submitForm(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Collect form data
  const data = {
    childFirstName: document.getElementById("childFirstName").value,
    childSurname: document.getElementById("childSurname").value,
    dateOfBirth: document.getElementById("dateOfBirth").value,
    childAge: document.getElementById("childAge").value,
    placeOfBirth: document.getElementById("placeOfBirth").value,
    nationality: document.getElementById("nationality").value,
    religion: document.getElementById("religion").value,
    fathersName: document.getElementById("fathersName").value,
    fathersContact: document.getElementById("fathersContact").value,
    mothersName: document.getElementById("mothersName").value,
    mothersContact: document.getElementById("mothersContact").value,
    residentialAddress: document.getElementById("residentialAddress").value,
    dateOfEntry: document.getElementById("dateOfEntry").value,
    allergies: document.getElementById("allergies").value,
    allergyDescription: document.getElementById("allergyDescription").value,
    vaccination: document.getElementById("vaccination").value,
    vaccinationDescription: document.getElementById("vaccinationDescription").value,
    doctorDetails: document.getElementById("doctorDetails").value,
    doctorContact: document.getElementById("doctorContact").value,
    otherInfo: document.getElementById("otherInfo").value,
    declarationName: document.getElementById("declarationName").value,
    signatureData: document.getElementById("signatureData").value,
  };

  // Handle file uploads
  try {
    const underFiveCardFile = document.getElementById("underFiveCard").files[0];
    if (underFiveCardFile) {
      const underFiveCardRef = ref(storage, `underFiveCard/${underFiveCardFile.name}`);
      await uploadBytes(underFiveCardRef, underFiveCardFile);
      console.log("Under Five Card uploaded successfully!");
      data.underFiveCardURL = `underFiveCard/${underFiveCardFile.name}`;
    }

    const passportPhotoFile = document.getElementById("passportPhoto").files[0];
    if (passportPhotoFile) {
      const passportPhotoRef = ref(storage, `passportPhoto/${passportPhotoFile.name}`);
      await uploadBytes(passportPhotoRef, passportPhotoFile);
      console.log("Passport Photo uploaded successfully!");
      data.passportPhotoURL = `passportPhoto/${passportPhotoFile.name}`;
    }

    // Save form data to Firestore
    await addDoc(collection(db, "admissions"), data);
    alert("Form submitted successfully!");
    // Clear form fields after successful submission
    document.getElementById("admissionForm").reset();
  } catch (error) {
    console.error("Error submitting form: ", error);
    alert("There was an error submitting the form. Please try again.");
  }
}

// Attach event listener to the form submit
document.getElementById("admissionForm").addEventListener("submit", submitForm);
