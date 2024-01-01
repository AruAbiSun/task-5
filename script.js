const resume = {
  name: "Aruna",
  address: "Tirunelveli",
  phone: "73390xxxxx",
  email: "arunaxxxxxxxx@gmail.com",

  education: [
    {
      degree: "M.Sc.,M.Phil Mathematics",
      college: "M.S.university",
      graduationYear: "2017",
    },
  ],
  experience: [
    {
      position: "Assistant professor",
      company: "XYZ college",
      startDate: "June 2017",
      endDate: "May 2018",
      responsibilities: ["To make knowledgable student."],
    },
  ],
  skills: ["How to handling student", "Problem solving."],
};
// for of loop
for (let val of Object.keys(resume)) {
  console.log(val, "=>", resume[val]);
}
//for in loop
for (let key in resume) {
  console.log(key, "==>", resume[key]);
}
//forEach Method
Object.keys(resume).forEach((key) => {
  console.log(key, resume[key]);
});
