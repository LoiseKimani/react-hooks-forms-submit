import React, { useState } from "react";

function Form() {
const [firstName, setFirstName] = useState("Sylvia");
const [lastName, setLastName] = useState("Woods");
const [submittedData, setSubmittedData] = useState([]);
const [errors, setErrors] = useState([]);

const handleFirstNameChange = (event) => {
setFirstName(event.target.value);
};

const handleLastNameChange = (event) => {
setLastName(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
if (firstName.length > 0) {
const formData = {
firstName: firstName,
lastName: lastName,
};
setSubmittedData([...submittedData, formData]);
setFirstName("");
setLastName("");
setErrors([]);
} else {
setErrors(["First Name is required"]);
}
};

const allSubmissions = submittedData.map((data, index) => {
return (
<div key={index}>
{data.firstName} {data.lastName}
</div>
);  
});

return (
<>
<form onSubmit={handleSubmit}>
<input
       type="text"
       placeholder="First Name"
       onChange={handleFirstNameChange}
       value={firstName}
     />
<input
       type="text"
       placeholder="Last Name"
       onChange={handleLastNameChange}
       value={lastName}
     />
<button type="submit">Submit</button>
</form>
{errors.length > 0 ? (
errors.map((error, index) => (
<p key={index} style={{ color: "red" }}>
{error}
</p>
))
) : null}
<h3>Submissions</h3>
<div className="submissions">{allSubmissions}</div>
</>
);
}

export default Form;
