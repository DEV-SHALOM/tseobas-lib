import "./style.css";

import { db } from "./firebase.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  const passMessage = document.getElementById("pass-message");

  try {
    const userRef = doc(db, "login", inputUsername);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();

      if (userData.password === inputPassword) {
        // ✅ Log successful login to Firestore
        await addDoc(collection(db, "loginLogs"), {
          username: inputUsername,
          status: "success",
          timestamp: serverTimestamp(),
        });

        

        passMessage.classList.remove("text-red-500");
        passMessage.classList.remove("hidden");
        passMessage.classList.add("text-green-600");
        passMessage.classList.add("block");
        passMessage.textContent = "Login Successful... Happy Learning " + "🎉";
        setTimeout(() => {
          window.location.href = "./ourdatabase.com.ng/tut/databases.html";
        }, 3000);
      } else if (userData.password !== inputPassword) {
        passMessage.classList.remove("hidden");
        passMessage.classList.add("block");
        passMessage.textContent = "Incorrect Username or Password!!";
      } else {
        passMessage.classList.remove("hidden");
        passMessage.classList.add("block");
        passMessage.textContent = "Incorrect Username";
      }
    } else {
      passMessage.classList.remove("hidden");
      passMessage.classList.add("block");
      passMessage.textContent = "Incorrect Username";
    }
  } catch (err) {
    passMessage.classList.remove("hidden");
    passMessage.classList.add("block");

    passMessage.textContent =
      "Please input the Username and Password to continue";
    console.error("Firebase error:", err.message);
  }
});
