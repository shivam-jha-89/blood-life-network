// function RoleSetup() {
//   const [role, setRole] = useState("");
//   const [name, setName] = useState("");
//   const { user } = useUser(); // Clerk

//   const handleSubmit = async () => {
//     await axios.post("/api/users/create", {
//       clerkId: user.id,
//       email: user.primaryEmailAddress.emailAddress,
//       name,
//       role,
//     });
//     window.location.href = "/dashboard";
//   };

//   return (
//     <div>
//       <h2>Complete Your Profile</h2>
//       <input value={name} onChange={e => setName(e.target.value)} placeholder="Your Name / Hospital Name"/>
//       <select value={role} onChange={e => setRole(e.target.value)}>
//         <option value="">Select Role</option>
//         <option value="donor">Donor</option>
//         <option value="hospital">Hospital</option>
//       </select>
//       <button onClick={handleSubmit}>Save</button>
//     </div>
//   );
// }
