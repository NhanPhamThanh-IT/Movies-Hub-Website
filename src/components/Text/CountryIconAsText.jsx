// Desc: Display country icon as text
// Usage: <CountryIconAsText country={country} />

// Define the CountryIconAsText component
// The country icon will be displayed as a small flag
// It takes a country prop and returns the flag icon
const CountryIconAsText = ({ country }) => {
    return (
        <img
            src={`https://flagcdn.com/16x12/${country.toLowerCase()}.png`}
            alt={`${country}`}
            style={{ verticalAlign: "middle", width: "21px", height: "18px" }}
        />
    );
};

// Exporting the CountryIconAsText component
export default CountryIconAsText;