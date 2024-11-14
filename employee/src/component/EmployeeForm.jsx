import React, { useState } from 'react';
import { storage } from '../firebaseConfig'; 
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function EmployeeForm() {
  const [image, setImage] = useState(null);
  const [employeeData, setEmployeeData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const storageRef = ref(storage, 'employee_images/' + image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Progress monitoring (optional)
        },
        (error) => {
          console.error('Upload failed:', error);
        },
        async () => {
          // Get the download URL and then save it to Firestore
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);

          // You can now add the employee data (including image URL) to Firestore
          const employee = { ...employeeData, image: imageUrl };
          // Add employee to Firestore (use your Firestore logic here)
          console.log('Employee added:', employee);
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />
      <input
        type="text"
        placeholder="Name"
        value={employeeData.name}
        onChange={(e) => setEmployeeData({ ...employeeData, name: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EmployeeForm;
