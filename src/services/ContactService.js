import axios from "axios";
import toast from "react-hot-toast";
import { validateEmail, validateLabel, validateName, validatePhoneNumber } from "../utils/validation";

//Service: fetch all contacts of user
export const getAllContacts = async (token) => {
    try {
        const res = await axios.get("http://localhost:8080/contacts/getAll", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to fetch profile");
        return null;
    }
}
//Service: create new contact
export const createContact = async (
    firstName,
    lastName,
    email,
    emailLabel,
    phoneNumber,
    phoneNumberLabel,
    token
) => {
    if (!validateName(firstName)) {
        toast.error("First name must be 3–100 characters");
        return null;
    }

    if (!validateName(lastName)) {
        toast.error("Last name must be 3–100 characters");
        return null;
    }

    if (!validateEmail(email)) {
        toast.error("Email must be valid");
        return null;
    }

    if (!validateLabel(emailLabel)) {
        toast.error("Email label must be 3–20 characters");
        return null;
    }

    if (!validateLabel(phoneNumberLabel)) {
        toast.error("Phone label must be 3–20 characters");
        return null;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        toast.error("Phone number must be in international format (E.164)");
        return null;
    }

    try {
        const res = await axios.post(
            "http://localhost:8080/contacts/create",
            {
                firstName,
                lastName,
                email,
                emailLabel,
                phoneNumber,
                phoneNumberLabel
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (res.status === 200 || res.status === 201) {
            toast.success("Contact created");
            return res.data;
        }

        return null;
    } catch (err) {
        toast.error(err?.response?.data?.message || "Error occurred");
        return null;
    }
};

// Service: update an existing contact
export const updateContact = async (
    id,
    firstName,
    lastName,
    email,
    emailLabel,
    phoneNumber,
    phoneNumberLabel,
    token
) => {
    
    if (!validateName(firstName)) {
        toast.error("First name must be 3–100 characters");
        return null;
    }

    if (!validateName(lastName)) {
        toast.error("Last name must be 3–100 characters");
        return null;
    }

    if (!validateEmail(email)) {
        toast.error("Email must be valid");
        return null;
    }

    if (!validateLabel(emailLabel)) {
        toast.error("Email label must be 3–20 characters");
        return null;
    }

    if (!validateLabel(phoneNumberLabel)) {
        toast.error("Phone label must be 3–20 characters");
        return null;
    }

    if (!validatePhoneNumber(phoneNumber)) {
        toast.error("Phone number must be in international format (E.164)");
        return null;
    }

    try {
        const res = await axios.put(
            `http://localhost:8080/contacts/update/${id}`,  // ID in URL
            {
                firstName,
                lastName,
                email,
                emailLabel,
                phoneNumber,
                phoneNumberLabel
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        if (res.status === 200) {
            toast.success("Contact updated successfully");
            return res.data;
        }
    } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to update contact");
        return null;
    }
};

// Service: delete a contact by ID
export const deleteContact = async (id, token) => {
    try {
        const res = await axios.delete(
            `http://localhost:8080/contacts/delete/${id}`, // ID in URL
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        if (res.status === 200 || res.status === 204) {
            toast.success("Contact deleted successfully");
            return true; // return true on success
        }
    } catch (err) {
        toast.error(err?.response?.data?.message || "Failed to delete contact");
        return false;
    }
};