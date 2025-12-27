import { useState } from "react";
import InputField from "./InputField";

const SearchBar = () => {
    const[value , setValue] = useState("");

    return (
        <InputField
            type="text"
            placeholder="Search contacts by name or phone..."
            value={value}
            setValue={setValue}
        />
    );
};

export default SearchBar;
