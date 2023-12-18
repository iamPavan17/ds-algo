export default function App() {
  const [pinCode, setPinCode] = React.useState("");
  const [clicked, setClicked] = React.useState(false);

  React.useEffect(() => {
    const getData = setTimeout(() => {
      axios
        .get(`https://api.postalpincode.in/pincode/${pinCode}`)
        .then((response) => {
          console.log(response.data[0]);
        });
    }, 2000);

    return () => clearTimeout(getData);
  }, [pinCode]);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    console.log("CALLING API...");
    setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <div className="app">
      <input
        placeholder="Search Input.."
        onChange={(event) => setPinCode(event.target.value)}
      />
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
