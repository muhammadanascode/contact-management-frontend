import { useEffect, useRef, useState } from "react";
import InputField from "./InputField";

const SearchBar = ({onSearch}) => {

    const [value, setValue] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(value);
        }, 2000);

        return () => clearTimeout(timer);
    }, [value]);

    return (
        <InputField
            type="text"
            placeholder="Search contacts by name"
            value={value}
            setValue={setValue}
        />
    );
};

export default SearchBar;
